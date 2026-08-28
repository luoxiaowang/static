export function sortTodos(records) {
  return [...records].sort((a, b) => {
    if (Boolean(a.completed) !== Boolean(b.completed)) return a.completed ? 1 : -1;

    const orderDifference = Number(a.sortOrder ?? Infinity) - Number(b.sortOrder ?? Infinity);
    if (orderDifference) return orderDifference;

    return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
  });
}

export function selectTodos(records, { showAll = false, date = '' } = {}) {
  if (showAll) return sortTodos(records);
  return sortTodos(records.filter((item) => (item.completed ? item.date === date : !item.date || item.date <= date)));
}
