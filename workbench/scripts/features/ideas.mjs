import { formatDateTime } from '../core/date.mjs';
import { bindSubmitShortcut, confirmAction, createElement, emptyState, openTextEditor, showToast } from '../core/dom.mjs';
import { deleteRecord, listRecords, putRecord } from '../storage/db.mjs';

export function initIdeas({ notifyDataChanged }) {
  const list = document.querySelector('#idea-list');
  const form = document.querySelector('#idea-form');
  const input = document.querySelector('#idea-input');
  let records = [];
  let filter = 'all';

  async function render() {
    records = (await listRecords('ideas')).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    const visible = records.filter((item) => filter === 'all' || (filter === 'implemented' ? item.implemented : !item.implemented));
    list.replaceChildren();
    if (!visible.length) list.append(emptyState(filter === 'all' ? '还没有记录灵感' : '这个分类暂时为空', '✦'));
    visible.forEach((idea) => list.append(renderItem(idea)));
  }

  function renderItem(idea) {
    const check = createElement('button', { className: `check-button${idea.implemented ? ' is-checked' : ''}`, attrs: { type: 'button', 'aria-label': idea.implemented ? '标记为未实现' : '标记为已实现' } });
    check.addEventListener('click', () => toggle(idea));
    const edit = createElement('button', { text: '编辑', attrs: { type: 'button' } });
    edit.addEventListener('click', () => editIdea(idea));
    const removeButton = createElement('button', { className: 'delete-action', text: '删除', attrs: { type: 'button' } });
    removeButton.addEventListener('click', () => remove(idea));
    return createElement('article', { className: `list-item${idea.implemented ? ' is-completed' : ''}`, children: [check, createElement('div', { className: 'list-item-main', children: [createElement('h3', { className: 'list-title', text: idea.content }), createElement('div', { className: 'list-meta', children: [createElement('span', { className: `tag tag-${idea.implemented ? 'success' : 'info'}`, text: idea.implemented ? '已实现' : '未实现' }), createElement('span', { text: formatDateTime(idea.createdAt) })] })] }), createElement('div', { className: 'item-actions', children: [edit, removeButton] })] });
  }

  async function toggle(idea) {
    const implemented = !idea.implemented;
    await putRecord('ideas', { ...idea, implemented, implementedAt: implemented ? new Date().toISOString() : null, updatedAt: new Date().toISOString() });
    notifyDataChanged();
    render();
  }

  async function editIdea(idea) {
    const content = await openTextEditor({ title: '编辑创意灵感', value: idea.content, maxLength: 1000 });
    if (!content) return;
    await putRecord('ideas', { ...idea, content, updatedAt: new Date().toISOString() });
    notifyDataChanged();
    showToast('灵感已更新', 'success');
    render();
  }

  async function remove(idea) {
    if (!await confirmAction({ title: '删除灵感', message: `确定删除这条灵感吗？\n${idea.content}` })) return;
    await deleteRecord('ideas', idea.id);
    notifyDataChanged();
    showToast('灵感已删除', 'success');
    render();
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const content = input.value.trim();
    if (!content) return;
    const now = new Date().toISOString();
    await putRecord('ideas', { id: crypto.randomUUID(), content, implemented: false, implementedAt: null, createdAt: now, updatedAt: now });
    input.value = '';
    notifyDataChanged();
    showToast('灵感已记录', 'success');
    render();
  });
  bindSubmitShortcut(input, form);
  document.querySelector('#idea-filters').addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filter = button.dataset.filter;
    document.querySelectorAll('#idea-filters button').forEach((item) => item.classList.toggle('is-active', item === button));
    render();
  });
  render();
  return { render };
}
