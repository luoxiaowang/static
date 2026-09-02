import { formatCountdown, formatDateTime, formatLocalDate, formatLocalDateTimeFilename, getPeriodRange, getTodoStatus, groupByLocalDate, toLocalDateTimeInput } from './core/date.mjs';
import { createBackup, validateBackup } from './core/backup.mjs';
import { createDeleteConfirmation } from './core/delete-confirm.mjs';
import { selectTodos, sortTodos } from './core/todo-sort.mjs';
import { createPomodoroState, getPomodoroRemaining, isPomodoroFinished, pausePomodoro, resetPomodoro, resumePomodoro, selectPomodoroDuration, startPomodoro } from './core/pomodoro.mjs';
import { askWorkspaceAgent, classifyAgentIntent, generateAgentImage, recognizeFavorite, searchWebWithAgent } from './ai/agnes-client.mjs';
import { detectAgentIntent } from './ai/intent-router.mjs';
import { buildWorkspaceContext } from './ai/workspace-context.mjs';
import { clearAllData, deleteRecord, getAllData, getSetting, listRecords, mergeAllData, openDatabase, putRecord, replaceAllData, setSetting } from './storage/db.mjs';

const { createApp, ref, reactive, computed, onMounted, onBeforeUnmount, watch } = Vue;
const message = ElementPlus.ElMessage;

const HourglassVisual = {
  name: 'HourglassVisual',
  props: { ratio: { type: Number, default: 0 }, accent: { type: String, default: '#1677ff' } },
  setup(props) {
    const uid = `hg-${Math.random().toString(36).slice(2, 9)}`;
    const safeRatio = computed(() => Math.min(1, Math.max(0, props.ratio)));
    const topY = computed(() => 17 + safeRatio.value * 34);
    const topHeight = computed(() => Math.max(0, 51 - topY.value));
    const pileY = computed(() => 101 - safeRatio.value * 31);
    const pilePath = computed(() => `M 18 101 Q 40 ${Math.max(67, pileY.value - 4)} 62 101 Z`);
    return { uid, safeRatio, topY, topHeight, pilePath };
  },
  template: `
    <svg class="hourglass-visual" viewBox="0 0 80 120" role="img" aria-label="动态沙漏" :style="{ '--sand-color': accent }">
      <defs>
        <linearGradient :id="uid + '-wood'" x1="0" x2="1"><stop offset="0" stop-color="#654630"/><stop offset=".22" stop-color="#a8784d"/><stop offset=".5" stop-color="#d6ad76"/><stop offset=".78" stop-color="#96663f"/><stop offset="1" stop-color="#593c2b"/></linearGradient>
        <linearGradient :id="uid + '-metal'" x1="0" x2="1"><stop offset="0" stop-color="#8190a4"/><stop offset=".5" stop-color="#d5dbe3"/><stop offset="1" stop-color="#69788b"/></linearGradient>
        <linearGradient :id="uid + '-glass'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="rgba(255,255,255,.88)"/><stop offset=".28" stop-color="rgba(225,241,250,.24)"/><stop offset=".62" stop-color="rgba(165,195,214,.09)"/><stop offset="1" stop-color="rgba(117,153,177,.3)"/></linearGradient>
        <linearGradient :id="uid + '-glass-edge'" x1="0" x2="1"><stop offset="0" stop-color="#8198aa"/><stop offset=".25" stop-color="#eaf8ff"/><stop offset=".72" stop-color="#a7c2d2"/><stop offset="1" stop-color="#708a9b"/></linearGradient>
        <linearGradient :id="uid + '-sand'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="color-mix(in srgb, var(--sand-color) 72%, white)"/><stop offset=".52" stop-color="var(--sand-color)"/><stop offset="1" stop-color="color-mix(in srgb, var(--sand-color) 72%, #7a4d00)"/></linearGradient>
        <clipPath :id="uid + '-top-clip'"><path d="M17 14 H63 C63 29 56 42 42 55 H38 C24 42 17 29 17 14Z"/></clipPath>
        <clipPath :id="uid + '-bottom-clip'"><path d="M38 55 H42 C56 68 63 81 63 104 H17 C17 81 24 68 38 55Z"/></clipPath>
        <filter :id="uid + '-shadow'" x="-30%" y="-20%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#334155" flood-opacity=".2"/></filter>
      </defs>
      <g :filter="'url(#' + uid + '-shadow)'">
        <rect class="hourglass-post" x="11" y="14" width="5" height="92" rx="2.5" :fill="'url(#' + uid + '-metal)'"/><rect class="hourglass-post" x="64" y="14" width="5" height="92" rx="2.5" :fill="'url(#' + uid + '-metal)'"/>
        <path class="glass-rear-highlight" d="M20 15 H60 C59 30 53 41 42 52 M38 58 C27 69 21 82 20 102"/>
        <path class="glass-shell" d="M17 14 H63 C63 31 56 43 42 55 C56 67 63 81 63 104 H17 C17 81 24 67 38 55 C24 43 17 31 17 14Z" :fill="'url(#' + uid + '-glass)'"/>
        <path class="glass-edge" d="M17 14 H63 C63 31 56 43 42 55 C56 67 63 81 63 104 H17 C17 81 24 67 38 55 C24 43 17 31 17 14Z" :stroke="'url(#' + uid + '-glass-edge)'"/>
        <rect class="sand-top" x="17" :y="topY" width="46" :height="topHeight" :clip-path="'url(#' + uid + '-top-clip)'" :fill="'url(#' + uid + '-sand)'"/>
        <ellipse class="sand-surface" cx="40" :cy="topY" rx="20" ry="2.2" :clip-path="'url(#' + uid + '-top-clip)'" :fill="'url(#' + uid + '-sand)'"/>
        <ellipse class="sand-shadow" cx="40" cy="101" rx="21" ry="2.7" :clip-path="'url(#' + uid + '-bottom-clip)'"/>
        <path class="sand-pile" :d="pilePath" :clip-path="'url(#' + uid + '-bottom-clip)'" :fill="'url(#' + uid + '-sand)'"/>
        <rect v-if="safeRatio > 0 && safeRatio < 1" class="sand-stream" x="39" y="52" width="2" height="28" rx="1"/>
        <circle v-if="safeRatio > 0 && safeRatio < 1" class="sand-particle" cx="36.5" cy="58" r="1"/><circle v-if="safeRatio > 0 && safeRatio < 1" class="sand-particle is-second" cx="43" cy="62" r=".8"/>
        <path class="glass-shine" d="M23 20 C22 31 26 40 34 48 M24 73 C21 82 21 91 22 98"/><path class="glass-shine is-thin" d="M56 21 C57 31 53 40 47 47 M55 77 C58 85 58 92 57 97"/>
        <rect class="hourglass-frame" x="7" y="7" width="66" height="11" rx="5.5" :fill="'url(#' + uid + '-wood)'"/><rect class="hourglass-frame" x="7" y="102" width="66" height="11" rx="5.5" :fill="'url(#' + uid + '-wood)'"/>
        <path class="frame-grain" d="M13 11 C25 8 32 15 45 11 S63 10 68 12 M12 107 C24 104 34 111 46 107 S62 106 68 109"/>
      </g>
    </svg>`,
};

const app = createApp({
  setup() {
    const activeView = ref('todo');
    const sidebarCollapsed = ref(false);
    const mobileMenuOpen = ref(false);
    const settingsOpen = ref(false);
    const theme = ref('system');
    const birthday = ref('');
    const soundEnabled = ref(true);
    const now = ref(Date.now());
    const todos = ref([]);
    const timers = ref([]);
    const ideas = ref([]);
    const thoughts = ref([]);
    const favorites = ref([]);
    const selectedTodoDate = ref(formatLocalDate());
    const showAllTodos = ref(false);
    const ideaFilter = ref('all');
    const ideaDraft = ref('');
    const thoughtDraft = ref('');
    const todoDialogOpen = ref(false);
    const timerDialogOpen = ref(false);
    const textDialogOpen = ref(false);
    const clearDialogOpen = ref(false);
    const favoriteDialogOpen = ref(false);
    const favoriteRecognizing = ref(false);
    const favoriteRecognitionError = ref('');
    const agentMessages = ref([]);
    const agentDraft = ref('');
    const agentLoading = ref(false);
    const agentError = ref('');
    const agentTaskType = ref('chat');
    const pomodoro = ref(createPomodoroState());
    const clearPhrase = ref('');
    const importInput = ref(null);
    const importMode = ref('merge');
    const pendingDeleteKey = ref('');
    const deleteConfirmation = createDeleteConfirmation(5000);
    let deleteResetTimer;
    let clockTimer;
    let agentAbortController;

    const todoForm = reactive({ id: '', title: '', note: '', date: formatLocalDate(), dueAt: '', activated: false });
    const timerForm = reactive({ id: '', name: '', targetAt: '' });
    const textForm = reactive({ store: '', id: '', content: '' });
    const favoriteForm = reactive({ id: '', url: '', title: '', summary: '', outline: '' });
    const navItems = [
      { key: 'todo', label: 'Todo', icon: 'List' },
      { key: 'countdown', label: '倒计时', icon: 'Timer' },
      { key: 'ideas', label: '创意灵感', icon: 'MagicStick' },
      { key: 'thoughts', label: '碎碎念', icon: 'ChatDotRound' },
      { key: 'favorites', label: '收藏夹', icon: 'Star' },
      { key: 'agent', label: 'Agent 助手', icon: 'ChatLineRound' },
    ];
    const pageMeta = {
      todo: { kicker: 'DAILY WORK', title: 'Todo', description: '聚焦今天，把重要的事情逐一完成', action: '新建 Todo' },
      countdown: { kicker: 'TIME MATTERS', title: '倒计时', description: '让重要的时间节点清晰可见', action: '' },
      ideas: { kicker: 'IDEA NOTES', title: '创意灵感', description: '接住每一次灵光一闪', action: '' },
      thoughts: { kicker: 'DAILY THOUGHTS', title: '碎碎念', description: '记录心得、情绪和日常片段', action: '' },
      favorites: { kicker: 'SMART FAVORITES', title: '收藏夹', description: '收藏链接，让 AI 帮你提炼重点', action: '新增收藏' },
      agent: { kicker: 'WORKSPACE COPILOT', title: 'Agent 助手', description: '基于整个工作台数据进行只读咨询', action: '' },
    };

    const todayLabel = computed(() => new Intl.DateTimeFormat('zh-CN', { month: 'long', day: 'numeric', weekday: 'short' }).format(new Date(now.value)));
    const currentPage = computed(() => pageMeta[activeView.value]);
    const visibleTodos = computed(() => selectTodos(todos.value, { showAll: showAllTodos.value, date: selectedTodoDate.value }));
    const dragTodoId = ref('');
    const dragTargetId = ref('');
    const dragOverTodoId = ref('');
    const dragInsertBefore = ref(false);
    const sortedTimers = computed(() => [...timers.value].sort((a, b) => a.targetAt.localeCompare(b.targetAt)));
    const ideaFilterOptions = [{ label: '全部', value: 'all' }, { label: '未实现', value: 'pending' }, { label: '已实现', value: 'implemented' }];
    const filteredIdeas = computed(() => [...ideas.value].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).filter((item) => ideaFilter.value === 'all' || (ideaFilter.value === 'implemented' ? item.implemented : !item.implemented)));
    const ideaGroups = computed(() => groupByLocalDate(filteredIdeas.value).map(addGroupLabel));
    const thoughtGroups = computed(() => groupByLocalDate(thoughts.value).map((group) => ({ ...group, dateLabel: `${group.date} · ${new Intl.DateTimeFormat('zh-CN', { weekday: 'long' }).format(new Date(`${group.date}T00:00:00`))}` })));
    const sortedFavorites = computed(() => [...favorites.value].sort((a, b) => Boolean(a.read) - Boolean(b.read) || b.createdAt.localeCompare(a.createdAt)));
    const textDialogTitle = computed(() => textForm.store === 'ideas' ? '编辑创意灵感' : '编辑碎碎念');
    const agentTaskLabel = computed(() => ({ chat: '正在分析工作台数据', classify: '正在识别你的需求', web: '正在联网查询', image: '正在生成图片' })[agentTaskType.value]);
    const notificationPermission = ref('Notification' in window ? Notification.permission : 'unsupported');
    const notificationLabel = computed(() => ({ granted: '已允许浏览器通知', denied: '已拒绝，将使用页面提醒', default: '尚未申请通知权限', unsupported: '当前浏览器不支持' }[notificationPermission.value]));
    const dataSummary = computed(() => [{ label: 'Todo', value: todos.value.length }, { label: '倒计时', value: timers.value.length }, { label: '灵感', value: ideas.value.length }, { label: '碎碎念', value: thoughts.value.length }, { label: '收藏', value: favorites.value.length }]);
    const pomodoroRemainingMs = computed(() => getPomodoroRemaining(pomodoro.value, now.value));
    const pomodoroRemainingLabel = computed(() => formatCountdown(pomodoroRemainingMs.value).replace(/^0天\s*/, ''));

    const periodCountdowns = computed(() => [
      ['day', '本日倒计时', '#1677ff'], ['week', '本周倒计时', '#52c41a'], ['month', '本月倒计时', '#faad14'], ['year', '本年倒计时', '#722ed1'], ['life', '人生倒计时', '#cf1322'],
    ].map(([type, label, accent]) => {
      const range = getPeriodRange(type, new Date(now.value), birthday.value);
      if (!range) return { type, label, accent, ratio: 0, ready: false, remaining: '等待设置', percent: '0%' };
      const total = Math.max(1, range.end - range.start);
      const ratio = Math.min(1, Math.max(0, (now.value - range.start) / total));
      return { type, label, accent, ratio, ready: true, remaining: range.ended ? '本周工作时间已结束' : formatCountdown(range.end - now.value), percent: `${(ratio * 100).toFixed(type === 'life' ? 4 : 1)}%` };
    }));

    function addGroupLabel(group) { return { ...group, dateLabel: `${group.date} · ${new Intl.DateTimeFormat('zh-CN', { weekday: 'long' }).format(new Date(`${group.date}T00:00:00`))}` }; }

    function applyTheme(value) {
      const dark = value === 'dark' || (value === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.classList.toggle('dark', dark);
    }
    async function saveTheme() { applyTheme(theme.value); await setSetting('theme', theme.value); message.success('主题设置已保存'); }
    async function saveBirthday() { await setSetting('birthday', birthday.value); message.success('出生日期已保存'); }
    async function saveSound() { await setSetting('soundEnabled', soundEnabled.value); message.success(soundEnabled.value ? '提示音已开启' : '提示音已关闭'); }
    function disableFutureDate(date) { return date > new Date(); }
    async function loadAll() {
      [todos.value, timers.value, ideas.value, thoughts.value, favorites.value] = await Promise.all(['todos', 'timers', 'ideas', 'thoughts', 'favorites'].map(listRecords));
    }
    async function loadSettings() {
      theme.value = await getSetting('theme', 'system');
      birthday.value = await getSetting('birthday', '');
      soundEnabled.value = await getSetting('soundEnabled', true);
      const savedNotificationGranted = await getSetting('notificationGranted', false);
      pomodoro.value = await getSetting('pomodoroState', createPomodoroState());
      if ('Notification' in window) {
        notificationPermission.value = Notification.permission;
        if (Notification.permission === 'granted' && !savedNotificationGranted) await setSetting('notificationGranted', true);
        if (Notification.permission !== 'granted' && savedNotificationGranted) await setSetting('notificationGranted', false);
      }
      applyTheme(theme.value);
    }
    function selectView(key) { activeView.value = key; cancelDeleteConfirmation(); }
    function selectMobileView(key) { selectView(key); mobileMenuOpen.value = false; }
    function runPrimaryAction() { if (activeView.value === 'todo') openTodoDialog(); if (activeView.value === 'favorites') openFavoriteDialog(); }
    function shiftTodoDate(amount) { const [y, m, d] = selectedTodoDate.value.split('-').map(Number); selectedTodoDate.value = formatLocalDate(new Date(y, m - 1, d + amount)); }
    function goToday() { selectedTodoDate.value = formatLocalDate(); }
    function todoStatus(todo) { const status = getTodoStatus(todo, new Date(now.value)); return { completed: { label: '已完成', type: 'success' }, overdue: { label: '已过期', type: 'danger' }, 'due-soon': { label: '即将到期', type: 'warning' }, active: { label: '进行中', type: 'info' } }[status]; }
    function todoNoteSegments(note) {
      const segments = [];
      const pattern = /https?:\/\/[^\s<>"')\]]+/g;
      let cursor = 0;
      for (const match of note.matchAll(pattern)) {
        if (match.index > cursor) segments.push({ type: 'text', content: note.slice(cursor, match.index) });
        segments.push({ type: 'link', url: match[0] });
        cursor = match.index + match[0].length;
      }
      if (cursor < note.length) segments.push({ type: 'text', content: note.slice(cursor) });
      return segments;
    }
    function openTodoLink(url) { window.open(url, '_blank', 'noopener,noreferrer'); }
    function openTodoDialog(todo) {
      Object.assign(todoForm, todo ? { ...todo, dueAt: todo.dueAt || '' } : { id: '', title: '', note: '', date: selectedTodoDate.value, dueAt: '', activated: false });
      todoDialogOpen.value = true;
    }
    async function saveTodo() {
      const existing = todos.value.find((item) => item.id === todoForm.id); const stamp = new Date().toISOString();
      const record = { id: todoForm.id || crypto.randomUUID(), title: todoForm.title.trim(), note: todoForm.note.trim(), date: todoForm.date, dueAt: todoForm.dueAt ? new Date(todoForm.dueAt).toISOString() : '', sortOrder: existing?.sortOrder ?? todos.value.length, activated: existing?.activated || false, completed: existing?.completed || false, completedAt: existing?.completedAt || null, createdAt: existing?.createdAt || stamp, updatedAt: stamp };
      await putRecord('todos', record); todoDialogOpen.value = false; selectedTodoDate.value = record.date; await loadAll(); message.success(existing ? 'Todo 已更新' : 'Todo 已创建');
    }
    async function toggleTodo(todo) { const completed = !todo.completed; await putRecord('todos', { ...todo, completed, completedAt: completed ? new Date().toISOString() : null, updatedAt: new Date().toISOString() }); await loadAll(); }
    async function toggleActivated(todo) { await putRecord('todos', { ...todo, activated: !todo.activated, updatedAt: new Date().toISOString() }); await loadAll(); }
    function onTodoDragStart(todo) { dragTodoId.value = todo.id; dragTargetId.value = ''; }
    function onTodoDragEnd() { dragTodoId.value = ''; dragOverTodoId.value = ''; dragTargetId.value = ''; }
    function onTodoDragEnter(todo, event) {
      dragOverTodoId.value = todo.id;
      dragTargetId.value = todo.id;
      const rect = document.querySelector(`.task-card[data-id="${todo.id}"]`)?.getBoundingClientRect();
      dragInsertBefore.value = rect ? event.clientY < rect.top + rect.height / 2 : false;
    }
    async function onTodoDrop() {
      if (!dragTodoId.value) return;
      const srcId = dragTodoId.value;
      const targetId = dragTargetId.value;
      const insertBefore = dragInsertBefore.value;
      onTodoDragEnd();

      const visibleIds = visibleTodos.value.map((item) => item.id);
      const from = visibleIds.indexOf(srcId);
      const to = targetId ? visibleIds.indexOf(targetId) : visibleIds.length - 1;
      if (from < 0 || to < 0 || from === to) return;

      const globalIds = sortTodos(todos.value).map((item) => item.id);
      const ordered = [...globalIds.filter((id) => id !== srcId)];
      const targetPosition = ordered.indexOf(targetId);
      ordered.splice(targetPosition >= 0 ? targetPosition + (insertBefore ? 0 : 1) : ordered.length, 0, srcId);

      const byId = new Map(todos.value.map((item) => [item.id, item]));
      const updated = ordered.map((id, index) => ({ ...byId.get(id), sortOrder: index }));
      for (const record of updated) await putRecord('todos', record);
      await loadAll();
    }
    function openTimerDialog(timer) { Object.assign(timerForm, timer ? { ...timer } : { id: '', name: '', targetAt: new Date(Date.now() + 86400000).toISOString() }); timerDialogOpen.value = true; }
    async function saveTimer() { const existing = timers.value.find((item) => item.id === timerForm.id); const stamp = new Date().toISOString(); const targetAt = new Date(timerForm.targetAt).toISOString(); await putRecord('timers', { id: timerForm.id || crypto.randomUUID(), name: timerForm.name.trim(), targetAt, notifiedAt: existing?.targetAt === targetAt ? existing.notifiedAt : null, createdAt: existing?.createdAt || stamp, updatedAt: stamp }); timerDialogOpen.value = false; await loadAll(); message.success(existing ? '倒计时已更新' : '倒计时已创建'); }
    function timerExpired(timer) { return new Date(timer.targetAt).getTime() <= now.value; }
    function timerRemaining(timer) { return timerExpired(timer) ? '已到期' : formatCountdown(new Date(timer.targetAt).getTime() - now.value); }
    function timerProgress(timer) { const start = new Date(timer.createdAt).getTime(); const end = new Date(timer.targetAt).getTime(); return Math.round(Math.min(100, Math.max(0, ((now.value - start) / Math.max(1, end - start)) * 100))); }
    async function persistPomodoro(nextState) { pomodoro.value = nextState; await setSetting('pomodoroState', nextState); }
    function choosePomodoroDuration(minutes) { return persistPomodoro(selectPomodoroDuration(pomodoro.value, minutes)); }
    function beginPomodoro() { return persistPomodoro(startPomodoro(pomodoro.value, Date.now())); }
    function pauseCurrentPomodoro() { return persistPomodoro(pausePomodoro(pomodoro.value, Date.now())); }
    function resumeCurrentPomodoro() { return persistPomodoro(resumePomodoro(pomodoro.value, Date.now())); }
    function resetCurrentPomodoro() { return persistPomodoro(resetPomodoro(pomodoro.value)); }
    async function addIdea() { const content = ideaDraft.value.trim(); if (!content) return; const stamp = new Date().toISOString(); await putRecord('ideas', { id: crypto.randomUUID(), content, implemented: false, implementedAt: null, createdAt: stamp, updatedAt: stamp }); ideaDraft.value = ''; await loadAll(); message.success('灵感已记录'); }
    async function toggleIdea(idea) { const implemented = !idea.implemented; await putRecord('ideas', { ...idea, implemented, implementedAt: implemented ? new Date().toISOString() : null, updatedAt: new Date().toISOString() }); await loadAll(); }
    async function addThought() { const content = thoughtDraft.value.trim(); if (!content) return; const stamp = new Date().toISOString(); await putRecord('thoughts', { id: crypto.randomUUID(), content, createdAt: stamp, updatedAt: stamp }); thoughtDraft.value = ''; await loadAll(); message.success('想法已记录'); }
    function openTextDialog(store, record) { Object.assign(textForm, { store, id: record.id, content: record.content }); textDialogOpen.value = true; }
    async function saveTextEdit() { const records = textForm.store === 'ideas' ? ideas.value : thoughts.value; const current = records.find((item) => item.id === textForm.id); await putRecord(textForm.store, { ...current, content: textForm.content.trim(), updatedAt: new Date().toISOString() }); textDialogOpen.value = false; await loadAll(); message.success('内容已更新'); }
    function formatTime(value) { return new Intl.DateTimeFormat('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(value)); }

    function normalizeFavoriteUrl(value) {
      const url = new URL(value.trim());
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error('请输入 http 或 https 网页地址');
      return url;
    }
    function openFavoriteDialog(favorite) {
      Object.assign(favoriteForm, favorite ? { ...favorite } : { id: '', url: '', title: '', summary: '', outline: '' });
      favoriteRecognitionError.value = '';
      favoriteDialogOpen.value = true;
    }
    async function recognizeFavoriteUrl() {
      favoriteRecognitionError.value = '';
      let url;
      try { url = normalizeFavoriteUrl(favoriteForm.url); }
      catch (error) { favoriteRecognitionError.value = error.message; return; }
      favoriteRecognizing.value = true;
      try {
        const result = await recognizeFavorite(url.href);
        Object.assign(favoriteForm, result);
        message.success('网页内容识别完成');
      } catch (error) {
        favoriteRecognitionError.value = `${error.message}，你可以手动填写后保存。`;
      } finally { favoriteRecognizing.value = false; }
    }
    async function saveFavorite() {
      let url;
      try { url = normalizeFavoriteUrl(favoriteForm.url); }
      catch (error) { message.error(error.message); return; }
      const existing = favorites.value.find((item) => item.id === favoriteForm.id); const stamp = new Date().toISOString();
      await putRecord('favorites', { id: favoriteForm.id || crypto.randomUUID(), url: url.href, domain: url.hostname, title: favoriteForm.title.trim(), summary: favoriteForm.summary.trim(), outline: favoriteForm.outline.trim(), recognitionStatus: favoriteForm.title.trim() && favoriteForm.summary.trim() ? 'recognized' : 'manual', read: existing?.read || false, createdAt: existing?.createdAt || stamp, updatedAt: stamp });
      favoriteDialogOpen.value = false; await loadAll(); message.success(existing ? '收藏已更新' : '收藏已保存');
    }
    async function toggleFavoriteRead(favorite) { await putRecord('favorites', { ...favorite, read: !favorite.read, updatedAt: new Date().toISOString() }); await loadAll(); }
    function visitFavorite(favorite) { window.open(favorite.url, '_blank', 'noopener,noreferrer'); }

    function workspaceContext() { return buildWorkspaceContext({ todos: todos.value, timers: timers.value, pomodoro: pomodoro.value, ideas: ideas.value, thoughts: thoughts.value, favorites: favorites.value }); }
    function agentChatMessages() {
      return agentMessages.value.filter((item) => item.content).map(({ role, content }) => ({ role, content }));
    }
    async function runAgentRequest(prompt, forcedIntent = '') {
      agentLoading.value = true; agentError.value = ''; agentAbortController = new AbortController();
      try {
        let intent = forcedIntent || detectAgentIntent(prompt);
        if (intent === 'unknown') {
          agentTaskType.value = 'classify';
          intent = await classifyAgentIntent(prompt, { signal: agentAbortController.signal });
        }
        agentTaskType.value = intent;
        if (intent === 'web') {
          const result = await searchWebWithAgent(prompt, workspaceContext(), { signal: agentAbortController.signal });
          agentMessages.value.push({ role: 'assistant', kind: 'web', content: result.content, sources: result.sources });
        } else if (intent === 'image') {
          const result = await generateAgentImage(prompt, { signal: agentAbortController.signal });
          agentMessages.value.push({ role: 'assistant', kind: 'image', content: '', imageUrl: result.imageUrl, prompt, revisedPrompt: result.revisedPrompt });
        } else {
          const content = await askWorkspaceAgent(agentChatMessages(), workspaceContext(), { signal: agentAbortController.signal });
          agentMessages.value.push({ role: 'assistant', kind: 'text', content });
        }
      } catch (error) { agentError.value = error.message; }
      finally { agentLoading.value = false; agentAbortController = null; }
    }
    async function sendAgentMessage() {
      const content = agentDraft.value.trim(); if (!content || agentLoading.value) return;
      agentMessages.value.push({ role: 'user', content }); agentDraft.value = '';
      await runAgentRequest(content);
    }
    async function retryAgentMessage() {
      if (agentLoading.value || !agentMessages.value.some((item) => item.role === 'user')) return;
      agentMessages.value = agentMessages.value.filter((item, index, items) => !(item.role === 'assistant' && index === items.length - 1));
      const prompt = [...agentMessages.value].reverse().find((item) => item.role === 'user')?.content;
      if (prompt) await runAgentRequest(prompt);
    }
    async function regenerateAgentImage(item) {
      if (agentLoading.value || !item?.prompt) return;
      agentMessages.value.push({ role: 'user', content: `重新生成图片：${item.prompt}` });
      await runAgentRequest(item.prompt, 'image');
    }
    async function downloadAgentImage(item) {
      if (!item?.imageUrl) return;
      let href = item.imageUrl; let objectUrl = '';
      try {
        if (!href.startsWith('data:')) { objectUrl = URL.createObjectURL(await (await fetch(href)).blob()); href = objectUrl; }
        const link = document.createElement('a'); link.href = href; link.download = formatLocalDateTimeFilename().replace(/\.json$/, '.png'); link.click();
      } catch {
        window.open(item.imageUrl, '_blank', 'noopener,noreferrer'); message.warning('图片已在新窗口打开，请手动保存');
      } finally { if (objectUrl) setTimeout(() => URL.revokeObjectURL(objectUrl), 1000); }
    }
    function stopAgentRequest() { agentAbortController?.abort(); }
    function clearAgentConversation() { agentAbortController?.abort(); agentMessages.value = []; agentError.value = ''; }

    function deleteKey(store, id) { return `${store}:${id}`; }
    function isDeletePending(store, id) { return pendingDeleteKey.value === deleteKey(store, id) && deleteConfirmation.isPending(deleteKey(store, id)); }
    function deleteButtonText(store, id) { return isDeletePending(store, id) ? '再次确认' : '删除'; }
    function cancelDeleteConfirmation() { deleteConfirmation.cancel(); pendingDeleteKey.value = ''; clearTimeout(deleteResetTimer); }
    async function requestDelete(store, id) {
      const key = deleteKey(store, id);
      if (!deleteConfirmation.click(key)) {
        pendingDeleteKey.value = key; clearTimeout(deleteResetTimer); deleteResetTimer = setTimeout(cancelDeleteConfirmation, 5000); return;
      }
      pendingDeleteKey.value = ''; clearTimeout(deleteResetTimer); await deleteRecord(store, id); await loadAll(); message.success('已删除');
    }

    async function requestNotification() { if (!('Notification' in window)) return; notificationPermission.value = await Notification.requestPermission(); await setSetting('notificationGranted', notificationPermission.value === 'granted'); message(notificationPermission.value === 'granted' ? { type: 'success', message: '浏览器通知已开启' } : { type: 'warning', message: '未获得通知权限' }); }
    function playBeep() { const AudioContext = window.AudioContext || window.webkitAudioContext; if (!AudioContext) return; const context = new AudioContext(); const oscillator = context.createOscillator(); const gain = context.createGain(); oscillator.frequency.value = 660; gain.gain.setValueAtTime(.15, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .6); oscillator.connect(gain).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + .6); }
    async function checkTimerNotifications() {
      for (const timer of timers.value.filter((item) => !item.notifiedAt && new Date(item.targetAt).getTime() <= now.value)) {
        if ('Notification' in window && Notification.permission === 'granted') new Notification('倒计时提醒', { body: `“${timer.name}”时间到了` });
        if (soundEnabled.value) playBeep(); ElementPlus.ElNotification({ title: '倒计时提醒', message: `“${timer.name}”时间到了`, type: 'warning', duration: 0 });
        await putRecord('timers', { ...timer, notifiedAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
      }
      if (timers.value.some((item) => !item.notifiedAt && new Date(item.targetAt).getTime() <= now.value)) await loadAll();
    }
    async function checkPomodoroNotification() {
      if (!isPomodoroFinished(pomodoro.value, now.value) || pomodoro.value.notifiedAt) return;
      const notifiedAt = new Date().toISOString();
      if ('Notification' in window && Notification.permission === 'granted') new Notification('番茄钟完成', { body: `${pomodoro.value.durationMinutes} 分钟专注时间已结束` });
      if (soundEnabled.value) playBeep();
      ElementPlus.ElNotification({ title: '番茄钟完成', message: '休息一下，再开始下一轮吧', type: 'success', duration: 0 });
      await persistPomodoro({ ...pomodoro.value, status: 'finished', remainingMs: 0, notifiedAt });
    }

    function downloadJson(data, filename) { const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' })); const link = document.createElement('a'); link.href = url; link.download = filename; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
    async function exportData() {
      const backup = createBackup(await getAllData());
      const filename = formatLocalDateTimeFilename(backup.exportedAt);
      if (typeof window.showSaveFilePicker === 'function') {
        try {
          const handle = await window.showSaveFilePicker({ suggestedName: filename, types: [{ description: 'JSON 备份', accept: { 'application/json': ['.json'] } }] });
          const writable = await handle.createWritable();
          await writable.write(JSON.stringify(backup, null, 2));
          await writable.close();
        } catch (error) {
          if (error?.name === 'AbortError') return;
          message.error(error?.message || '导出失败');
          return;
        }
      } else {
        downloadJson(backup, filename);
      }
      await setSetting('lastExportedAt', backup.exportedAt);
      message.success('数据备份已导出');
    }
    function chooseImport(mode) { importMode.value = mode; importInput.value.value = ''; importInput.value.click(); }
    async function handleImport(event) {
      try {
        const file = event.target.files[0]; if (!file) return; const data = validateBackup(JSON.parse(await file.text())); const replacing = importMode.value === 'replace';
        await ElementPlus.ElMessageBox.confirm(replacing ? '当前数据将被导入文件完全替换，操作前会自动导出备份。' : '相同 ID 的记录将使用导入文件内容，其余记录会追加。', replacing ? '覆盖还原' : '合并导入', { type: 'warning', confirmButtonText: replacing ? '备份并覆盖' : '确认合并', cancelButtonText: '取消' });
        if (replacing) { await exportData(); await replaceAllData(data); await loadSettings(); await loadAll(); }
        else { await mergeAllData(data); await loadSettings(); await loadAll(); }
        message.success(replacing ? '数据已覆盖还原' : '数据已合并导入');
      } catch (error) { if (error !== 'cancel') message.error(error.message || '导入失败'); }
    }
    function openClearDialog() { clearPhrase.value = ''; clearDialogOpen.value = true; }
    async function clearEverything() { if (clearPhrase.value !== '确认删除') return; await clearAllData(); await loadSettings(); clearDialogOpen.value = false; await loadAll(); message.success('全部数据已清空'); }

    onMounted(async () => {
      await openDatabase(); await loadSettings(); await loadAll();
      clockTimer = setInterval(() => { now.value = Date.now(); checkTimerNotifications(); checkPomodoroNotification(); }, 1000);
      matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => theme.value === 'system' && applyTheme('system'));
      if (!birthday.value) setTimeout(() => { settingsOpen.value = true; message.info('首次使用，请先设置出生日期'); }, 450);
    });
    onBeforeUnmount(() => { clearInterval(clockTimer); clearTimeout(deleteResetTimer); agentAbortController?.abort(); });
    watch(activeView, cancelDeleteConfirmation);

    return { activeView, sidebarCollapsed, mobileMenuOpen, settingsOpen, theme, birthday, soundEnabled, todos, timers, ideas, thoughts, favorites, selectedTodoDate, showAllTodos, ideaFilter, ideaDraft, thoughtDraft, todoDialogOpen, timerDialogOpen, textDialogOpen, clearDialogOpen, favoriteDialogOpen, favoriteRecognizing, favoriteRecognitionError, clearPhrase, importInput, todoForm, timerForm, textForm, favoriteForm, agentMessages, agentDraft, agentLoading, agentError, agentTaskLabel, pomodoro, navItems, todayLabel, currentPage, visibleTodos, sortedTimers, sortedFavorites, ideaFilterOptions, filteredIdeas, ideaGroups, thoughtGroups, textDialogTitle, notificationPermission, notificationLabel, dataSummary, periodCountdowns, pomodoroRemainingMs, pomodoroRemainingLabel, dragTodoId, dragTargetId, dragOverTodoId, dragInsertBefore, selectView, selectMobileView, runPrimaryAction, shiftTodoDate, goToday, todoStatus, todoNoteSegments, openTodoLink, openTodoDialog, saveTodo, toggleTodo, toggleActivated, onTodoDragStart, onTodoDragEnter, onTodoDrop, onTodoDragEnd, openTimerDialog, saveTimer, timerExpired, timerRemaining, timerProgress, choosePomodoroDuration, beginPomodoro, pauseCurrentPomodoro, resumeCurrentPomodoro, resetCurrentPomodoro, addIdea, toggleIdea, addThought, openTextDialog, saveTextEdit, openFavoriteDialog, recognizeFavoriteUrl, saveFavorite, toggleFavoriteRead, visitFavorite, sendAgentMessage, retryAgentMessage, stopAgentRequest, clearAgentConversation, downloadAgentImage, regenerateAgentImage, formatDateTime, formatTime, isDeletePending, deleteButtonText, cancelDeleteConfirmation, requestDelete, saveTheme, saveBirthday, saveSound, disableFutureDate, requestNotification, exportData, chooseImport, handleImport, openClearDialog, clearEverything };
  },
});

app.component('HourglassVisual', HourglassVisual);
if (globalThis.ElementPlusIconsVue) Object.entries(ElementPlusIconsVue).forEach(([name, component]) => app.component(name, component));
app.use(ElementPlus, globalThis.ElementPlusLocaleZhCn ? { locale: ElementPlusLocaleZhCn } : undefined);
app.mount('#app');
window.__workbenchMounted = true;
clearTimeout(window.__workbenchBootTimer);
document.querySelector('#boot-status').hidden = true;
document.querySelector('#cdn-error').hidden = true;
