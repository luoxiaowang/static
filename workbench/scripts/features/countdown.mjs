import { formatCountdown, formatDateTime, getPeriodRange, toLocalDateTimeInput } from '../core/date.mjs';
import { confirmAction, createElement, emptyState, showAlert, showToast } from '../core/dom.mjs';
import { deleteRecord, getSetting, listRecords, putRecord } from '../storage/db.mjs';

const periodTypes = [
  ['day', '本日倒计时'],
  ['week', '本周倒计时'],
  ['month', '本月倒计时'],
  ['year', '本年倒计时'],
  ['life', '人生倒计时'],
];

function playBeep() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(660, context.currentTime);
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.65);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.7);
  oscillator.addEventListener('ended', () => context.close(), { once: true });
}

export function initCountdown({ notifyDataChanged, openSettings }) {
  const list = document.querySelector('#timer-list');
  const dialog = document.querySelector('#timer-dialog');
  const form = document.querySelector('#timer-form');
  const periodContainer = document.querySelector('#period-countdowns');
  const notifying = new Set();
  let records = [];
  let periodCards = new Map();

  function setupPeriods() {
    periodContainer.replaceChildren();
    periodCards = new Map();
    periodTypes.forEach(([type, label]) => {
      const hourglass = createElement('div', { className: 'hourglass', attrs: { 'aria-hidden': 'true' }, children: [createElement('span', { className: 'sand-top' }), createElement('span', { className: 'sand-stream' }), createElement('span', { className: 'sand-bottom' })] });
      const value = createElement('strong', { text: '计算中…' });
      const detail = createElement('small', { text: '' });
      const card = createElement('article', { className: `hourglass-card${type === 'life' ? ' life' : ''}`, children: [hourglass, createElement('div', { className: 'hourglass-copy', children: [createElement('h3', { text: label }), value, detail] })] });
      periodContainer.append(card);
      periodCards.set(type, { card, hourglass, value, detail });
    });
  }

  async function updatePeriods() {
    const now = new Date();
    const birthday = await getSetting('birthday', '');
    periodTypes.forEach(([type]) => {
      const refs = periodCards.get(type);
      const range = getPeriodRange(type, now, birthday);
      if (!range) {
        refs.value.textContent = '请先设置生日';
        refs.detail.textContent = '点击这里完善人生倒计时';
        refs.hourglass.style.setProperty('--ratio', 0);
        refs.card.style.cursor = 'pointer';
        refs.card.onclick = openSettings;
        return;
      }
      refs.card.onclick = null;
      refs.card.style.cursor = '';
      const total = Math.max(1, range.end.getTime() - range.start.getTime());
      const elapsed = Math.min(1, Math.max(0, (now.getTime() - range.start.getTime()) / total));
      const remaining = Math.max(0, range.end.getTime() - now.getTime());
      refs.hourglass.style.setProperty('--ratio', elapsed.toFixed(4));
      refs.value.textContent = formatCountdown(remaining);
      refs.detail.textContent = type === 'life' && remaining === 0 ? '已到达设定的人生终点' : `已流逝 ${(elapsed * 100).toFixed(type === 'life' ? 4 : 1)}%`;
    });
  }

  async function render() {
    records = (await listRecords('timers')).sort((a, b) => a.targetAt.localeCompare(b.targetAt));
    document.querySelector('#timer-count').textContent = records.length ? `共 ${records.length} 个` : '';
    list.replaceChildren();
    if (!records.length) list.append(emptyState('还没有自定义倒计时', '⌛'));
    records.forEach((timer) => list.append(renderTimer(timer)));
    await tick();
  }

  function renderTimer(timer) {
    const expired = new Date(timer.targetAt) <= new Date();
    const value = createElement('div', { className: 'timer-value', text: expired ? '已到期' : formatCountdown(new Date(timer.targetAt) - new Date()), attrs: { 'data-timer-value': timer.id } });
    const edit = createElement('button', { text: '编辑', attrs: { type: 'button' } });
    edit.addEventListener('click', () => openForm(timer));
    const removeButton = createElement('button', { className: 'delete-action', text: '删除', attrs: { type: 'button' } });
    removeButton.addEventListener('click', () => remove(timer));
    return createElement('article', { className: `card timer-card${expired ? ' is-expired' : ''}`, attrs: { 'data-timer-id': timer.id }, children: [
      createElement('div', { className: 'timer-card-top', children: [createElement('h3', { text: timer.name }), createElement('div', { className: 'item-actions', children: [edit, removeButton] })] }),
      value,
      createElement('div', { className: 'list-meta', children: [createElement('span', { text: `目标：${formatDateTime(timer.targetAt)}` }), timer.notifiedAt ? createElement('span', { className: 'tag tag-info', text: '已提醒' }) : null] }),
    ] });
  }

  async function tick() {
    const now = new Date();
    records.forEach((timer) => {
      const value = document.querySelector(`[data-timer-value="${CSS.escape(timer.id)}"]`);
      const card = document.querySelector(`[data-timer-id="${CSS.escape(timer.id)}"]`);
      const remaining = new Date(timer.targetAt).getTime() - now.getTime();
      if (value) value.textContent = remaining <= 0 ? '已到期' : formatCountdown(remaining);
      if (remaining <= 0) card?.classList.add('is-expired');
      if (remaining <= 0 && !timer.notifiedAt && !notifying.has(timer.id)) notify(timer);
    });
    await updatePeriods();
  }

  async function notify(timer) {
    notifying.add(timer.id);
    try {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('倒计时提醒', { body: `“${timer.name}”时间到了` });
      }
      if (await getSetting('soundEnabled', true)) playBeep();
      showAlert('倒计时提醒', `“${timer.name}”时间到了。`);
      const updated = { ...timer, notifiedAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      await putRecord('timers', updated);
      records = records.map((item) => item.id === timer.id ? updated : item);
      notifyDataChanged();
    } catch (error) {
      showToast(`提醒记录保存失败：${error.message}`, 'error');
    } finally {
      notifying.delete(timer.id);
    }
  }

  function openForm(timer = null) {
    form.reset();
    document.querySelector('#timer-dialog-title').textContent = timer ? '编辑倒计时' : '新建倒计时';
    document.querySelector('#timer-id').value = timer?.id || '';
    document.querySelector('#timer-name').value = timer?.name || '';
    const defaultTarget = new Date(Date.now() + 60 * 60 * 1000);
    document.querySelector('#timer-target').value = toLocalDateTimeInput(timer?.targetAt || defaultTarget);
    dialog.showModal();
    document.querySelector('#timer-name').focus();
  }

  async function remove(timer) {
    if (!await confirmAction({ title: '删除倒计时', message: `确定删除“${timer.name}”吗？` })) return;
    await deleteRecord('timers', timer.id);
    notifyDataChanged();
    showToast('倒计时已删除', 'success');
    render();
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const id = document.querySelector('#timer-id').value || crypto.randomUUID();
    const existing = records.find((item) => item.id === id);
    const targetAt = new Date(document.querySelector('#timer-target').value).toISOString();
    const now = new Date().toISOString();
    await putRecord('timers', { id, name: document.querySelector('#timer-name').value.trim(), targetAt, notifiedAt: existing?.targetAt === targetAt ? existing.notifiedAt : null, createdAt: existing?.createdAt || now, updatedAt: now });
    dialog.close();
    notifyDataChanged();
    showToast(existing ? '倒计时已更新' : '倒计时已创建', 'success');
    render();
  });
  document.querySelector('#add-timer').addEventListener('click', () => openForm());
  window.addEventListener('workbench:settings-changed', updatePeriods);
  setupPeriods();
  render();
  const interval = window.setInterval(tick, 1000);
  return { render, destroy: () => window.clearInterval(interval) };
}
