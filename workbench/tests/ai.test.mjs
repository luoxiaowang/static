import test from 'node:test';
import assert from 'node:assert/strict';

import { askWorkspaceAgent, recognizeFavorite } from '../scripts/ai/agnes-client.mjs';
import { buildWorkspaceContext } from '../scripts/ai/workspace-context.mjs';

function response({ ok = true, status = 200, content = '' } = {}) {
  return {
    ok,
    status,
    json: async () => ({ choices: [{ message: { content } }] }),
  };
}

test('收藏识别解析 AgnesAI 返回的 JSON', async () => {
  const fetchImpl = async () => response({ content: '```json\n{"title":"示例","summary":"简洁摘要","outline":"## 大纲"}\n```' });
  const result = await recognizeFavorite('https://example.com/article', { fetchImpl });
  assert.deepEqual(result, { title: '示例', summary: '简洁摘要', outline: '## 大纲' });
});

test('收藏识别失败时不猜测或填充内容', async () => {
  const fetchImpl = async () => response({ content: '{"title":"","summary":"","outline":""}' });
  await assert.rejects(() => recognizeFavorite('https://example.com', { fetchImpl }), /无法解析 AI 返回的收藏内容/);
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

test('工作台上下文覆盖所有业务数据且排除设置', () => {
  const context = buildWorkspaceContext({
    todos: [{ id: 't1', title: '写方案', priority: 'high', completed: false }],
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
