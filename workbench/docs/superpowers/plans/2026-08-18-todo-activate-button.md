# Todo 激活按钮 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 给 Todo 卡片新增「激活」开关按钮，激活后持久化并在元信息区显示「已激活」标签。

**Architecture:** 在 `todos` 记录上新增 `activated: boolean` 字段（默认 `false`）。`vue-app.mjs` 新增 `toggleActivated(todo)` 方法翻转该字段并 `putRecord` 持久化、`loadAll` 刷新；`openTodoDialog`/`saveTodo` 保证编辑时保留该字段。`index.html` 的 Todo 卡片在 `record-meta` 增加「已激活」标签、在 `record-actions` 增加「激活/取消激活」按钮。最后通过 `node workbench/build-bundle.mjs` 重新打包 `app.bundle.js`。

**Tech Stack:** Vue 3（CDN）+ Element Plus（CDN）+ IndexedDB（`scripts/storage/db.mjs` 的 `putRecord`）+ node 打包脚本。

**说明：** 切换逻辑位于浏览器端（Vue 内联代码，依赖 IndexedDB），现有测试不覆盖 `vue-app.mjs`，因此不新增单元测试。每步以「构建成功 + 现有测试通过 + 浏览器实测」作为验证。

---

### Task 1: Vue 逻辑 — `activated` 字段与 `toggleActivated`

**Files:**
- Modify: `workbench/scripts/vue-app.mjs:98`（todoForm 默认值）
- Modify: `workbench/scripts/vue-app.mjs:179-181`（openTodoDialog）
- Modify: `workbench/scripts/vue-app.mjs:183-186`（saveTodo）
- Modify: `workbench/scripts/vue-app.mjs:188`（新增 toggleActivated）
- Modify: `workbench/scripts/vue-app.mjs:351`（return 导出）

- [ ] **Step 1: todoForm 默认值加入 `activated: false`**

将 98 行：

```js
const todoForm = reactive({ id: '', title: '', note: '', date: formatLocalDate(), dueAt: '', priority: 'medium' });
```

改为：

```js
const todoForm = reactive({ id: '', title: '', note: '', date: formatLocalDate(), dueAt: '', priority: 'medium', activated: false });
```

- [ ] **Step 2: openTodoDialog 新建分支加入 `activated: false`**

将 180 行：

```js
Object.assign(todoForm, todo ? { ...todo, dueAt: todo.dueAt || '', priority: normalizePriority(todo.priority) } : { id: '', title: '', note: '', date: selectedTodoDate.value, dueAt: '', priority: 'medium' });
```

改为：

```js
Object.assign(todoForm, todo ? { ...todo, dueAt: todo.dueAt || '', priority: normalizePriority(todo.priority) } : { id: '', title: '', note: '', date: selectedTodoDate.value, dueAt: '', priority: 'medium', activated: false });
```

（编辑已有 Todo 时 `...todo` 已携带 `activated`，无需单独处理。）

- [ ] **Step 3: saveTodo 记录加入 `activated` 保留逻辑**

将 185 行 record 对象中 `completed: existing?.completed || false` 之后加入 `activated: existing?.activated || false`：

```js
const record = { id: todoForm.id || crypto.randomUUID(), title: todoForm.title.trim(), note: todoForm.note.trim(), date: todoForm.date, dueAt: todoForm.dueAt ? new Date(todoForm.dueAt).toISOString() : '', priority: normalizePriority(todoForm.priority), activated: existing?.activated || false, completed: existing?.completed || false, completedAt: existing?.completedAt || null, createdAt: existing?.createdAt || stamp, updatedAt: stamp };
```

- [ ] **Step 4: 在 toggleTodo（188 行）后新增 toggleActivated**

在 188 行后插入：

```js
    async function toggleActivated(todo) { await putRecord('todos', { ...todo, activated: !todo.activated, updatedAt: new Date().toISOString() }); await loadAll(); }
```

- [ ] **Step 5: return 对象导出 toggleActivated**

在 351 行 return 对象中 `toggleTodo` 之后加入 `toggleActivated`：

```js
return { activeView, sidebarCollapsed, mobileMenuOpen, settingsOpen, theme, birthday, soundEnabled, todos, timers, ideas, thoughts, favorites, selectedTodoDate, showAllTodos, ideaFilter, ideaDraft, thoughtDraft, todoDialogOpen, timerDialogOpen, textDialogOpen, clearDialogOpen, favoriteDialogOpen, favoriteRecognizing, favoriteRecognitionError, clearPhrase, importInput, todoForm, timerForm, textForm, favoriteForm, agentMessages, agentDraft, agentLoading, agentError, agentTaskLabel, pomodoro, navItems, todayLabel, currentPage, visibleTodos, sortedTimers, sortedFavorites, ideaFilterOptions, filteredIdeas, ideaGroups, thoughtGroups, textDialogTitle, notificationPermission, notificationLabel, dataSummary, periodCountdowns, pomodoroRemainingMs, pomodoroRemainingLabel, selectView, selectMobileView, runPrimaryAction, shiftTodoDate, goToday, todoStatus, priorityMeta, openTodoDialog, saveTodo, toggleTodo, toggleActivated, openTimerDialog, saveTimer, timerExpired, timerRemaining, timerProgress, choosePomodoroDuration, beginPomodoro, pauseCurrentPomodoro, resumeCurrentPomodoro, resetCurrentPomodoro, addIdea, toggleIdea, addThought, openTextDialog, saveTextEdit, openFavoriteDialog, recognizeFavoriteUrl, saveFavorite, visitFavorite, sendAgentMessage, retryAgentMessage, stopAgentRequest, clearAgentConversation, downloadAgentImage, regenerateAgentImage, formatDateTime, formatTime, isDeletePending, deleteButtonText, cancelDeleteConfirmation, requestDelete, saveTheme, saveBirthday, saveSound, disableFutureDate, requestNotification, exportData, chooseImport, handleImport, openClearDialog, clearEverything };
```

- [ ] **Step 6: 提交**

```bash
git add workbench/scripts/vue-app.mjs
git commit -m "feat: todo 新增激活字段与 toggleActivated 逻辑"
```

---

### Task 2: UI — 「已激活」标签与「激活/取消激活」按钮

**Files:**
- Modify: `workbench/index.html:34`（Todo 卡片）

- [ ] **Step 1: record-meta 中 status 标签后加入「已激活」标签**

将 34 行 `record-meta` 中的状态标签后、日期 span 前插入 `el-tag`：

```html
<div class="record-meta"><el-tag :type="priorityMeta(todo).type" effect="light" round>{{ priorityMeta(todo).label }}</el-tag><el-tag :type="todoStatus(todo).type" effect="light" round>{{ todoStatus(todo).label }}</el-tag><el-tag v-if="todo.activated" class="tag-activated" effect="light" round>已激活</el-tag><span v-if="showAllTodos"><el-icon><component is="Calendar"></component></el-icon>{{ todo.date }}</span><span v-if="todo.dueAt"><el-icon><component is="Clock"></component></el-icon>截止 {{ formatDateTime(todo.dueAt) }}</span></div>
```

- [ ] **Step 2: record-actions 最前加入「激活/取消激活」按钮**

将 34 行 `record-actions` 中编辑按钮前插入：

```html
<div class="record-actions"><el-button text :type="todo.activated ? 'success' : 'primary'" @click.stop="toggleActivated(todo)">{{ todo.activated ? '取消激活' : '激活' }}</el-button><el-button text type="primary" @click.stop="openTodoDialog(todo)">编辑</el-button><el-button :type="isDeletePending('todos', todo.id) ? 'danger' : 'primary'" text @click.stop="requestDelete('todos', todo.id)">{{ deleteButtonText('todos', todo.id) }}</el-button></div>
```

- [ ] **Step 3: 提交**

```bash
git add workbench/index.html
git commit -m "feat: todo 卡片新增激活按钮与已激活标签"
```

---

### Task 3: 样式 — 「已激活」标签自定义颜色

**Files:**
- Modify: `workbench/styles/components.css:21`（record-meta 规则之后）

- [ ] **Step 1: 追加 .tag-activated 样式（含暗色主题）**

在 21 行 `.record-actions .el-button { ... }` 规则之后追加：

```css
.record-meta .tag-activated { --el-tag-bg-color: #f3f0ff; --el-tag-border-color: #d8ccff; --el-tag-text-color: #6f42c1; }
html.dark .record-meta .tag-activated { --el-tag-bg-color: rgba(139, 92, 246, .18); --el-tag-border-color: rgba(139, 92, 246, .45); --el-tag-text-color: #b8a6f5; }
```

（使用 `.record-meta .tag-activated` 提升特异性，确保覆盖 Element Plus 运行时注入的 `.el-tag` 样式。）

- [ ] **Step 2: 提交**

```bash
git add workbench/styles/components.css
git commit -m "feat: 已激活标签自定义配色（含暗色主题）"
```

---

### Task 4: 重新构建、回归测试与浏览器验证

**Files:**
- Run: `node workbench/build-bundle.mjs`
- Run: `node --test`（在 `workbench/` 目录，63 个现有测试应全绿）
- Verify: 浏览器实测

- [ ] **Step 1: 重新生成脚本包**

在仓库根目录运行：

```bash
node workbench/build-bundle.mjs
```

期望输出：`已生成 scripts/app.bundle.js（... 字节）`，无报错。

- [ ] **Step 2: 回归测试**

```bash
cd workbench && node --test
```

期望：63 个测试全部通过（pass 63 / fail 0）。

- [ ] **Step 3: 浏览器实测**

用浏览器打开 `http://127.0.0.1:4173`（或双击 `workbench/index.html`），逐项验证：

1. 激活一个 Todo：点击「激活」→ 元信息区出现紫色「已激活」标签，按钮变为绿色「取消激活」。
2. 取消激活：点击「取消激活」→ 标签消失，按钮恢复蓝色「激活」。
3. 编辑后保留：激活一个 Todo → 点「编辑」→ 不改其他内容直接保存 → 仍为已激活状态。
4. 刷新后保留：激活一个 Todo → 刷新页面 → 仍显示「已激活」标签。
5. 勾选完成不影响激活状态：激活一个 Todo 后勾选完成，再取消勾选，激活状态不变。
6. 暗色主题下标签颜色正常。

- [ ] **Step 4: 提交构建产物**

```bash
git add workbench/scripts/app.bundle.js
git commit -m "build: 重新打包 app.bundle.js（含 todo 激活按钮）"
```
