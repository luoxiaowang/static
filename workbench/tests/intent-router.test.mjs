import test from 'node:test';
import assert from 'node:assert/strict';
import * as intentRouter from '../scripts/ai/intent-router.mjs';

test('图片生成意图优先于联网查询意图', () => {
  assert.equal(intentRouter.detectAgentIntent('画一张今天的天气海报'), 'image');
});

test('实时信息问题识别为联网查询', () => {
  assert.equal(intentRouter.detectAgentIntent('查询今天上海天气'), 'web');
  assert.equal(intentRouter.detectAgentIntent('搜索最新的 AI 新闻'), 'web');
});

test('工作台数据问题保持普通聊天', () => {
  assert.equal(intentRouter.detectAgentIntent('我今天有哪些 Todo'), 'chat');
  assert.equal(intentRouter.detectAgentIntent('总结最近记录的灵感'), 'chat');
});

test('没有明确特征时交给模型分类', () => {
  assert.equal(intentRouter.detectAgentIntent('帮我分析下一步'), 'unknown');
});
