import { formatDateTime, groupByLocalDate } from '../core/date.mjs';
import { bindSubmitShortcut, confirmAction, createElement, emptyState, openTextEditor, showToast } from '../core/dom.mjs';
import { deleteRecord, listRecords, putRecord } from '../storage/db.mjs';

function dateHeading(date) {
  const [year, month, day] = date.split('-').map(Number);
  const value = new Date(year, month - 1, day);
  return `${date} · ${new Intl.DateTimeFormat('zh-CN', { weekday: 'long' }).format(value)}`;
}

export function initThoughts({ notifyDataChanged }) {
  const list = document.querySelector('#thought-list');
  const form = document.querySelector('#thought-form');
  const input = document.querySelector('#thought-input');
  let records = [];

  async function render() {
    records = await listRecords('thoughts');
    document.querySelector('#thought-count').textContent = records.length ? `已记录 ${records.length} 条` : '';
    list.replaceChildren();
    const groups = groupByLocalDate(records);
    if (!groups.length) {
      list.append(emptyState('还没有碎碎念，记录此刻的想法吧', '☁'));
      return;
    }
    groups.forEach((group) => {
      const section = createElement('section', { children: [createElement('h3', { className: 'thought-date', text: dateHeading(group.date) })] });
      const items = createElement('div', { className: 'list-stack' });
      group.items.forEach((thought) => items.append(renderItem(thought)));
      section.append(items);
      list.append(section);
    });
  }

  function renderItem(thought) {
    const edit = createElement('button', { text: '编辑', attrs: { type: 'button' } });
    edit.addEventListener('click', () => editThought(thought));
    const removeButton = createElement('button', { className: 'delete-action', text: '删除', attrs: { type: 'button' } });
    removeButton.addEventListener('click', () => remove(thought));
    return createElement('article', { className: 'list-item', children: [createElement('div', { className: 'list-item-main', children: [createElement('p', { className: 'list-note', text: thought.content }), createElement('div', { className: 'list-meta', children: [createElement('time', { text: formatDateTime(thought.createdAt), attrs: { datetime: thought.createdAt } }), thought.updatedAt !== thought.createdAt ? createElement('span', { text: '已编辑' }) : null] })] }), createElement('div', { className: 'item-actions', children: [edit, removeButton] })] });
  }

  async function editThought(thought) {
    const content = await openTextEditor({ title: '编辑碎碎念', value: thought.content, maxLength: 2000 });
    if (!content) return;
    await putRecord('thoughts', { ...thought, content, updatedAt: new Date().toISOString() });
    notifyDataChanged();
    showToast('碎碎念已更新', 'success');
    render();
  }

  async function remove(thought) {
    if (!await confirmAction({ title: '删除碎碎念', message: `确定删除这条记录吗？\n${thought.content}` })) return;
    await deleteRecord('thoughts', thought.id);
    notifyDataChanged();
    showToast('碎碎念已删除', 'success');
    render();
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const content = input.value.trim();
    if (!content) return;
    const now = new Date().toISOString();
    await putRecord('thoughts', { id: crypto.randomUUID(), content, createdAt: now, updatedAt: now });
    input.value = '';
    notifyDataChanged();
    showToast('想法已记录', 'success');
    render();
  });
  bindSubmitShortcut(input, form);
  render();
  return { render };
}
