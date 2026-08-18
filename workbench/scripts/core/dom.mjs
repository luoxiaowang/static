export function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  const { className, text, attrs = {}, children = [] } = options;
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== false && value !== null && value !== undefined) element.setAttribute(key, value === true ? '' : String(value));
  });
  children.filter(Boolean).forEach((child) => element.append(child));
  return element;
}

export function emptyState(message, icon = '○') {
  return createElement('div', {
    className: 'empty-state',
    children: [createElement('span', { className: 'empty-icon', text: icon }), createElement('span', { text: message })],
  });
}

export function showToast(message, type = 'info', duration = 2600) {
  const region = document.querySelector('#toast-region');
  const toast = createElement('div', { className: `toast is-${type}`, text: message, attrs: { role: 'status' } });
  region.append(toast);
  window.setTimeout(() => toast.remove(), duration);
}

export function confirmAction({ title = '请确认', message, confirmText = '', confirmButton = '确认' }) {
  const dialog = document.querySelector('#confirm-dialog');
  const phraseWrap = document.querySelector('#confirm-phrase-wrap');
  const phraseInput = document.querySelector('#confirm-phrase');
  document.querySelector('#confirm-title').textContent = title;
  document.querySelector('#confirm-message').textContent = message;
  document.querySelector('#confirm-ok').textContent = confirmButton;
  phraseWrap.hidden = !confirmText;
  phraseInput.value = '';
  return new Promise((resolve) => {
    const onClose = () => {
      dialog.removeEventListener('close', onClose);
      resolve(dialog.returnValue === 'confirm' && (!confirmText || phraseInput.value.trim() === confirmText));
    };
    dialog.addEventListener('close', onClose);
    dialog.showModal();
    if (confirmText) phraseInput.focus();
  });
}

export function showAlert(title, message) {
  const dialog = document.querySelector('#alert-dialog');
  document.querySelector('#alert-title').textContent = title;
  document.querySelector('#alert-message').textContent = message;
  if (!dialog.open) dialog.showModal();
}

export function openTextEditor({ title, value, maxLength = 2000 }) {
  const dialog = document.querySelector('#edit-text-dialog');
  const textarea = document.querySelector('#edit-text-value');
  document.querySelector('#edit-text-title').textContent = title;
  textarea.value = value;
  textarea.maxLength = maxLength;
  return new Promise((resolve) => {
    const onClose = () => {
      dialog.removeEventListener('close', onClose);
      resolve(dialog.returnValue === 'default' ? textarea.value.trim() : null);
    };
    dialog.addEventListener('close', onClose);
    dialog.showModal();
    textarea.focus();
  });
}

export function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function readJsonFile(file) {
  if (!file) throw new Error('没有选择备份文件');
  if (file.size > 20 * 1024 * 1024) throw new Error('备份文件超过 20MB，无法导入');
  try {
    return JSON.parse(await file.text());
  } catch {
    throw new Error('文件不是有效的 JSON 格式');
  }
}

export function bindSubmitShortcut(textarea, form) {
  textarea.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      event.preventDefault();
      form.requestSubmit();
    }
  });
}
