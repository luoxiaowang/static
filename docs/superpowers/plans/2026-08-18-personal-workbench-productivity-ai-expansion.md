# Personal Workbench Productivity and AI Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend the static personal workbench with persistent notification state, a Friday-ending work week, richer hourglasses, priority-aware Todo views, a persistent Pomodoro timer, grouped composers, AI-powered favorites, and a read-only workspace Agent.

**Architecture:** Keep the existing static Vue 3 and Element Plus application and its generated classic bundle. Put deterministic behavior in small ESM core modules with Node tests, keep IndexedDB access in `storage/db.mjs`, and let `vue-app.mjs` orchestrate UI state and AgnesAI calls. The user explicitly requires browser-side AgnesAI access; the key is therefore used only inside the AI client source and is excluded from docs, backups, UI, and logs.

**Tech Stack:** Vue 3.5 global build, Element Plus 2.14, IndexedDB, native Fetch/Notification/Web Audio APIs, SVG/CSS, Node.js built-in test runner.

---

## Project Rules and Page Classification

- Page type: one general-purpose dashboard page containing list, form, timer, favorites, and chat views.
- `templates/scene-list.md`: not present in this repository; do not invent or import it.
- `templates/scene-form.md`: not present in this repository; do not invent or import it.
- `templates/common-page.md`: not present in this repository; follow the existing `workbench/index.html` shell instead.
- `.cursor/rules/001-ai-friendly-standard.mdc`: not present in this repository.
- `AGENTS.md`: not present in this repository.
- Component library: retain the pinned Element Plus CDN build; `@tuhu/shop-mars-pc` is not used.
- Git: do not commit. Replace every commit checkpoint with `git diff --check` and a focused test run because the user explicitly prohibited automatic commits.

## File Structure

- Create `workbench/scripts/core/todo-sort.mjs`: normalize priorities and sort/filter Todo records.
- Create `workbench/scripts/core/pomodoro.mjs`: pure Pomodoro state transitions and remaining-time calculation.
- Create `workbench/scripts/ai/agnes-client.mjs`: AgnesAI request, error normalization, favorite result parsing, and the user-provided browser-side credential.
- Create `workbench/scripts/ai/workspace-context.mjs`: build and truncate read-only Agent context.
- Create `workbench/tests/todo-sort.test.mjs`: Todo priority/date behavior.
- Create `workbench/tests/pomodoro.test.mjs`: timer transition and refresh recovery behavior.
- Create `workbench/tests/ai.test.mjs`: response parsing, error safety, and workspace context coverage.
- Modify `workbench/scripts/core/date.mjs`: work-week range and weekend status.
- Modify `workbench/scripts/core/backup.mjs`: favorites store and backward-compatible backup normalization.
- Modify `workbench/scripts/storage/db.mjs`: IndexedDB version upgrade and favorites store.
- Modify `workbench/scripts/vue-app.mjs`: state, computed values, handlers, notifications, Pomodoro, favorites, and Agent orchestration.
- Modify `workbench/index.html`: new menus, controls, forms, cards, and chat view.
- Modify `workbench/styles/base.css`: consistent administrative blue tokens.
- Modify `workbench/styles/components.css`: Todo, Pomodoro, floating composers, favorites, and chat layouts.
- Modify `workbench/styles/hourglass.css`: larger, clearer, more realistic hourglasses.
- Modify `workbench/build-bundle.mjs`: include new core and AI modules in dependency order.
- Modify `workbench/tests/backup.test.mjs`, `date.test.mjs`, `direct-open.test.mjs`, and `redesign.test.mjs`: regression coverage.
- Modify `workbench/README.md`: feature, AI exposure, browser compatibility, and backup notes.

### Task 1: Work-week and Todo sorting core

**Files:**
- Create: `workbench/scripts/core/todo-sort.mjs`
- Create: `workbench/tests/todo-sort.test.mjs`
- Modify: `workbench/scripts/core/date.mjs`
- Modify: `workbench/tests/date.test.mjs`

- [ ] **Step 1: Replace the seven-day week expectation with Friday 24:00 tests**

Add assertions equivalent to:

```js
test('本周从周一零点开始并在周五二十四点结束', () => {
  const { start, end, ended } = getPeriodRange('week', new Date('2026-08-19T12:30:00'));
  assert.equal(start.toString().includes('00:00:00'), true);
  assert.equal(end.getDay(), 6);
  assert.equal(end.getHours(), 0);
  assert.equal(ended, false);
});

test('周末工作周进度结束', () => {
  const range = getPeriodRange('week', new Date('2026-08-23T10:00:00'));
  assert.equal(range.ended, true);
  assert.equal(range.end.getDay(), 6);
});
```

- [ ] **Step 2: Add Todo sorting tests**

Cover completed-last, `high > medium > low`, nearest due date first, no due date after due dates, and old records defaulting to medium:

```js
assert.deepEqual(
  sortTodos([
    { id: 'low', priority: 'low', completed: false, dueAt: '2026-08-18T11:00:00Z', createdAt: '2026-08-18T08:00:00Z' },
    { id: 'high-late', priority: 'high', completed: false, dueAt: '2026-08-20T11:00:00Z', createdAt: '2026-08-18T08:00:00Z' },
    { id: 'high-near', priority: 'high', completed: false, dueAt: '2026-08-19T11:00:00Z', createdAt: '2026-08-18T08:00:00Z' },
    { id: 'done', priority: 'high', completed: true, dueAt: '2026-08-18T10:00:00Z', createdAt: '2026-08-18T08:00:00Z' },
  ]).map((item) => item.id),
  ['high-near', 'high-late', 'low', 'done'],
);
```

- [ ] **Step 3: Run focused tests and verify RED**

Run: `node --test workbench/tests/date.test.mjs workbench/tests/todo-sort.test.mjs`

Expected: FAIL because the week still ends next Monday and `todo-sort.mjs` does not exist.

- [ ] **Step 4: Implement deterministic work-week and Todo functions**

Expose these contracts:

```js
export function normalizePriority(value) {
  return ['high', 'medium', 'low'].includes(value) ? value : 'medium';
}

export function sortTodos(records) {
  const weight = { high: 0, medium: 1, low: 2 };
  return [...records].sort((a, b) => {
    if (Boolean(a.completed) !== Boolean(b.completed)) return a.completed ? 1 : -1;
    const priorityDelta = weight[normalizePriority(a.priority)] - weight[normalizePriority(b.priority)];
    if (priorityDelta) return priorityDelta;
    if (a.dueAt && b.dueAt) return a.dueAt.localeCompare(b.dueAt);
    if (a.dueAt || b.dueAt) return a.dueAt ? -1 : 1;
    return (a.createdAt || '').localeCompare(b.createdAt || '');
  });
}

export function selectTodos(records, { showAll, date }) {
  return sortTodos(showAll ? records : records.filter((item) => item.date === date));
}
```

For `getPeriodRange('week')`, compute the current Monday and Saturday 00:00. On Saturday/Sunday return the same completed interval with `ended: true`; otherwise `ended: false`.

- [ ] **Step 5: Run focused tests and diff check**

Run: `node --test workbench/tests/date.test.mjs workbench/tests/todo-sort.test.mjs && git diff --check`

Expected: all focused tests PASS and no whitespace errors.

### Task 2: Persistent Pomodoro state machine

**Files:**
- Create: `workbench/scripts/core/pomodoro.mjs`
- Create: `workbench/tests/pomodoro.test.mjs`

- [ ] **Step 1: Write state transition tests**

Use fixed timestamps and verify 30-minute/60-minute presets, start, pause, resume, reset, and refresh recovery:

```js
const selected = selectPomodoroDuration(createPomodoroState(), 30, 1000);
const running = startPomodoro(selected, 1000);
assert.equal(running.targetAt, 1000 + 30 * 60 * 1000);
assert.equal(getPomodoroRemaining(running, 61_000), 29 * 60 * 1000);
const paused = pausePomodoro(running, 61_000);
assert.equal(paused.remainingMs, 29 * 60 * 1000);
const resumed = resumePomodoro(paused, 121_000);
assert.equal(resumed.targetAt, 121_000 + 29 * 60 * 1000);
```

- [ ] **Step 2: Run tests and verify RED**

Run: `node --test workbench/tests/pomodoro.test.mjs`

Expected: FAIL because `pomodoro.mjs` does not exist.

- [ ] **Step 3: Implement immutable Pomodoro transitions**

Export `createPomodoroState`, `selectPomodoroDuration`, `startPomodoro`, `pausePomodoro`, `resumePomodoro`, `resetPomodoro`, `getPomodoroRemaining`, and `isPomodoroFinished`. Persist only JSON-safe primitives: `durationMinutes`, `status`, `targetAt`, `remainingMs`, and `notifiedAt`.

- [ ] **Step 4: Run tests and diff check**

Run: `node --test workbench/tests/pomodoro.test.mjs && git diff --check`

Expected: all Pomodoro tests PASS.

### Task 3: Favorites storage and backup compatibility

**Files:**
- Modify: `workbench/scripts/core/backup.mjs`
- Modify: `workbench/scripts/storage/db.mjs`
- Modify: `workbench/tests/backup.test.mjs`

- [ ] **Step 1: Write backup compatibility tests**

Extend `emptyData` with `favorites: []`. Verify a version-2 backup includes favorites, and a version-1 backup without favorites validates to data containing `favorites: []`:

```js
const legacy = validateBackup({
  appId: BACKUP_APP_ID,
  version: 1,
  data: { todos: [], timers: [], ideas: [], thoughts: [], settings: [] },
});
assert.deepEqual(legacy.favorites, []);
```

- [ ] **Step 2: Run tests and verify RED**

Run: `node --test workbench/tests/backup.test.mjs`

Expected: FAIL because favorites and legacy normalization are absent.

- [ ] **Step 3: Upgrade the backup and database schemas**

Set `BACKUP_VERSION = 2`, add `favorites` to `DATA_STORES`, accept backup versions 1 and 2, and normalize missing favorites before per-store validation. Set `DB_VERSION = 2`; the existing `upgradeneeded` loop will create the new object store without clearing existing stores.

- [ ] **Step 4: Run tests and diff check**

Run: `node --test workbench/tests/backup.test.mjs && git diff --check`

Expected: backup tests PASS, including legacy imports.

### Task 4: AgnesAI client and workspace context

**Files:**
- Create: `workbench/scripts/ai/agnes-client.mjs`
- Create: `workbench/scripts/ai/workspace-context.mjs`
- Create: `workbench/tests/ai.test.mjs`

- [ ] **Step 1: Write AI parser and error tests**

Test dependency-injected Fetch without making network calls:

```js
const fetchMock = async () => ({
  ok: true,
  json: async () => ({ choices: [{ message: { content: '{"title":"示例","summary":"摘要","outline":"## 大纲"}' } }] }),
});
const result = await recognizeFavorite('https://example.com', { fetchImpl: fetchMock });
assert.deepEqual(result, { title: '示例', summary: '摘要', outline: '## 大纲' });
```

Also verify malformed content throws `无法解析 AI 返回的收藏内容`, 401 maps to `API Key 无效或无权限`, 429 maps to `AI 请求过于频繁`, network/CORS maps to `无法连接 AgnesAI`, and no thrown message contains an Authorization header or credential fragment.

- [ ] **Step 2: Write workspace context tests**

Build data containing every store and Pomodoro state. Assert the output names each section, orders actionable/latest records first, respects `maxChars`, and appends `[上下文已截断]` when required.

- [ ] **Step 3: Run tests and verify RED**

Run: `node --test workbench/tests/ai.test.mjs`

Expected: FAIL because the AI modules do not exist.

- [ ] **Step 4: Implement the browser-side AgnesAI client**

Use `POST https://apihub.agnes-ai.com/v1/chat/completions`, model `agnes-2.5-flash`, JSON content, non-streaming responses, and an `Authorization: Bearer` header. Store the credential only in this source module as explicitly requested by the user; do not export it, log it, interpolate it into errors, or include it in test fixtures.

Expose:

```js
export async function recognizeFavorite(url, { fetchImpl = fetch } = {}) {
  const content = await requestAgnes([{
    role: 'user',
    content: `读取网页 ${url}，只返回 JSON：{"title":"标题","summary":"简洁摘要","outline":"Markdown 分层大纲"}。无法访问时明确返回错误，不得猜测。`,
  }], { fetchImpl });
  return parseFavoriteRecognition(content);
}
export async function askWorkspaceAgent(messages, workspaceContext, { fetchImpl = fetch, signal } = {}) {
  return requestAgnes([
    { role: 'system', content: `你是个人工作台只读助手。以下是当前数据：\n${workspaceContext}` },
    ...messages,
  ], { fetchImpl, signal });
}
```

Strip optional Markdown fences before `JSON.parse`. Require nonempty string fields for successful auto-fill; otherwise throw and leave the form manually editable.

- [ ] **Step 5: Implement deterministic context building**

Expose `buildWorkspaceContext(data, { maxChars = 24000 } = {})`. Serialize compact sections for Todo, timers, Pomodoro, ideas, thoughts, and favorites. Do not include settings, the API credential, notification metadata, or backup metadata.

- [ ] **Step 6: Run tests and diff check**

Run: `node --test workbench/tests/ai.test.mjs && git diff --check`

Expected: all AI tests PASS without network access or credential output.

### Task 5: Vue state and business integration

**Files:**
- Modify: `workbench/scripts/vue-app.mjs`
- Modify: `workbench/tests/redesign.test.mjs`

- [ ] **Step 1: Add source-level integration tests**

Assert the Vue source imports the new modules, loads `favorites`, persists notification authorization and Pomodoro state, uses `selectTodos`, groups filtered ideas, and keeps Agent messages in refs rather than IndexedDB.

- [ ] **Step 2: Run the integration test and verify RED**

Run: `node --test workbench/tests/redesign.test.mjs`

Expected: FAIL on missing imports and state handlers.

- [ ] **Step 3: Add state and computed values**

Add `favorites`, `showAllTodos`, `pomodoro`, favorite form/dialog/loading state, Agent messages/draft/loading state, and an `AbortController` reference. Replace `visibleTodos` with `selectTodos(todos.value, { showAll: showAllTodos.value, date: selectedTodoDate.value })`. Build `ideaGroups` from filtered ideas using `groupByLocalDate`.

- [ ] **Step 4: Add persistence and notification restoration**

Load all five business stores. In `loadSettings`, read `notificationGranted` and `pomodoroState`, then reconcile notification UI with `Notification.permission`. After successful permission, save `notificationGranted = true`; if actual permission is denied, save false. Persist every Pomodoro transition through `setSetting`.

- [ ] **Step 5: Add Todo, Pomodoro, favorites, and Agent handlers**

Todo saves normalized priority. Pomodoro handlers call the pure state functions and trigger the existing notification/sound path exactly once on completion. Favorite recognition validates `new URL(value)` and fills fields only after a successful parsed response. Agent sends current in-memory messages plus `buildWorkspaceContext`, supports retry, abort, and clear, and never calls `putRecord` from Agent handlers.

- [ ] **Step 6: Run focused tests and diff check**

Run: `node --test workbench/tests/redesign.test.mjs workbench/tests/date.test.mjs workbench/tests/todo-sort.test.mjs workbench/tests/pomodoro.test.mjs workbench/tests/ai.test.mjs && git diff --check`

Expected: all focused tests PASS.

### Task 6: Page templates and user flows

**Files:**
- Modify: `workbench/index.html`
- Modify: `workbench/tests/redesign.test.mjs`

- [ ] **Step 1: Add template regression assertions**

Assert menus named `收藏夹` and `Agent 助手`, Todo priority controls, all/current toggle, 30-minute and 1-hour Pomodoro buttons, grouped ideas, favorite recognition/manual fields, and Agent clear/retry controls.

- [ ] **Step 2: Run test and verify RED**

Run: `node --test workbench/tests/redesign.test.mjs`

Expected: FAIL because the new controls are missing.

- [ ] **Step 3: Implement navigation and Todo/Pomodoro templates**

Add the two menu items and page metadata. Add the Todo mode toggle and priority tag/select. Put the Pomodoro card before period hourglasses with preset buttons and state-dependent controls.

- [ ] **Step 4: Implement grouped ideas and floating composers**

Render `ideaGroups` with a date heading and cards per group. Keep both composers as the last child of their view but use a dedicated fixed-within-main wrapper and a spacer so content is not obscured.

- [ ] **Step 5: Implement favorites and Agent templates**

Favorites use a form/dialog with URL, title, summary, outline, recognition action, recognition failure help, save, edit, visit, and delete. Agent uses an empty-state prompt list, scrollable message stream, current-session notice, textarea, send/stop, retry, and clear controls.

- [ ] **Step 6: Run template tests and HTML guard**

Run: `node --test workbench/tests/redesign.test.mjs && ! rg -n '<[^>]+/>' workbench/index.html && git diff --check`

Expected: test PASS, no browser-template self-closing component tags, no whitespace errors.

### Task 7: Administrative blue styling and realistic hourglass

**Files:**
- Modify: `workbench/styles/base.css`
- Modify: `workbench/styles/components.css`
- Modify: `workbench/styles/hourglass.css`
- Modify: `workbench/scripts/vue-app.mjs`
- Modify: `workbench/tests/redesign.test.mjs`

- [ ] **Step 1: Add structural style assertions**

Assert the hourglass SVG contains separate glass edge, rear highlight, frame grain, sand shadow, stream and particle layers. Assert CSS contains floating composer, Pomodoro, favorite grid, Agent shell, priority tag, and responsive rules.

- [ ] **Step 2: Run test and verify RED**

Run: `node --test workbench/tests/redesign.test.mjs`

Expected: FAIL on missing layers and classes.

- [ ] **Step 3: Upgrade the SVG and hourglass card**

Increase the SVG display size and viewBox detail. Add gradient definitions for glass edge, wood grain, metal highlight, sand surface/shadow, and soft shadow. Add distinct paths for front/rear glass edges, frame caps, posts, top sand body, bottom pile, stream, particles, and specular highlights. Keep ratio-driven geometry and reduced-motion support.

- [ ] **Step 4: Apply blue component styling**

Use the existing primary blue for normal buttons, active navigation, focus rings, selected presets, composer send actions, favorite recognition, and Agent send. Retain Element Plus danger/success/warning colors for semantic states.

- [ ] **Step 5: Add responsive layouts**

Ensure the Todo toolbar wraps, Pomodoro controls remain tappable, favorite cards collapse to one column, Agent fills the available height, and floating composers respect `env(safe-area-inset-bottom)` without horizontal overflow at 390px.

- [ ] **Step 6: Run style regression and diff check**

Run: `node --test workbench/tests/redesign.test.mjs && git diff --check`

Expected: style/source tests PASS.

### Task 8: Bundle, direct-open compatibility, and documentation

**Files:**
- Modify: `workbench/build-bundle.mjs`
- Modify: `workbench/tests/direct-open.test.mjs`
- Modify: `workbench/README.md`
- Regenerate: `workbench/scripts/app.bundle.js`

- [ ] **Step 1: Extend bundle tests and source ordering**

Add assertions that the generated classic script contains the Todo, Pomodoro, AI, and context functions while containing no top-level `import` or `export` syntax.

- [ ] **Step 2: Run direct-open tests and verify RED**

Run: `node --test workbench/tests/direct-open.test.mjs`

Expected: FAIL because the new modules are not bundled.

- [ ] **Step 3: Add source files to the bundler in dependency order**

Place core modules before storage and AI helpers before `vue-app.mjs`. Keep the existing module-syntax stripping strategy and generated banner.

- [ ] **Step 4: Update README and regenerate**

Document priority sorting, Friday work-week, Pomodoro persistence, favorites/Agent behavior, static credential exposure, AgnesAI/CORS failure behavior, backup version compatibility, direct-open instructions, and build/test commands. Run `node workbench/build-bundle.mjs`.

- [ ] **Step 5: Run direct-open and syntax checks**

Run: `node --test workbench/tests/direct-open.test.mjs && node --check workbench/scripts/app.bundle.js && git diff --check`

Expected: direct-open tests PASS, bundle parses, no whitespace errors.

### Task 9: Full verification and browser acceptance

**Files:**
- Verify all files under `workbench/`

- [ ] **Step 1: Run the complete automated gate**

Run:

```bash
set -euo pipefail
node workbench/build-bundle.mjs
node --test workbench/tests/*.test.mjs
find workbench/scripts -name '*.mjs' -print0 | xargs -0 -n1 node --check
node --check workbench/scripts/app.bundle.js
if rg -n '<[^>]+/>' workbench/index.html; then exit 1; fi
git diff --check
```

Expected: zero test failures, all syntax checks exit 0, no self-closing component tags, no diff errors.

- [ ] **Step 2: Serve the static page without exposing secrets in command output**

Run from `workbench/`: `python3 -m http.server 4173 --bind 127.0.0.1`

Expected: `GET /` and all local CSS/JS assets return 200/304.

- [ ] **Step 3: Desktop browser acceptance**

At a desktop viewport verify: notification state reload, Todo priority/date ordering, all/current toggle, Friday-ending work-week copy, 30/60 Pomodoro controls, clear hourglasses, grouped ideas, floating composers, favorite manual fallback, and in-memory Agent clear behavior. Do not make live AI requests during generic browser acceptance unless specifically testing the user-requested endpoint, to avoid leaking the credential in diagnostics.

- [ ] **Step 4: Mobile and theme acceptance**

At 390×844 verify navigation drawer, no horizontal overflow, readable hourglasses, tappable Pomodoro controls, unobscured lists above composers, favorite form, and Agent composer. Repeat core surfaces in dark mode.

- [ ] **Step 5: Inspect runtime logs and secret hygiene**

Verify the browser error log is empty for local-only flows. Search docs, README, tests, backup payload code, error strings, and console statements for credential fragments; the only allowed occurrence is the non-exported AI client credential constant required by the user.

- [ ] **Step 6: Stop the temporary server and report evidence**

Report test counts, build result, browser viewports checked, AI network limitations observed, modified file groups, and that no Git commit was created.
