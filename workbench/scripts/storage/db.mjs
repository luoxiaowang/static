import { DATA_STORES } from '../core/backup.mjs';

const DB_NAME = 'personal-workbench';
const DB_VERSION = 2;
let databasePromise;

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.addEventListener('success', () => resolve(request.result), { once: true });
    request.addEventListener('error', () => reject(request.error), { once: true });
  });
}

function transactionDone(transaction) {
  return new Promise((resolve, reject) => {
    transaction.addEventListener('complete', () => resolve(), { once: true });
    transaction.addEventListener('abort', () => reject(transaction.error || new Error('数据库事务已中止')), { once: true });
    transaction.addEventListener('error', () => reject(transaction.error || new Error('数据库事务失败')), { once: true });
  });
}

export function openDatabase() {
  if (!('indexedDB' in globalThis)) return Promise.reject(new Error('当前浏览器不支持 IndexedDB，无法安全保存数据'));
  if (databasePromise) return databasePromise;
  databasePromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.addEventListener('upgradeneeded', () => {
      const db = request.result;
      DATA_STORES.forEach((store) => {
        if (!db.objectStoreNames.contains(store)) db.createObjectStore(store, { keyPath: 'id' });
      });
    });
    request.addEventListener('success', () => resolve(request.result), { once: true });
    request.addEventListener('error', () => reject(request.error), { once: true });
    request.addEventListener('blocked', () => reject(new Error('数据库升级被其他已打开页面阻止，请关闭其他页面后重试')), { once: true });
  });
  return databasePromise;
}

export async function listRecords(storeName) {
  const db = await openDatabase();
  return requestToPromise(db.transaction(storeName, 'readonly').objectStore(storeName).getAll());
}

export async function putRecord(storeName, record) {
  const db = await openDatabase();
  const transaction = db.transaction(storeName, 'readwrite');
  transaction.objectStore(storeName).put(record);
  await transactionDone(transaction);
  return record;
}

export async function deleteRecord(storeName, id) {
  const db = await openDatabase();
  const transaction = db.transaction(storeName, 'readwrite');
  transaction.objectStore(storeName).delete(id);
  await transactionDone(transaction);
}

export async function getSetting(id, fallback = null) {
  const db = await openDatabase();
  const record = await requestToPromise(db.transaction('settings', 'readonly').objectStore('settings').get(id));
  return record ? record.value : fallback;
}

export function setSetting(id, value) {
  return putRecord('settings', { id, value, updatedAt: new Date().toISOString() });
}

export async function getAllData() {
  const entries = await Promise.all(DATA_STORES.map(async (store) => [store, await listRecords(store)]));
  return Object.fromEntries(entries);
}

async function writeAllData(data, { clear }) {
  const db = await openDatabase();
  const transaction = db.transaction(DATA_STORES, 'readwrite');
  DATA_STORES.forEach((storeName) => {
    const store = transaction.objectStore(storeName);
    if (clear) store.clear();
    data[storeName].forEach((record) => store.put(record));
  });
  await transactionDone(transaction);
}

export function replaceAllData(data) {
  return writeAllData(data, { clear: true });
}

export function mergeAllData(data) {
  return writeAllData(data, { clear: false });
}

export async function clearAllData() {
  const empty = Object.fromEntries(DATA_STORES.map((store) => [store, []]));
  await replaceAllData(empty);
}
