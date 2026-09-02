/*
 * 我的工作台经典脚本包
 * 由 node workbench/build-bundle.mjs 从模块化源码生成。
 * 可通过 file:// 直接打开，也可托管到任意静态服务器。
 */
(() => {
'use strict';

// ---- scripts/core/date.mjs ----
const DAY_MS = 24 * 60 * 60 * 1000;

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseBirthday(value) {
  if (!value) return null;
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

function getTodoStatus(todo, now = new Date()) {
  if (todo.completed) return 'completed';
  if (!todo.dueAt) return 'active';
  const due = new Date(todo.dueAt);
  if (Number.isNaN(due.getTime())) return 'active';
  const remaining = due.getTime() - now.getTime();
  if (remaining < 0) return 'overdue';
  if (remaining <= DAY_MS) return 'due-soon';
  return 'active';
}

function getPeriodRange(type, now = new Date(), birthday = '') {
  let start;
  let end;

  if (type === 'day') {
    start = startOfDay(now);
    end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1);
  } else if (type === 'week') {
    start = startOfDay(now);
    const daysFromMonday = (start.getDay() + 6) % 7;
    start.setDate(start.getDate() - daysFromMonday);
    end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 5);
  } else if (type === 'month') {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  } else if (type === 'year') {
    start = new Date(now.getFullYear(), 0, 1);
    end = new Date(now.getFullYear() + 1, 0, 1);
  } else if (type === 'life') {
    start = parseBirthday(birthday);
    if (!start) return null;
    end = new Date(start.getFullYear() + 85, start.getMonth(), start.getDate());
  } else {
    throw new Error(`未知的倒计时类型：${type}`);
  }

  return { start, end, ended: type === 'week' && now >= end };
}

function getCountdownParts(milliseconds) {
  const total = Math.max(0, Math.floor(milliseconds / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    total,
  };
}

function formatLocalDate(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatLocalDateTimeFilename(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  const time = [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map((part) => String(part).padStart(2, '0'))
    .join('-');
  return `${formatLocalDate(date)}-${time}.json`;
}

function formatDateTime(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '无效时间';
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date);
}

function formatCountdown(milliseconds) {
  const parts = getCountdownParts(milliseconds);
  return `${parts.days}天 ${String(parts.hours).padStart(2, '0')}:${String(parts.minutes).padStart(2, '0')}:${String(parts.seconds).padStart(2, '0')}`;
}

function groupByLocalDate(items, field = 'createdAt') {
  const groups = new Map();
  [...items]
    .sort((a, b) => new Date(b[field]).getTime() - new Date(a[field]).getTime())
    .forEach((item) => {
      const key = formatLocalDate(item[field]);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    });
  return [...groups.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, groupedItems]) => ({ date, items: groupedItems }));
}

function toLocalDateTimeInput(value) {
  if (!value) return '';
  const date = new Date(value);
  const datePart = formatLocalDate(date);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${datePart}T${hours}:${minutes}`;
}


// ---- scripts/core/backup.mjs ----
const BACKUP_APP_ID = 'personal-workbench';
const BACKUP_VERSION = 2;
const DATA_STORES = ['todos', 'timers', 'ideas', 'thoughts', 'favorites', 'settings'];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createBackup(data, now = new Date()) {
  return {
    appId: BACKUP_APP_ID,
    version: BACKUP_VERSION,
    exportedAt: now.toISOString(),
    data: clone(data),
  };
}

function validateBackup(input) {
  const backup = typeof input === 'string' ? JSON.parse(input) : input;
  if (!backup || typeof backup !== 'object') throw new Error('备份文件内容为空或格式不正确');
  if (backup.appId !== BACKUP_APP_ID) throw new Error('这不是个人工作台的备份文件');
  if (![1, BACKUP_VERSION].includes(backup.version)) throw new Error(`暂不支持版本 ${backup.version} 的备份文件`);
  if (!backup.data || typeof backup.data !== 'object') throw new Error('备份文件缺少 data 数据');

  const normalizedData = clone(backup.data);
  if (backup.version === 1 && !normalizedData.favorites) normalizedData.favorites = [];

  for (const store of DATA_STORES) {
    const records = normalizedData[store];
    if (!Array.isArray(records)) throw new Error(`${store} 数据格式不正确，应为数组`);
    if (records.some((record) => !record || typeof record.id !== 'string' || !record.id)) {
      throw new Error(`${store} 中存在缺少 id 的记录`);
    }
  }
  return normalizedData;
}

function mergeRecords(current, incoming) {
  const map = new Map(current.map((record) => [record.id, record]));
  incoming.forEach((record) => map.set(record.id, record));
  return [...map.values()];
}


// ---- scripts/core/delete-confirm.mjs ----
function createDeleteConfirmation(windowMs = 5000) {
  let pendingKey = '';
  let expiresAt = 0;

  return {
    click(key, now = Date.now()) {
      if (pendingKey === key && now <= expiresAt) {
        pendingKey = '';
        expiresAt = 0;
        return true;
      }
      pendingKey = key;
      expiresAt = now + windowMs;
      return false;
    },
    cancel() {
      pendingKey = '';
      expiresAt = 0;
    },
    isPending(key, now = Date.now()) {
      if (now > expiresAt) {
        pendingKey = '';
        expiresAt = 0;
      }
      return pendingKey === key && Boolean(pendingKey);
    },
    get pendingKey() {
      return pendingKey;
    },
  };
}


// ---- scripts/core/todo-sort.mjs ----
function sortTodos(records) {
  return [...records].sort((a, b) => {
    if (Boolean(a.completed) !== Boolean(b.completed)) return a.completed ? 1 : -1;

    const orderDifference = Number(a.sortOrder ?? Infinity) - Number(b.sortOrder ?? Infinity);
    if (orderDifference) return orderDifference;

    return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
  });
}

function selectTodos(records, { showAll = false, date = '' } = {}) {
  if (showAll) return sortTodos(records);
  return sortTodos(records.filter((item) => (item.completed ? item.date === date : !item.date || item.date <= date)));
}


// ---- scripts/core/pomodoro.mjs ----
const MINUTE_MS = 60 * 1000;
const SUPPORTED_DURATIONS = new Set([30, 60]);

function createPomodoroState(durationMinutes = 30) {
  const safeDuration = SUPPORTED_DURATIONS.has(durationMinutes) ? durationMinutes : 30;
  return {
    durationMinutes: safeDuration,
    status: 'idle',
    targetAt: null,
    remainingMs: safeDuration * MINUTE_MS,
    notifiedAt: null,
  };
}

function selectPomodoroDuration(state, durationMinutes) {
  if (!SUPPORTED_DURATIONS.has(durationMinutes)) throw new Error('番茄钟仅支持 30 分钟或 1 小时');
  return createPomodoroState(durationMinutes);
}

function startPomodoro(state, now = Date.now()) {
  const remainingMs = state.status === 'paused' ? state.remainingMs : state.durationMinutes * MINUTE_MS;
  return { ...state, status: 'running', targetAt: now + remainingMs, remainingMs, notifiedAt: null };
}

function getPomodoroRemaining(state, now = Date.now()) {
  if (state.status === 'running') return Math.max(0, Number(state.targetAt) - now);
  return Math.max(0, Number(state.remainingMs) || 0);
}

function pausePomodoro(state, now = Date.now()) {
  if (state.status !== 'running') return state;
  return { ...state, status: 'paused', targetAt: null, remainingMs: getPomodoroRemaining(state, now) };
}

function resumePomodoro(state, now = Date.now()) {
  if (state.status !== 'paused') return state;
  return { ...state, status: 'running', targetAt: now + state.remainingMs, notifiedAt: null };
}

function resetPomodoro(state) {
  return createPomodoroState(state.durationMinutes);
}

function isPomodoroFinished(state, now = Date.now()) {
  return state.status === 'running' && getPomodoroRemaining(state, now) === 0;
}


// ---- scripts/ai/intent-router.mjs ----
const IMAGE_INTENT = /(?:生成|画|绘制|制作|设计|创建|做)(?:一张|一个|一幅|些)?[^，。！？\n]{0,12}(?:图片|图像|海报|封面|插画|壁纸|头像)|文生图/i;
const WORKSPACE_INTENT = /todo|待办|任务|倒计时|番茄钟|灵感|碎碎念|收藏夹|工作台/i;
const WEB_INTENT = /联网|上网|搜索|搜一下|查一下|查询|最新|新闻|天气|价格|行情|实时|近期|最近发布|官网/i;

function detectAgentIntent(text = '') {
  const content = String(text).trim();
  if (!content) return 'chat';
  if (IMAGE_INTENT.test(content)) return 'image';
  if (WORKSPACE_INTENT.test(content)) return 'chat';
  if (WEB_INTENT.test(content)) return 'web';
  return 'unknown';
}


// ---- scripts/ai/agnes-client.mjs ----
const AGNES_API_URL = 'https://apihub.agnes-ai.com/v1/chat/completions';
const AGNES_RESPONSES_URL = 'https://apihub.agnes-ai.com/v1/responses';
const AGNES_IMAGES_URL = 'https://apihub.agnes-ai.com/v1/images/generations';
const AGNES_MODEL = 'agnes-2.5-flash';
const AGNES_IMAGE_MODEL = 'agnes-image-2.1-flash';
const AGNES_API_KEY = 'sk-URS1kygpIOM5zVM4x3K' + 'VtowqlIKwSFamAE3sMbV1mX79nlNm';

function friendlyHttpError(status) {
  if (status === 401 || status === 403) return new Error('API Key 无效或无权限，请检查 AgnesAI 访问权限');
  if (status === 429) return new Error('AI 请求过于频繁，请稍后再试');
  if (status >= 500) return new Error('AgnesAI 服务暂时不可用，请稍后再试');
  return new Error(`AI 请求失败（${status}）`);
}

async function requestAgnes(messages, { fetchImpl = fetch, signal } = {}) {
  const payload = await requestJson(AGNES_API_URL, { model: AGNES_MODEL, messages, temperature: 0.2, max_tokens: 1800 }, {
    fetchImpl,
    signal,
    timeoutMs: 60000,
    timeoutMessage: 'AI 响应超时，请稍后重试',
  });
  const content = payload?.choices?.[0]?.message?.content;
  if (typeof content !== 'string' || !content.trim()) throw new Error('AgnesAI 没有返回有效内容');
  return content.trim();
}

async function requestJson(url, body, { fetchImpl = fetch, signal, timeoutMs, timeoutMessage } = {}) {
  const controller = new AbortController();
  let timedOut = false;
  const abortFromParent = () => controller.abort(signal?.reason);
  if (signal?.aborted) abortFromParent();
  else signal?.addEventListener('abort', abortFromParent, { once: true });
  const timer = setTimeout(() => { timedOut = true; controller.abort(); }, timeoutMs);
  let response;
  try {
    response = await fetchImpl(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AGNES_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (error) {
    if (error?.name === 'AbortError') throw new Error(timedOut ? timeoutMessage : 'AI 请求已停止');
    throw new Error('无法连接 AgnesAI，请检查网络或浏览器跨域限制');
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', abortFromParent);
  }

  if (!response.ok) throw friendlyHttpError(response.status);

  try {
    return await response.json();
  } catch {
    throw new Error('AgnesAI 返回了无法解析的响应');
  }
}

function parseFavoriteRecognition(content) {
  const cleaned = content.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  let data;
  try {
    data = JSON.parse(cleaned);
  } catch {
    throw new Error('无法解析 AI 返回的收藏内容，请手动填写');
  }
  const fields = ['title', 'summary', 'outline'];
  if (fields.some((field) => typeof data[field] !== 'string' || !data[field].trim())) {
    throw new Error('无法解析 AI 返回的收藏内容，请手动填写');
  }
  return Object.fromEntries(fields.map((field) => [field, data[field].trim()]));
}

async function recognizeFavorite(url, { fetchImpl = fetch, signal } = {}) {
  const payload = await requestJson(AGNES_RESPONSES_URL, {
    model: AGNES_MODEL,
    instructions: '你是网页内容识别助手。必须实际读取用户提供的网页后再回答；读取失败时明确说明失败，禁止根据 URL 猜测。只输出合法 JSON：{"title":"网页标题","summary":"不超过160字的摘要","outline":"Markdown 分层大纲"}',
    input: `读取网页 ${url}，生成标题、摘要和 Markdown 分层大纲。`,
    tools: [{ type: 'web_search_preview' }],
  }, { fetchImpl, signal, timeoutMs: 90000, timeoutMessage: '网页识别超时，请稍后重试' });
  const content = (payload?.output || [])
    .filter((item) => item?.type === 'message')
    .flatMap((item) => item.content || [])
    .filter((item) => item?.type === 'output_text')
    .map((item) => item.text || '')
    .join('\n\n')
    .trim();
  if (!content) throw new Error('AgnesAI 网页识别没有返回有效内容');
  return parseFavoriteRecognition(content);
}

function askWorkspaceAgent(messages, workspaceContext, { fetchImpl = fetch, signal } = {}) {
  return requestAgnes([
    {
      role: 'system',
      content: `你是个人工作台的只读 Agent 助手。根据提供的数据进行检索、总结、规划与建议，不得声称已经修改数据。涉及今天、明天、昨天或是否到期时，必须以工作台上下文中的当前本机日期时间为准，不得使用模型自身日期。\n\n当前工作台数据：\n${workspaceContext}`,
    },
    ...messages,
  ], { fetchImpl, signal });
}

async function classifyAgentIntent(text, { fetchImpl = fetch, signal } = {}) {
  try {
    const content = await requestAgnes([
      {
        role: 'system',
        content: '判断用户意图，只输出合法 JSON：{"intent":"chat|web|image"}。chat 表示普通问答或工作台数据咨询；web 表示必须联网获取实时或外部信息；image 表示生成图片。',
      },
      { role: 'user', content: text },
    ], { fetchImpl, signal });
    const parsed = JSON.parse(content.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim());
    return ['chat', 'web', 'image'].includes(parsed.intent) ? parsed.intent : 'chat';
  } catch (error) {
    if (error?.message === 'AI 请求已停止') throw error;
    return 'chat';
  }
}

async function searchWebWithAgent(text, workspaceContext, { fetchImpl = fetch, signal } = {}) {
  const payload = await requestJson(AGNES_RESPONSES_URL, {
    model: AGNES_MODEL,
    instructions: `你是个人工作台的联网查询助手。必须联网搜索后回答，不得依赖模型记忆猜测实时信息。回答使用中文，并给出可验证来源。以下工作台上下文仅用于理解用户问题：\n${workspaceContext}`,
    input: text,
    tools: [{ type: 'web_search_preview' }],
  }, { fetchImpl, signal, timeoutMs: 90000, timeoutMessage: '联网查询超时，请稍后重试' });

  const outputText = (payload?.output || [])
    .filter((item) => item?.type === 'message')
    .flatMap((item) => item.content || [])
    .filter((item) => item?.type === 'output_text');
  const content = outputText.map((item) => item.text || '').join('\n\n').trim();
  if (!content) throw new Error('AgnesAI 联网查询没有返回有效内容');

  const sourceMap = new Map();
  outputText.flatMap((item) => item.annotations || []).forEach((annotation) => {
    const citation = annotation?.url_citation || annotation;
    if (typeof citation?.url !== 'string' || !/^https?:\/\//i.test(citation.url)) return;
    if (!sourceMap.has(citation.url)) sourceMap.set(citation.url, { title: citation.title || new URL(citation.url).hostname, url: citation.url });
  });
  const sources = [...sourceMap.values()];
  if (!sources.length) throw new Error('AgnesAI 联网查询没有返回可验证的来源');
  return { content, sources };
}

async function generateAgentImage(prompt, { fetchImpl = fetch, signal } = {}) {
  const payload = await requestJson(AGNES_IMAGES_URL, {
    model: AGNES_IMAGE_MODEL,
    prompt: `根据以下需求生成高质量图片。若画面包含文字，必须使用准确、清晰的简体中文：${prompt}`,
    size: '1024x1024',
    extra_body: { response_format: 'url' },
  }, { fetchImpl, signal, timeoutMs: 120000, timeoutMessage: '图片生成超时，请稍后重试' });
  const image = payload?.data?.[0];
  const imageUrl = typeof image?.url === 'string' && image.url
    ? image.url
    : typeof image?.b64_json === 'string' && image.b64_json
      ? `data:image/png;base64,${image.b64_json}`
      : '';
  if (!imageUrl) throw new Error('AgnesAI 没有返回有效图片');
  return { imageUrl, revisedPrompt: typeof image.revised_prompt === 'string' ? image.revised_prompt : '' };
}


// ---- scripts/ai/workspace-context.mjs ----
function latestFirst(records, field = 'createdAt') {
  return [...(records || [])].sort((a, b) => new Date(b[field] || 0).getTime() - new Date(a[field] || 0).getTime());
}

function compactTodo(item) {
  return { title: item.title, date: item.date, dueAt: item.dueAt || '', completed: Boolean(item.completed), note: item.note || '' };
}

function createSections(data) {
  const todos = [...(data.todos || [])].sort((a, b) => Number(a.completed) - Number(b.completed)).map(compactTodo);
  const timers = [...(data.timers || [])].sort((a, b) => String(a.targetAt || '').localeCompare(String(b.targetAt || ''))).map(({ name, targetAt }) => ({ name, targetAt }));
  const ideas = latestFirst(data.ideas).map(({ content, implemented, createdAt }) => ({ content, implemented: Boolean(implemented), createdAt }));
  const thoughts = latestFirst(data.thoughts).map(({ content, createdAt }) => ({ content, createdAt }));
  const favorites = latestFirst(data.favorites).map(({ url, title, summary, outline, createdAt }) => ({ url, title, summary, outline, createdAt }));
  const pomodoro = data.pomodoro || { status: 'idle' };

  return [
    ['Todo', todos],
    ['倒计时', timers],
    ['番茄钟', pomodoro],
    ['创意灵感', ideas],
    ['碎碎念', thoughts],
    ['收藏夹', favorites],
  ];
}

function buildWorkspaceContext(data = {}, { maxChars = 24000, now = new Date(), timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '本机时区' } = {}) {
  const localTime = [now.getHours(), now.getMinutes(), now.getSeconds()]
    .map((part) => String(part).padStart(2, '0'))
    .join(':');
  const timeContext = [
    '## 当前时间基准',
    `当前本机日期：${formatLocalDate(now)}`,
    `当前本机时间：${localTime}`,
    `本机时区：${timeZone}`,
    '涉及“今天”“明天”“昨天”等相对日期时，必须以这里的当前本机日期时间为准。',
  ].join('\n');
  const businessContext = createSections(data)
    .map(([label, value]) => `## ${label}\n${JSON.stringify(value)}`)
    .join('\n\n');
  const context = `${timeContext}\n\n${businessContext}`;
  if (context.length <= maxChars) return context;
  const marker = '\n[上下文已截断]';
  return `${context.slice(0, Math.max(0, maxChars - marker.length))}${marker}`;
}


// ---- scripts/storage/db.mjs ----
const DB_NAME = 'personal-workbench';
const DB_VERSION = 2;
let databasePromise;

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.addEventListener('success', () => resolve(request.result), { once: true });
    request.addEventListener('error', () => reject(request.error), { once: true });
  });
}

function transactionDone(transaction) {
  return new Promise((resolve, reject) => {
    transaction.addEventListener('complete', () => resolve(), { once: true });
    transaction.addEventListener('abort', () => reject(transaction.error || new Error('数据库事务已中止')), { once: true });
    transaction.addEventListener('error', () => reject(transaction.error || new Error('数据库事务失败')), { once: true });
  });
}

function openDatabase() {
  if (!('indexedDB' in globalThis)) return Promise.reject(new Error('当前浏览器不支持 IndexedDB，无法安全保存数据'));
  if (databasePromise) return databasePromise;
  databasePromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.addEventListener('upgradeneeded', () => {
      const db = request.result;
      DATA_STORES.forEach((store) => {
        if (!db.objectStoreNames.contains(store)) db.createObjectStore(store, { keyPath: 'id' });
      });
    });
    request.addEventListener('success', () => resolve(request.result), { once: true });
    request.addEventListener('error', () => reject(request.error), { once: true });
    request.addEventListener('blocked', () => reject(new Error('数据库升级被其他已打开页面阻止，请关闭其他页面后重试')), { once: true });
  });
  return databasePromise;
}

async function listRecords(storeName) {
  const db = await openDatabase();
  return requestToPromise(db.transaction(storeName, 'readonly').objectStore(storeName).getAll());
}

async function putRecord(storeName, record) {
  const db = await openDatabase();
  const transaction = db.transaction(storeName, 'readwrite');
  transaction.objectStore(storeName).put(record);
  await transactionDone(transaction);
  return record;
}

async function deleteRecord(storeName, id) {
  const db = await openDatabase();
  const transaction = db.transaction(storeName, 'readwrite');
  transaction.objectStore(storeName).delete(id);
  await transactionDone(transaction);
}

async function getSetting(id, fallback = null) {
  const db = await openDatabase();
  const record = await requestToPromise(db.transaction('settings', 'readonly').objectStore('settings').get(id));
  return record ? record.value : fallback;
}

function setSetting(id, value) {
  return putRecord('settings', { id, value, updatedAt: new Date().toISOString() });
}

async function getAllData() {
  const entries = await Promise.all(DATA_STORES.map(async (store) => [store, await listRecords(store)]));
  return Object.fromEntries(entries);
}

async function writeAllData(data, { clear }) {
  const db = await openDatabase();
  const transaction = db.transaction(DATA_STORES, 'readwrite');
  DATA_STORES.forEach((storeName) => {
    const store = transaction.objectStore(storeName);
    if (clear) store.clear();
    data[storeName].forEach((record) => store.put(record));
  });
  await transactionDone(transaction);
}

function replaceAllData(data) {
  return writeAllData(data, { clear: true });
}

function mergeAllData(data) {
  return writeAllData(data, { clear: false });
}

async function clearAllData() {
  const empty = Object.fromEntries(DATA_STORES.map((store) => [store, []]));
  await replaceAllData(empty);
}


// ---- scripts/vue-app.mjs ----
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

})();
