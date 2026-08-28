import test from 'node:test';
import assert from 'node:assert/strict';

import * as agnesClient from '../scripts/ai/agnes-client.mjs';
import { buildWorkspaceContext } from '../scripts/ai/workspace-context.mjs';

const { askWorkspaceAgent, recognizeFavorite } = agnesClient;

function response({ ok = true, status = 200, content = '' } = {}) {
  return {
    ok,
    status,
    json: async () => ({ choices: [{ message: { content } }] }),
  };
}

function jsonResponse(payload, { ok = true, status = 200 } = {}) {
  return { ok, status, json: async () => payload };
}

test('收藏识别解析 AgnesAI 返回的 JSON', async () => {
  const fetchImpl = async (url, options) => {
    assert.match(url, /\/v1\/responses$/);
    assert.equal(JSON.parse(options.body).tools[0].type, 'web_search_preview');
    return jsonResponse({ output: [{ type: 'message', content: [{ type: 'output_text', text: '```json\n{"title":"示例","summary":"简洁摘要","outline":"## 大纲"}\n```' }] }] });
  };
  const result = await recognizeFavorite('https://example.com/article', { fetchImpl });
  assert.deepEqual(result, { title: '示例', summary: '简洁摘要', outline: '## 大纲' });
});

test('收藏识别失败时不猜测或填充内容', async () => {
  const fetchImpl = async () => jsonResponse({ output: [{ type: 'message', content: [{ type: 'output_text', text: '{"title":"","summary":"","outline":""}' }] }] });
  await assert.rejects(() => recognizeFavorite('https://example.com', { fetchImpl }), /无法解析 AI 返回的收藏内容/);
});

test('收藏识别空内容时明确失败', async () => {
  await assert.rejects(
    () => recognizeFavorite('https://example.com', { fetchImpl: async () => jsonResponse({ output: [] }) }),
    /没有返回有效内容/,
  );
});

test('AI 错误信息可理解且不暴露认证信息', async () => {
  await assert.rejects(
    () => askWorkspaceAgent([], 'context', { fetchImpl: async () => response({ ok: false, status: 401 }) }),
    (error) => /API Key 无效或无权限/.test(error.message) && !/Bearer|Authorization|sk-/.test(error.message),
  );
  await assert.rejects(
    () => askWorkspaceAgent([], 'context', { fetchImpl: async () => response({ ok: false, status: 429 }) }),
    /AI 请求过于频繁/,
  );
  await assert.rejects(
    () => askWorkspaceAgent([], 'context', { fetchImpl: async () => { throw new TypeError('Failed to fetch'); } }),
    /无法连接 AgnesAI/,
  );
});

test('Agent 返回纯文本回答并接收工作台上下文', async () => {
  let requestBody;
  const fetchImpl = async (_url, options) => {
    requestBody = JSON.parse(options.body);
    return response({ content: '先完成高优先级任务。' });
  };
  const result = await askWorkspaceAgent([{ role: 'user', content: '今天做什么？' }], 'Todo：写方案', { fetchImpl });
  assert.equal(result, '先完成高优先级任务。');
  assert.match(requestBody.messages[0].content, /Todo：写方案/);
  assert.equal(requestBody.model, 'agnes-2.5-flash');
});

test('Agent 必须以工作台本机日期为准解释今天和明天', async () => {
  let requestBody;
  const fetchImpl = async (_url, options) => {
    requestBody = JSON.parse(options.body);
    return response({ content: '今天是 2026-08-18。' });
  };
  const context = buildWorkspaceContext({}, {
    now: new Date(2026, 7, 18, 23, 30, 0),
    timeZone: 'Asia/Shanghai',
  });

  await askWorkspaceAgent([{ role: 'user', content: '今天是哪天？' }], context, { fetchImpl });

  assert.match(context, /当前本机日期：2026-08-18/);
  assert.match(context, /当前本机时间：23:30:00/);
  assert.match(context, /本机时区：Asia\/Shanghai/);
  assert.match(requestBody.messages[0].content, /今天.*必须以.*当前本机日期时间为准/);
});

test('模糊意图由 AgnesAI 分类且无效分类降级为普通聊天', async () => {
  let requestBody;
  const fetchImpl = async (_url, options) => {
    requestBody = JSON.parse(options.body);
    return response({ content: '```json\n{"intent":"image"}\n```' });
  };
  assert.equal(await agnesClient.classifyAgentIntent('帮我做一个视觉方案', { fetchImpl }), 'image');
  assert.match(requestBody.messages[0].content, /chat\|web\|image/);
  assert.equal(await agnesClient.classifyAgentIntent('随便聊聊', { fetchImpl: async () => response({ content: 'unknown' }) }), 'chat');
});

test('联网查询使用 web_search_preview 并解析去重来源', async () => {
  let requestBody;
  const fetchImpl = async (url, options) => {
    assert.match(url, /\/v1\/responses$/);
    requestBody = JSON.parse(options.body);
    return jsonResponse({
      output: [{
        type: 'message',
        content: [{
          type: 'output_text',
          text: 'Agnes Image 2.1 Flash 是当前图像模型。',
          annotations: [
            { type: 'url_citation', title: '官方文档', url: 'https://agnes-ai.com/doc' },
            { type: 'url_citation', url_citation: { title: '官方文档', url: 'https://agnes-ai.com/doc' } },
          ],
        }],
      }],
    });
  };
  const result = await agnesClient.searchWebWithAgent('最新 Agnes 图片模型', '工作台上下文', { fetchImpl });
  assert.equal(requestBody.model, 'agnes-2.5-flash');
  assert.equal(requestBody.tools[0].type, 'web_search_preview');
  assert.match(requestBody.instructions, /必须联网搜索/);
  assert.equal(result.content, 'Agnes Image 2.1 Flash 是当前图像模型。');
  assert.deepEqual(result.sources, [{ title: '官方文档', url: 'https://agnes-ai.com/doc' }]);
});

test('联网查询没有正文或来源时明确失败', async () => {
  await assert.rejects(
    () => agnesClient.searchWebWithAgent('最新新闻', 'context', { fetchImpl: async () => jsonResponse({ output: [] }) }),
    /没有返回有效内容/,
  );
  await assert.rejects(
    () => agnesClient.searchWebWithAgent('最新新闻', 'context', { fetchImpl: async () => jsonResponse({ output: [{ type: 'message', content: [{ type: 'output_text', text: '无来源回答', annotations: [] }] }] }) }),
    /没有返回可验证的来源/,
  );
});

test('图片生成使用独立模型并解析 URL', async () => {
  let requestBody;
  const fetchImpl = async (url, options) => {
    assert.match(url, /\/v1\/images\/generations$/);
    requestBody = JSON.parse(options.body);
    return jsonResponse({ data: [{ url: 'https://images.example/result.png', revised_prompt: '优化后的提示词' }] });
  };
  const result = await agnesClient.generateAgentImage('中文效率工作台海报', { fetchImpl });
  assert.equal(requestBody.model, 'agnes-image-2.1-flash');
  assert.equal(requestBody.size, '1024x1024');
  assert.equal(requestBody.extra_body.response_format, 'url');
  assert.match(requestBody.prompt, /画面包含文字.*简体中文/);
  assert.match(requestBody.prompt, /中文效率工作台海报/);
  assert.deepEqual(result, { imageUrl: 'https://images.example/result.png', revisedPrompt: '优化后的提示词' });
});

test('图片生成兼容 Base64 并拒绝空结果', async () => {
  const base64Result = await agnesClient.generateAgentImage('蓝色图标', {
    fetchImpl: async () => jsonResponse({ data: [{ b64_json: 'aGVsbG8=' }] }),
  });
  assert.equal(base64Result.imageUrl, 'data:image/png;base64,aGVsbG8=');
  await assert.rejects(
    () => agnesClient.generateAgentImage('空结果', { fetchImpl: async () => jsonResponse({ data: [] }) }),
    /没有返回有效图片/,
  );
});

test('工作台上下文覆盖所有业务数据且排除设置', () => {
  const context = buildWorkspaceContext({
    todos: [{ id: 't1', title: '写方案', completed: false }],
    timers: [{ id: 'c1', name: '上线', targetAt: '2026-08-20T10:00:00.000Z' }],
    pomodoro: { status: 'paused', remainingMs: 60000 },
    ideas: [{ id: 'i1', content: '新创意', createdAt: '2026-08-18T10:00:00.000Z' }],
    thoughts: [{ id: 'n1', content: '今日复盘', createdAt: '2026-08-18T11:00:00.000Z' }],
    favorites: [{ id: 'f1', url: 'https://example.com', title: '示例收藏', summary: '摘要' }],
    settings: [{ id: 'secret', value: '不应出现' }],
  });
  for (const label of ['Todo', '倒计时', '番茄钟', '创意灵感', '碎碎念', '收藏夹']) assert.match(context, new RegExp(label));
  assert.doesNotMatch(context, /不应出现|settings|secret/);
});

test('工作台上下文超过上限时明确标记截断', () => {
  const context = buildWorkspaceContext({ thoughts: [{ id: '1', content: '很长的内容'.repeat(100), createdAt: '2026-08-18T11:00:00.000Z' }] }, { maxChars: 160 });
  assert.ok(context.length <= 160);
  assert.match(context, /上下文已截断/);
});
