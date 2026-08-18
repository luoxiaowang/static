import { formatDateTime, formatLocalDate, getTodoStatus, toLocalDateTimeInput } from '../core/date.mjs';
import { confirmAction, createElement, emptyState, showToast } from '../core/dom.mjs';
import { deleteRecord, listRecords, putRecord } from '../storage/db.mjs';

const statusMeta = {
  completed: ['已完成', 'success'],
  overdue: ['已过期', 'danger'],
  'due-soon': ['即将到期', 'warning'],
  active: ['进行中', 'info'],
};

export function initTodo({ notifyDataChanged }) {
  const list = document.querySelector('#todo-list');
  const filter = document.querySelector('#todo-date-filter');
  const dialog = document.querySelector('#todo-dialog');
  const form = document.querySelector('#todo-form');
  filter.value = formatLocalDate();
  let records = [];

  async function render() {
    records = await listRecords('todos');
    const selected = records
      .filter((item) => item.date === filter.value)
      .sort((a, b) => {
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        if (!a.dueAt && b.dueAt) return 1;
        if (a.dueAt && !b.dueAt) return -1;
        return (a.dueAt || a.createdAt).localeCompare(b.dueAt || b.createdAt);
      });
    list.replaceChildren();
    if (!selected.length) {
      list.append(emptyState(`${filter.value} 还没有 Todo`, '✓'));
      return;
    }
    selected.forEach((todo) => list.append(renderItem(todo)));
  }

  function renderItem(todo) {
    const status = getTodoStatus(todo);
    const [label, tone] = statusMeta[status];
    const check = createElement('button', { className: `check-button${todo.completed ? ' is-checked' : ''}`, attrs: { type: 'button', 'aria-label': todo.completed ? '恢复为未完成' : '标记为已完成' } });
    check.addEventListener('click', () => toggle(todo));
    const title = createElement('h3', { className: 'list-title', text: todo.title });
    const mainChildren = [title];
    if (todo.note) mainChildren.push(createElement('p', { className: 'list-note', text: todo.note }));
    const meta = createElement('div', { className: 'list-meta', children: [createElement('span', { className: `tag tag-${tone}`, text: label })] });
    if (todo.dueAt) meta.append(createElement('span', { text: `截止：${formatDateTime(todo.dueAt)}` }));
    mainChildren.push(meta);
    const editButton = createElement('button', { text: '编辑', attrs: { type: 'button', 'aria-label': `编辑 ${todo.title}` } });
    editButton.addEventListener('click', () => openForm(todo));
    const deleteButton = createElement('button', { className: 'delete-action', text: '删除', attrs: { type: 'button', 'aria-label': `删除 ${todo.title}` } });
    deleteButton.addEventListener('click', () => remove(todo));
    return createElement('article', {
      className: `list-item${todo.completed ? ' is-completed' : ''}`,
      children: [check, createElement('div', { className: 'list-item-main', children: mainChildren }), createElement('div', { className: 'item-actions', children: [editButton, deleteButton] })],
    });
  }

  function openForm(todo = null) {
    form.reset();
    document.querySelector('#todo-dialog-title').textContent = todo ? '编辑 Todo' : '新建 Todo';
    document.querySelector('#todo-id').value = todo?.id || '';
    document.querySelector('#todo-title').value = todo?.title || '';
    document.querySelector('#todo-note').value = todo?.note || '';
    document.querySelector('#todo-date').value = todo?.date || filter.value;
    document.querySelector('#todo-due').value = toLocalDateTimeInput(todo?.dueAt);
    dialog.showModal();
    document.querySelector('#todo-title').focus();
  }

  async function toggle(todo) {
    const completed = !todo.completed;
    await putRecord('todos', { ...todo, completed, completedAt: completed ? new Date().toISOString() : null, updatedAt: new Date().toISOString() });
    notifyDataChanged();
    render();
  }

  async function remove(todo) {
    const confirmed = await confirmAction({ title: '删除 Todo', message: `确定删除“${todo.title}”吗？` });
    if (!confirmed) return;
    await deleteRecord('todos', todo.id);
    notifyDataChanged();
    showToast('Todo 已删除', 'success');
    render();
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const id = document.querySelector('#todo-id').value || crypto.randomUUID();
    const existing = records.find((item) => item.id === id);
    const dueValue = document.querySelector('#todo-due').value;
    const now = new Date().toISOString();
    await putRecord('todos', {
      id,
      title: document.querySelector('#todo-title').value.trim(),
      note: document.querySelector('#todo-note').value.trim(),
      date: document.querySelector('#todo-date').value,
      dueAt: dueValue ? new Date(dueValue).toISOString() : '',
      completed: existing?.completed || false,
      completedAt: existing?.completedAt || null,
      createdAt: existing?.createdAt || now,
      updatedAt: now,
    });
    filter.value = document.querySelector('#todo-date').value;
    dialog.close();
    notifyDataChanged();
    showToast(existing ? 'Todo 已更新' : 'Todo 已创建', 'success');
    render();
  });

  document.querySelector('#add-todo').addEventListener('click', () => openForm());
  filter.addEventListener('change', render);
  document.querySelector('#todo-today').addEventListener('click', () => { filter.value = formatLocalDate(); render(); });
  document.querySelector('#todo-prev-day').addEventListener('click', () => shiftDay(-1));
  document.querySelector('#todo-next-day').addEventListener('click', () => shiftDay(1));
  function shiftDay(amount) {
    const [year, month, day] = filter.value.split('-').map(Number);
    const value = new Date(year, month - 1, day + amount);
    filter.value = formatLocalDate(value);
    render();
  }

  render();
  return { render };
}
