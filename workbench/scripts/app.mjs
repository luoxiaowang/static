import { formatLocalDate } from './core/date.mjs';
import { showToast } from './core/dom.mjs';
import { initCountdown } from './features/countdown.mjs';
import { initIdeas } from './features/ideas.mjs';
import { initSettings } from './features/settings.mjs';
import { initThoughts } from './features/thoughts.mjs';
import { initTodo } from './features/todo.mjs';
import { openDatabase } from './storage/db.mjs';

const modules = [];
const channel = 'BroadcastChannel' in window ? new BroadcastChannel('personal-workbench') : null;

function setTodaySummary() {
  const now = new Date();
  document.querySelector('#today-summary').textContent = `${formatLocalDate(now)} · ${new Intl.DateTimeFormat('zh-CN', { weekday: 'long' }).format(now)}`;
}

function initTabs() {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function activate(tab) {
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      const panel = document.querySelector(`#panel-${item.dataset.tab}`);
      panel.hidden = !active;
      panel.classList.toggle('is-active', active);
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      activate(tabs[next]);
      tabs[next].focus();
    });
  });
}

function notifyDataChanged() {
  channel?.postMessage({ type: 'data-changed', at: Date.now() });
  window.dispatchEvent(new CustomEvent('workbench:data-changed'));
}

async function refreshAll() {
  await Promise.all(modules.map((module) => module.render?.()));
}

async function start() {
  setTodaySummary();
  initTabs();
  await openDatabase();
  const settings = await initSettings({ refreshAll, notifyDataChanged });
  modules.push(settings);
  modules.push(initTodo({ notifyDataChanged }));
  modules.push(initIdeas({ notifyDataChanged }));
  modules.push(initThoughts({ notifyDataChanged }));
  modules.push(initCountdown({ notifyDataChanged, openSettings: settings.openDrawer }));
  window.addEventListener('workbench:data-changed', () => settings.refreshSummary());
  channel?.addEventListener('message', () => showToast('数据已在另一个工作台页面更新，请刷新页面查看', 'info', 5000));
}

start().catch((error) => {
  console.error(error);
  const fatal = document.querySelector('#fatal-error');
  fatal.hidden = false;
  fatal.textContent = `工作台启动失败：${error.message || '未知错误'}。请确认浏览器允许使用 IndexedDB，然后刷新重试。`;
  document.querySelector('.app-shell').hidden = true;
});
