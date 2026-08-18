# Personal Workbench Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一个完全离线、使用 IndexedDB 保存数据的个人工作台，提供 Todo、倒计时、创意灵感、碎碎念和集中设置管理。

**Architecture:** 使用原生 ES Modules 拆分数据访问、纯逻辑、视图模块和应用编排。业务记录统一通过 IndexedDB 仓储读写，日期计算、状态计算和备份校验保持为无副作用函数，便于使用 Node 内置测试运行器验证。

**Tech Stack:** HTML5、CSS3、原生 JavaScript ES Modules、IndexedDB、Web Notifications、Web Audio API、Node.js `node:test`

---

## 文件结构

- `workbench/index.html`：应用语义结构、四个 Tab、设置抽屉和通用弹窗容器。
- `workbench/styles/base.css`：设计变量、布局、响应式和无障碍基础样式。
- `workbench/styles/components.css`：表单、卡片、列表、标签、抽屉、Toast 和弹窗样式。
- `workbench/styles/hourglass.css`：沙漏结构、流沙动画和减少动态效果适配。
- `workbench/scripts/core/date.mjs`：日期边界、格式化、倒计时和 Todo 状态纯函数。
- `workbench/scripts/core/backup.mjs`：备份结构生成、导入校验和合并规则纯函数。
- `workbench/scripts/core/dom.mjs`：安全 DOM 构建、Toast、确认框和通用交互帮助函数。
- `workbench/scripts/storage/db.mjs`：IndexedDB 初始化、CRUD、事务导入和清空。
- `workbench/scripts/features/todo.mjs`：Todo 列表、日期导航、表单与操作。
- `workbench/scripts/features/countdown.mjs`：指定倒计时、关键日期沙漏和提醒调度。
- `workbench/scripts/features/ideas.mjs`：灵感录入、筛选、编辑、状态切换与删除。
- `workbench/scripts/features/thoughts.mjs`：碎碎念录入、按日分组、编辑与删除。
- `workbench/scripts/features/settings.mjs`：主题、生日、通知、提示音和数据摘要。
- `workbench/scripts/app.mjs`：应用启动、Tab 切换、模块初始化和跨模块刷新。
- `workbench/tests/date.test.mjs`：日期与状态规则测试。
- `workbench/tests/backup.test.mjs`：备份校验与合并规则测试。
- `workbench/README.md`：本地运行、数据边界和备份说明。

### Task 1: 建立应用骨架和视觉系统

**Files:**
- Create: `workbench/index.html`
- Create: `workbench/styles/base.css`
- Create: `workbench/styles/components.css`
- Create: `workbench/styles/hourglass.css`
- Create: `workbench/scripts/app.mjs`
- Create: `workbench/README.md`

- [ ] **Step 1: 创建语义页面骨架**

在 `index.html` 中建立头部、`role="tablist"` 的四个 Tab、四个 `role="tabpanel"`、设置抽屉、通用确认弹窗、Toast 区域和模块脚本入口。所有按钮使用 `type="button"`，图标按钮提供中文 `aria-label`。

- [ ] **Step 2: 建立主题变量与响应式布局**

在 `base.css` 定义 `--color-primary`、`--bg-page`、`--bg-card`、`--text-primary`、`--border-color`、`--danger`、`--warning`、`--success` 等变量，并通过 `html[data-theme="dark"]` 覆盖深色变量。窄于 720px 时让 Tab 横向滚动、表单纵向排列、底部输入区适配 `env(safe-area-inset-bottom)`。

- [ ] **Step 3: 完成组件和沙漏样式**

实现 Element UI 风格的按钮、输入框、卡片、状态标签、空状态、抽屉、模态框和 Toast。沙漏使用两个三角形容器、沙粒流动伪元素和 `@keyframes`；在 `@media (prefers-reduced-motion: reduce)` 中关闭动画。

- [ ] **Step 4: 建立应用启动入口**

让 `app.mjs` 完成 Tab 键盘/点击切换、设置抽屉开关和初始模块占位加载。加载失败时在页面显示中文错误，而不是只写控制台。

- [ ] **Step 5: 静态检查**

Run: `node --check workbench/scripts/app.mjs`

Expected: 退出码 0，无语法错误。

### Task 2: 日期、状态与关键倒计时纯逻辑

**Files:**
- Create: `workbench/tests/date.test.mjs`
- Create: `workbench/scripts/core/date.mjs`

- [ ] **Step 1: 编写失败测试**

测试 `getTodoStatus(todo, now)` 的已完成、已过期、24 小时内即将到期、普通进行中和无截止时间分支；测试 `getPeriodRange(type, now, birthday)` 的本日、本周、本月、本年和人生边界，其中一周从周一开始。

```js
assert.equal(getTodoStatus({ completed: true }, now), 'completed');
assert.equal(getTodoStatus({ completed: false, dueAt: '2026-08-18T09:00:00.000Z' }, now), 'overdue');
assert.equal(getTodoStatus({ completed: false, dueAt: '2026-08-19T08:00:00.000Z' }, now), 'due-soon');
```

- [ ] **Step 2: 运行测试确认失败**

Run: `node --test workbench/tests/date.test.mjs`

Expected: 因 `date.mjs` 或导出函数不存在而失败。

- [ ] **Step 3: 实现最小日期逻辑**

实现并导出 `getTodoStatus`、`getPeriodRange`、`getCountdownParts`、`formatLocalDate`、`formatDateTime`、`groupByLocalDate`。所有函数接受显式时间参数，避免测试依赖真实当前时间。

- [ ] **Step 4: 运行测试确认通过**

Run: `node --test workbench/tests/date.test.mjs`

Expected: 全部测试通过。

### Task 3: IndexedDB 数据层与备份规则

**Files:**
- Create: `workbench/tests/backup.test.mjs`
- Create: `workbench/scripts/core/backup.mjs`
- Create: `workbench/scripts/storage/db.mjs`

- [ ] **Step 1: 编写备份规则失败测试**

测试 `createBackup` 生成应用标识、版本和五类数据；测试 `validateBackup` 拒绝错误 JSON、错误应用标识、错误集合类型和缺失 ID；测试 `mergeRecords` 对相同 ID 使用导入记录。

```js
assert.deepEqual(
  mergeRecords([{ id: '1', title: '旧' }], [{ id: '1', title: '新' }, { id: '2', title: '追加' }]),
  [{ id: '1', title: '新' }, { id: '2', title: '追加' }]
);
```

- [ ] **Step 2: 运行测试确认失败**

Run: `node --test workbench/tests/backup.test.mjs`

Expected: 因备份函数尚未实现而失败。

- [ ] **Step 3: 实现备份纯函数**

导出 `BACKUP_APP_ID`、`BACKUP_VERSION`、`createBackup`、`validateBackup`、`mergeRecords`。校验函数返回规范化数据或抛出带中文信息的 `Error`。

- [ ] **Step 4: 实现 IndexedDB 仓储**

数据库名使用 `personal-workbench`，版本为 1，建立 `todos`、`timers`、`ideas`、`thoughts`、`settings` 六个对象仓库。导出 `openDatabase`、`listRecords`、`putRecord`、`deleteRecord`、`getSetting`、`setSetting`、`getAllData`、`replaceAllData`、`mergeAllData`、`clearAllData`。覆盖和合并写入使用单次读写事务。

- [ ] **Step 5: 运行纯逻辑测试**

Run: `node --test workbench/tests/backup.test.mjs`

Expected: 全部测试通过。

### Task 4: 通用 DOM 交互与设置中心

**Files:**
- Create: `workbench/scripts/core/dom.mjs`
- Create: `workbench/scripts/features/settings.mjs`
- Modify: `workbench/scripts/app.mjs`

- [ ] **Step 1: 实现安全 DOM 帮助函数**

提供 `createElement`、`showToast`、`confirmAction`、`downloadJson`、`readJsonFile`。用户输入只通过 `textContent` 写入，不使用拼接后的 `innerHTML`。

- [ ] **Step 2: 实现主题与生日设置**

主题支持浅色、深色、跟随系统，并监听系统主题变化。首次没有生日时，打开设置抽屉并聚焦生日字段；生日保存后触发 `workbench:settings-changed` 事件刷新人生倒计时。

- [ ] **Step 3: 实现通知和声音设置**

仅在用户点击“申请通知权限”后调用 `Notification.requestPermission()`。设置中展示当前权限；提示音通过 Web Audio API 本地生成，开关持久化。

- [ ] **Step 4: 实现数据摘要与危险操作**

显示每个业务仓库的数据量和最近导出时间。清空全部数据必须输入“清空”确认，成功后刷新全部模块。

- [ ] **Step 5: 语法检查**

Run: `node --check workbench/scripts/core/dom.mjs && node --check workbench/scripts/features/settings.mjs`

Expected: 退出码 0。

### Task 5: Todo 功能

**Files:**
- Create: `workbench/scripts/features/todo.mjs`
- Modify: `workbench/scripts/app.mjs`

- [ ] **Step 1: 实现 Todo 表单和日期导航**

表单包含标题、备注、所属日期和可选截止时间。新增时生成 `crypto.randomUUID()`，保存 `createdAt`、`updatedAt`、`completed` 和 `completedAt`。

- [ ] **Step 2: 实现分组、排序与状态展示**

按所属日期分组并默认定位今天。日期组内未完成优先，有截止时间的按截止时间升序，无截止时间排后。使用 `getTodoStatus` 输出中文状态标签。

- [ ] **Step 3: 实现编辑、完成和删除**

编辑复用同一表单；切换完成状态时同步 `completedAt`；删除使用 `confirmAction`，成功后显示 Toast 并刷新列表。

- [ ] **Step 4: 语法与日期规则回归**

Run: `node --check workbench/scripts/features/todo.mjs && node --test workbench/tests/date.test.mjs`

Expected: 语法检查和全部日期测试通过。

### Task 6: 倒计时和沙漏提醒

**Files:**
- Create: `workbench/scripts/features/countdown.mjs`
- Modify: `workbench/scripts/app.mjs`

- [ ] **Step 1: 实现指定时间倒计时 CRUD**

表单包含名称和目标日期时间。列表每秒更新剩余时间，支持编辑和删除；到期记录显示到期时间和已提醒状态。

- [ ] **Step 2: 实现提醒调度**

每秒检查 `targetAt <= now && !notifiedAt` 的记录。依次尝试浏览器通知、页面弹窗和可选提示音，最后写入 `notifiedAt`。页面加载后对已到期未提醒记录执行同一逻辑。

- [ ] **Step 3: 实现五个关键日期沙漏**

调用 `getPeriodRange` 计算本日、本周、本月、本年和人生的起止时间，展示剩余时间及已流逝百分比，并通过 CSS 自定义属性更新沙漏填充比例。生日缺失时人生卡片显示设置引导。

- [ ] **Step 4: 语法与纯逻辑回归**

Run: `node --check workbench/scripts/features/countdown.mjs && node --test workbench/tests/date.test.mjs`

Expected: 全部通过。

### Task 7: 创意灵感与碎碎念

**Files:**
- Create: `workbench/scripts/features/ideas.mjs`
- Create: `workbench/scripts/features/thoughts.mjs`
- Modify: `workbench/scripts/app.mjs`

- [ ] **Step 1: 实现灵感悬浮输入与列表**

支持发送按钮和 `Ctrl/Cmd + Enter` 提交；列表按创建时间倒序，提供全部、未实现、已实现筛选。实现状态变化时维护 `implementedAt`。

- [ ] **Step 2: 实现灵感编辑与删除**

编辑时在原位或通用弹窗中修改文本；删除必须确认。所有用户文本使用 `textContent` 渲染。

- [ ] **Step 3: 实现碎碎念悬浮输入与日期分组**

支持发送按钮和 `Ctrl/Cmd + Enter` 提交；调用 `groupByLocalDate`，日期组倒序、组内时间倒序，并显示完整本地日期时间。

- [ ] **Step 4: 实现碎碎念编辑与删除**

编辑更新 `content` 和 `updatedAt`，保留原始 `createdAt`；删除必须确认。

- [ ] **Step 5: 语法检查**

Run: `node --check workbench/scripts/features/ideas.mjs && node --check workbench/scripts/features/thoughts.mjs`

Expected: 退出码 0。

### Task 8: 导入导出、集成与最终验证

**Files:**
- Modify: `workbench/scripts/features/settings.mjs`
- Modify: `workbench/scripts/app.mjs`
- Modify: `workbench/README.md`

- [ ] **Step 1: 实现导出**

从仓储读取完整数据，调用 `createBackup`，下载文件名 `个人工作台备份-YYYY-MM-DD-HHmmss.json`，成功后更新最近导出时间。

- [ ] **Step 2: 实现合并导入**

读取 JSON 文件并调用 `validateBackup`。用户确认后通过 `mergeAllData` 写入，相同 ID 使用导入内容；成功后刷新所有模块和数据摘要。

- [ ] **Step 3: 实现覆盖还原**

校验导入文件后先自动下载当前数据备份，用户二次确认后调用 `replaceAllData`。事务失败时保持原数据并显示中文错误。

- [ ] **Step 4: 完成应用编排与跨页面提示**

`app.mjs` 初始化数据库后再初始化各模块。写操作通过 `BroadcastChannel('personal-workbench')` 通知其他打开页面显示“数据已在其他页面更新，请刷新”的提示，不宣称自动实时同步。

- [ ] **Step 5: 运行自动检查**

Run: `node --test workbench/tests/*.test.mjs && find workbench/scripts -name '*.mjs' -print0 | xargs -0 -n1 node --check`

Expected: 全部测试通过，所有脚本语法检查退出码为 0。

- [ ] **Step 6: 启动本地静态服务器并做浏览器验收**

Run: `python3 -m http.server 4173 --directory workbench`

在浏览器打开 `http://127.0.0.1:4173`，验证四个 Tab、浅深主题、生日设置、Todo 状态、倒计时到期提醒、灵感状态、碎碎念日期分组、导出、合并导入和覆盖还原。检查网络面板无应用主动发起的远程请求。

- [ ] **Step 7: 检查工作区差异**

Run: `git diff --check && git status --short`

Expected: 无空白错误；只出现设计、计划和 `workbench/` 范围内的新文件，不执行 Git commit。
