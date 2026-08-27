const PRIORITY_WEIGHT = { high: 0, medium: 1, low: 2 };

export function normalizePriority(value) {
  return Object.hasOwn(PRIORITY_WEIGHT, value) ? value : 'medium';
}

export function sortTodos(records) {
  return [...records].sort((a, b) => {
    if (Boolean(a.completed) !== Boolean(b.completed)) return a.completed ? 1 : -1;
    if (Boolean(a.activated) !== Boolean(b.activated)) return a.activated ? -1 : 1;

    const priorityDifference = PRIORITY_WEIGHT[normalizePriority(a.priority)] - PRIORITY_WEIGHT[normalizePriority(b.priority)];
    if (priorityDifference) return priorityDifference;

    if (a.dueAt && b.dueAt) {
      const dueDifference = new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime();
      if (dueDifference) return dueDifference;
    } else if (a.dueAt || b.dueAt) {
      return a.dueAt ? -1 : 1;
    }

    return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
  });
}

export function selectTodos(records, { showAll = false, date = '' } = {}) {
  if (showAll) return sortTodos(records);
  return sortTodos(records.filter((item) => (item.completed ? item.date === date : !item.date || item.date <= date)));
}
