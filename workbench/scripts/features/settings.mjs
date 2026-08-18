import { createBackup, validateBackup } from '../core/backup.mjs';
import { confirmAction, downloadJson, readJsonFile, showToast } from '../core/dom.mjs';
import {
  clearAllData,
  getAllData,
  getSetting,
  mergeAllData,
  replaceAllData,
  setSetting,
} from '../storage/db.mjs';

const labels = { todos: 'Todo', timers: '倒计时', ideas: '灵感', thoughts: '碎碎念' };

function resolveTheme(theme) {
  if (theme === 'system') return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return theme;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = resolveTheme(theme);
}

function backupFilename(prefix = '个人工作台备份') {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('-') + '-' + [String(now.getHours()).padStart(2, '0'), String(now.getMinutes()).padStart(2, '0'), String(now.getSeconds()).padStart(2, '0')].join('');
  return `${prefix}-${stamp}.json`;
}

function notificationText() {
  if (!('Notification' in window)) return '当前浏览器不支持系统通知，将使用页面提醒';
  return {
    granted: '已允许，将同时使用浏览器通知',
    denied: '已拒绝，将使用页面提醒和提示音',
    default: '尚未授权，请在需要时主动申请',
  }[Notification.permission];
}

export async function initSettings({ refreshAll, notifyDataChanged }) {
  const drawer = document.querySelector('#settings-drawer');
  const backdrop = document.querySelector('#settings-backdrop');
  const themeSelect = document.querySelector('#theme-setting');
  const birthdayInput = document.querySelector('#birthday-setting');
  const soundInput = document.querySelector('#sound-setting');
  const importInput = document.querySelector('#import-file');
  const notificationStatus = document.querySelector('#notification-status');
  let importMode = 'merge';

  function openDrawer() {
    backdrop.hidden = false;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    refreshSummary();
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.hidden = true;
    document.body.style.overflow = '';
  }

  async function refreshSummary() {
    const data = await getAllData();
    const container = document.querySelector('#data-summary');
    container.replaceChildren();
    Object.entries(labels).forEach(([key, label]) => {
      const item = document.createElement('div');
      item.className = 'summary-item';
      const name = document.createElement('span');
      name.textContent = label;
      const count = document.createElement('strong');
      count.textContent = String(data[key].length);
      item.append(name, count);
      container.append(item);
    });
    const exportedAt = await getSetting('lastExportedAt', '');
    if (exportedAt) {
      const item = document.createElement('div');
      item.className = 'summary-item';
      const name = document.createElement('span');
      name.textContent = '最近导出';
      const value = document.createElement('strong');
      value.style.fontSize = '12px';
      value.textContent = new Date(exportedAt).toLocaleString('zh-CN', { hour12: false });
      item.append(name, value);
      container.append(item);
    }
  }

  async function exportCurrent(prefix) {
    const data = await getAllData();
    const backup = createBackup(data);
    downloadJson(backup, backupFilename(prefix));
    await setSetting('lastExportedAt', backup.exportedAt);
    await refreshSummary();
    return backup;
  }

  document.querySelector('#open-settings').addEventListener('click', openDrawer);
  document.querySelector('#close-settings').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
  });

  const storedTheme = await getSetting('theme', 'system');
  themeSelect.value = storedTheme;
  applyTheme(storedTheme);
  themeSelect.addEventListener('change', async () => {
    applyTheme(themeSelect.value);
    await setSetting('theme', themeSelect.value);
    showToast('主题设置已保存', 'success');
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (themeSelect.value === 'system') applyTheme('system');
  });

  const birthday = await getSetting('birthday', '');
  birthdayInput.value = birthday;
  document.querySelector('#save-birthday').addEventListener('click', async () => {
    if (!birthdayInput.value) {
      showToast('请先选择出生日期', 'error');
      birthdayInput.focus();
      return;
    }
    if (new Date(`${birthdayInput.value}T00:00:00`) > new Date()) {
      showToast('出生日期不能晚于今天', 'error');
      return;
    }
    await setSetting('birthday', birthdayInput.value);
    window.dispatchEvent(new CustomEvent('workbench:settings-changed'));
    showToast('出生日期已保存', 'success');
  });

  soundInput.checked = await getSetting('soundEnabled', true);
  soundInput.addEventListener('change', async () => {
    await setSetting('soundEnabled', soundInput.checked);
    showToast(soundInput.checked ? '到期提示音已开启' : '到期提示音已关闭', 'success');
  });

  notificationStatus.textContent = notificationText();
  const requestButton = document.querySelector('#request-notification');
  requestButton.disabled = !('Notification' in window) || Notification.permission === 'granted';
  requestButton.addEventListener('click', async () => {
    const permission = await Notification.requestPermission();
    notificationStatus.textContent = notificationText();
    requestButton.disabled = permission === 'granted';
    showToast(permission === 'granted' ? '浏览器通知已开启' : '未获得通知权限，将使用页面提醒', permission === 'granted' ? 'success' : 'info');
  });

  document.querySelector('#export-data').addEventListener('click', async () => {
    await exportCurrent();
    showToast('数据备份已导出', 'success');
  });
  document.querySelector('#merge-data').addEventListener('click', () => {
    importMode = 'merge';
    importInput.value = '';
    importInput.click();
  });
  document.querySelector('#replace-data').addEventListener('click', () => {
    importMode = 'replace';
    importInput.value = '';
    importInput.click();
  });
  importInput.addEventListener('change', async () => {
    try {
      const data = validateBackup(await readJsonFile(importInput.files[0]));
      const replacing = importMode === 'replace';
      const confirmed = await confirmAction({
        title: replacing ? '覆盖还原全部数据' : '合并导入数据',
        message: replacing ? '当前数据将被导入文件完全替换。操作前会自动下载一份当前数据备份。' : '相同 ID 的记录将使用导入文件中的内容，其余记录会追加。',
        confirmButton: replacing ? '备份并覆盖' : '确认合并',
      });
      if (!confirmed) return;
      if (replacing) {
        await exportCurrent('覆盖前自动备份');
        await replaceAllData(data);
      } else {
        await mergeAllData(data);
      }
      notifyDataChanged();
      await refreshAll();
      await refreshSummary();
      showToast(replacing ? '数据已覆盖还原' : '数据已合并导入', 'success');
    } catch (error) {
      showToast(error.message || '导入失败', 'error', 4200);
    }
  });

  document.querySelector('#clear-data').addEventListener('click', async () => {
    const confirmed = await confirmAction({ title: '清空全部数据', message: '此操作会删除所有 Todo、倒计时、灵感、碎碎念和设置，且无法撤销。', confirmText: '清空', confirmButton: '彻底清空' });
    if (!confirmed) {
      showToast('未输入正确确认文字，操作已取消');
      return;
    }
    await clearAllData();
    notifyDataChanged();
    location.reload();
  });

  if (!birthday) window.setTimeout(() => {
    openDrawer();
    birthdayInput.focus();
    showToast('首次使用，请先设置出生日期');
  }, 350);

  return { openDrawer, closeDrawer, refreshSummary };
}
