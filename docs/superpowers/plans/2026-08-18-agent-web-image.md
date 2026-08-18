# Agent 联网查询与图片生成 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. 本仓库禁止自动 Git commit。

**Goal:** 让现有 Agent 自动识别普通问答、联网查询与图片生成，并使用同一个 AgnesAI Key 完成请求。

**Architecture:** 新增纯函数意图路由模块；Agnes 客户端分别封装 Chat Completions、Responses Web Search 和 Images Generations；Vue 层只负责编排内存消息、取消请求和展示结果。联网与图片结果不持久化。

**Tech Stack:** 静态 HTML、Vue 3、Element Plus、原生 Fetch、Node.js Test Runner、自定义经典脚本打包器。

---

## 文件结构

- Create: `workbench/scripts/ai/intent-router.mjs` — 三类意图的确定性识别。
- Modify: `workbench/scripts/ai/agnes-client.mjs` — 联网、图片与模糊意图分类 API。
- Modify: `workbench/scripts/vue-app.mjs` — 自动路由、消息编排、重试、下载。
- Modify: `workbench/index.html` — 来源与图片消息模板。
- Modify: `workbench/styles/components.css` — 来源列表和图片卡样式。
- Modify: `workbench/build-bundle.mjs` — 将意图路由加入经典包。
- Modify: `workbench/scripts/app.bundle.js` — 由构建脚本生成。
- Modify: `workbench/tests/ai.test.mjs` — API 请求和响应解析测试。
- Create: `workbench/tests/intent-router.test.mjs` — 路由测试。
- Modify: `workbench/tests/redesign.test.mjs` — UI 接线测试。

### Task 1: 自动意图路由

- [ ] **Step 1: 写失败测试**

在 `workbench/tests/intent-router.test.mjs` 覆盖：

```js
assert.equal(detectAgentIntent('画一张今天的天气海报'), 'image');
assert.equal(detectAgentIntent('查询今天上海天气'), 'web');
assert.equal(detectAgentIntent('我今天有哪些 Todo'), 'chat');
assert.equal(detectAgentIntent('帮我分析下一步'), 'unknown');
```

- [ ] **Step 2: 验证 RED**

Run: `node --test workbench/tests/intent-router.test.mjs`

Expected: FAIL，模块或函数尚不存在。

- [ ] **Step 3: 最小实现**

创建 `detectAgentIntent(text)`：图片关键词优先；工作台专属词与“今天”组合保持 `chat`；实时关键词返回 `web`；无法确定返回 `unknown`。

- [ ] **Step 4: 验证 GREEN**

Run: `node --test workbench/tests/intent-router.test.mjs`

Expected: 全部 PASS。

### Task 2: AgnesAI 联网、图片与分类客户端

- [ ] **Step 1: 写失败测试**

在 `workbench/tests/ai.test.mjs` 增加：

```js
await searchWebWithAgent('最新 Agnes 图片模型', 'context', { fetchImpl });
assert.equal(requestBody.tools[0].type, 'web_search_preview');
assert.deepEqual(result.sources, [{ title: '官方文档', url: 'https://agnes-ai.com/doc' }]);

await generateAgentImage('中文效率工作台海报', { fetchImpl });
assert.equal(requestBody.model, 'agnes-image-2.1-flash');
assert.equal(requestBody.extra_body.response_format, 'url');
```

同时覆盖 Base64 结果、重复来源、无正文、无图片和分类失败。

- [ ] **Step 2: 验证 RED**

Run: `node --test workbench/tests/ai.test.mjs`

Expected: FAIL，新增导出尚不存在。

- [ ] **Step 3: 最小实现**

在 `agnes-client.mjs` 增加：

```js
export async function classifyAgentIntent(text, options) {}
export async function searchWebWithAgent(text, workspaceContext, options) {}
export async function generateAgentImage(prompt, options) {}
```

联网请求使用 `/v1/responses` 与 `web_search_preview`；图片请求使用 `/v1/images/generations`、`agnes-image-2.1-flash`、`1024x1024` 和 URL 输出。统一复用认证、HTTP 中文错误和 AbortSignal。

- [ ] **Step 4: 验证 GREEN**

Run: `node --test workbench/tests/ai.test.mjs`

Expected: 全部 PASS。

### Task 3: Vue 编排与消息展示

- [ ] **Step 1: 写失败测试**

在 `workbench/tests/redesign.test.mjs` 断言源码和模板包含：`detectAgentIntent`、`searchWebWithAgent`、`generateAgentImage`、`agentTaskLabel`、`item.sources`、`item.imageUrl`、`downloadAgentImage`、`regenerateAgentImage`。

- [ ] **Step 2: 验证 RED**

Run: `node --test workbench/tests/redesign.test.mjs`

Expected: FAIL，UI 尚未接线。

- [ ] **Step 3: 编排请求**

发送消息后先运行本地路由；`unknown` 才调用模型分类。按结果分别执行聊天、联网或图片函数，并写入以下内存消息：

```js
{ role: 'assistant', kind: 'text', content }
{ role: 'assistant', kind: 'web', content, sources }
{ role: 'assistant', kind: 'image', content: '', imageUrl, prompt }
```

重试使用最后一条用户消息重新路由；图片卡“重新生成”直接复用其 prompt；下载优先 fetch Blob，跨域失败时打开原图 URL。

- [ ] **Step 4: 更新模板与样式**

联网消息展示来源链接；图片消息展示预览、下载和重新生成；加载文案按路由变化；移动端图片宽度不溢出。

- [ ] **Step 5: 验证 GREEN**

Run: `node --test workbench/tests/redesign.test.mjs`

Expected: 全部 PASS。

### Task 4: 构建与完整验证

- [ ] **Step 1: 更新打包输入并生成经典包**

把 `scripts/ai/intent-router.mjs` 放在 `vue-app.mjs` 之前，然后执行：

Run: `node workbench/build-bundle.mjs`

Expected: 输出“已生成 scripts/app.bundle.js”。

- [ ] **Step 2: 运行完整测试**

Run: `node --test workbench/tests/*.test.mjs`

Expected: 0 failures。

- [ ] **Step 3: 静态校验**

Run: `git diff --check`

Expected: 无输出，退出码 0。

- [ ] **Step 4: 核对变更范围**

Run: `git status --short`

Expected: 仅出现本功能文件及用户此前未提交改动；不执行 `git add`、`git commit` 或 `git push`。
