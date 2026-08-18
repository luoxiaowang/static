import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import { createDeleteConfirmation } from '../scripts/core/delete-confirm.mjs';

const root = new URL('../', import.meta.url);

test('页面锁定 Vue 与 Element Plus CDN 版本', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /vue@3\.5\.40/);
  assert.match(html, /element-plus@2\.14\.3/);
  assert.doesNotMatch(html, /@latest|element-plus@latest|vue@latest/);
});

test('页面包含左侧导航和 Vue 根节点', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /id="app"/);
  assert.match(html, /class="sidebar/);
  assert.match(html, /<el-menu/);
});

test('折叠导航仍为菜单和底部按钮保留中文可访问名称', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /<el-menu-item[^>]+:aria-label="item\.label"/);
  assert.match(html, /aria-label="设置与数据"/);
  assert.match(html, /:aria-label="sidebarCollapsed \? '展开导航' : '收起导航'"/);
});

test('浏览器内模板使用动态组件加载驼峰图标', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /<component is="AlarmClock"><\/component>/);
  assert.match(html, /<component is="Setting"><\/component>/);
  assert.doesNotMatch(html, /<AlarmClock|<Setting|<Plus|<ArrowLeft/);
});

test('沙漏组件包含真实玻璃和沙量结构', async () => {
  const source = await readFile(new URL('scripts/vue-app.mjs', root), 'utf8');
  assert.match(source, /glass-shell/);
  assert.match(source, /sand-top/);
  assert.match(source, /sand-stream/);
  assert.match(source, /sand-pile/);
});

test('拟真沙漏包含玻璃边缘、后侧高光、木纹和沙影分层', async () => {
  const source = await readFile(new URL('scripts/vue-app.mjs', root), 'utf8');
  for (const className of ['glass-edge', 'glass-rear-highlight', 'frame-grain', 'sand-shadow']) {
    assert.match(source, new RegExp(className));
  }
});

test('新增模块具有桌面和移动端样式', async () => {
  const styles = await readFile(new URL('styles/components.css', root), 'utf8');
  for (const className of ['pomodoro-card', 'idea-day-group', 'favorite-grid', 'agent-shell', 'agent-composer']) {
    assert.match(styles, new RegExp(`\\.${className}`));
  }
  assert.match(styles, /safe-area-inset-bottom/);
  assert.match(styles, /@media \(max-width: 600px\)/);
});

test('Element Plus 消息对象保留 success 和 error 静态方法', async () => {
  const source = await readFile(new URL('scripts/vue-app.mjs', root), 'utf8');
  assert.match(source, /const message = ElementPlus\.ElMessage;/);
  assert.doesNotMatch(source, /const message = \(\.\.\.args\)/);
});

test('导入和清空数据后会重新加载主题生日与声音设置', async () => {
  const source = await readFile(new URL('scripts/vue-app.mjs', root), 'utf8');
  assert.match(source, /async function loadSettings\(\)/);
  assert.match(source, /await (?:replaceAllData|mergeAllData)\(data\); await loadSettings\(\); await loadAll\(\)/);
  assert.match(source, /await clearAllData\(\); await loadSettings\(\);/);
});

test('Vue 应用接入 Todo 排序、番茄钟、收藏夹和 AI 上下文模块', async () => {
  const source = await readFile(new URL('scripts/vue-app.mjs', root), 'utf8');
  assert.match(source, /import \{ normalizePriority, selectTodos \} from '.\/core\/todo-sort\.mjs'/);
  assert.match(source, /from '.\/core\/pomodoro\.mjs'/);
  assert.match(source, /from '.\/ai\/agnes-client\.mjs'/);
  assert.match(source, /from '.\/ai\/workspace-context\.mjs'/);
  assert.match(source, /const showAllTodos = ref\(false\)/);
  assert.match(source, /const visibleTodos = computed\(\(\) => selectTodos/);
});

test('收藏夹和番茄钟持久化，Agent 聊天仅保存在内存', async () => {
  const source = await readFile(new URL('scripts/vue-app.mjs', root), 'utf8');
  assert.match(source, /const favorites = ref\(\[\]\)/);
  assert.match(source, /\['todos', 'timers', 'ideas', 'thoughts', 'favorites'\]/);
  assert.match(source, /getSetting\('pomodoroState'/);
  assert.match(source, /setSetting\('pomodoroState'/);
  assert.match(source, /setSetting\('notificationGranted'/);
  assert.match(source, /const agentMessages = ref\(\[\]\)/);
  assert.doesNotMatch(source, /putRecord\(['"]agent/);
});

test('创意灵感按本地日期聚合', async () => {
  const source = await readFile(new URL('scripts/vue-app.mjs', root), 'utf8');
  assert.match(source, /const ideaGroups = computed\(\(\) => groupByLocalDate\(filteredIdeas\.value\)/);
});

test('页面提供 Todo 全部视图、优先级和番茄钟控制', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /全部 Todo/);
  assert.match(html, /v-model="todoForm\.priority"/);
  assert.match(html, />30 分钟</);
  assert.match(html, />1 小时</);
  assert.match(html, /beginPomodoro/);
  assert.match(html, /pauseCurrentPomodoro/);
});

test('页面提供分组灵感、收藏夹和 Agent 助手流程', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /v-for="group in ideaGroups"/);
  assert.match(html, /activeView === 'favorites'/);
  assert.match(html, /AI 识别/);
  assert.match(html, /v-model="favoriteForm\.outline"/);
  assert.match(html, /activeView === 'agent'/);
  assert.match(html, /sendAgentMessage/);
  assert.match(html, /clearAgentConversation/);
});

test('Agent 自动路由联网查询与图片生成并展示对应结果', async () => {
  const source = await readFile(new URL('scripts/vue-app.mjs', root), 'utf8');
  const html = await readFile(new URL('index.html', root), 'utf8');
  const styles = await readFile(new URL('styles/components.css', root), 'utf8');

  for (const name of ['detectAgentIntent', 'classifyAgentIntent', 'searchWebWithAgent', 'generateAgentImage', 'agentTaskLabel', 'downloadAgentImage', 'regenerateAgentImage']) {
    assert.match(source, new RegExp(`\\b${name}\\b`));
  }
  assert.match(html, /item\.sources/);
  assert.match(html, /item\.imageUrl/);
  assert.match(html, /downloadAgentImage/);
  assert.match(html, /regenerateAgentImage/);
  for (const className of ['agent-sources', 'agent-image-card', 'agent-generated-image']) {
    assert.match(styles, new RegExp(`\\.${className}`));
  }
});

test('通知授权按钮会根据真实权限更新文案', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /notificationPermission === 'granted' \? '已授权' : '申请权限'/);
});

test('导出按钮不会把点击事件传给文件名生成逻辑', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /@click="exportData\(\)"/);
  assert.doesNotMatch(html, /@click="exportData"/);
});

test('删除按钮第一次进入确认，窗口内第二次执行删除', () => {
  const confirmation = createDeleteConfirmation(5000);
  assert.equal(confirmation.click('todos:1', 1000), false);
  assert.equal(confirmation.isPending('todos:1', 1001), true);
  assert.equal(confirmation.click('todos:1', 2000), true);
  assert.equal(confirmation.isPending('todos:1', 2001), false);
});

test('删除确认超时后必须重新点击两次', () => {
  const confirmation = createDeleteConfirmation(5000);
  assert.equal(confirmation.click('ideas:1', 1000), false);
  assert.equal(confirmation.isPending('ideas:1', 6001), false);
  assert.equal(confirmation.click('ideas:1', 6001), false);
  confirmation.cancel();
  assert.equal(confirmation.isPending('ideas:1', 6002), false);
});
