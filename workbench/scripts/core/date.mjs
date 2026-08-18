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

export function getTodoStatus(todo, now = new Date()) {
  if (todo.completed) return 'completed';
  if (!todo.dueAt) return 'active';
  const due = new Date(todo.dueAt);
  if (Number.isNaN(due.getTime())) return 'active';
  const remaining = due.getTime() - now.getTime();
  if (remaining < 0) return 'overdue';
  if (remaining <= DAY_MS) return 'due-soon';
  return 'active';
}

export function getPeriodRange(type, now = new Date(), birthday = '') {
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

export function getCountdownParts(milliseconds) {
  const total = Math.max(0, Math.floor(milliseconds / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    total,
  };
}

export function formatLocalDate(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatDateTime(value) {
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

export function formatCountdown(milliseconds) {
  const parts = getCountdownParts(milliseconds);
  return `${parts.days}天 ${String(parts.hours).padStart(2, '0')}:${String(parts.minutes).padStart(2, '0')}:${String(parts.seconds).padStart(2, '0')}`;
}

export function groupByLocalDate(items, field = 'createdAt') {
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

export function toLocalDateTimeInput(value) {
  if (!value) return '';
  const date = new Date(value);
  const datePart = formatLocalDate(date);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${datePart}T${hours}:${minutes}`;
}
