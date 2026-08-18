import { formatLocalDate } from '../core/date.mjs';

function latestFirst(records, field = 'createdAt') {
  return [...(records || [])].sort((a, b) => new Date(b[field] || 0).getTime() - new Date(a[field] || 0).getTime());
}

function compactTodo(item) {
  return { title: item.title, priority: item.priority || 'medium', date: item.date, dueAt: item.dueAt || '', completed: Boolean(item.completed), note: item.note || '' };
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

export function buildWorkspaceContext(data = {}, { maxChars = 24000, now = new Date(), timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '本机时区' } = {}) {
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
