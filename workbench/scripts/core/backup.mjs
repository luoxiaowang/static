export const BACKUP_APP_ID = 'personal-workbench';
export const BACKUP_VERSION = 2;
export const DATA_STORES = ['todos', 'timers', 'ideas', 'thoughts', 'favorites', 'settings'];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export function createBackup(data, now = new Date()) {
  return {
    appId: BACKUP_APP_ID,
    version: BACKUP_VERSION,
    exportedAt: now.toISOString(),
    data: clone(data),
  };
}

export function validateBackup(input) {
  const backup = typeof input === 'string' ? JSON.parse(input) : input;
  if (!backup || typeof backup !== 'object') throw new Error('备份文件内容为空或格式不正确');
  if (backup.appId !== BACKUP_APP_ID) throw new Error('这不是个人工作台的备份文件');
  if (![1, BACKUP_VERSION].includes(backup.version)) throw new Error(`暂不支持版本 ${backup.version} 的备份文件`);
  if (!backup.data || typeof backup.data !== 'object') throw new Error('备份文件缺少 data 数据');

  const normalizedData = clone(backup.data);
  if (backup.version === 1 && !normalizedData.favorites) normalizedData.favorites = [];

  for (const store of DATA_STORES) {
    const records = normalizedData[store];
    if (!Array.isArray(records)) throw new Error(`${store} 数据格式不正确，应为数组`);
    if (records.some((record) => !record || typeof record.id !== 'string' || !record.id)) {
      throw new Error(`${store} 中存在缺少 id 的记录`);
    }
  }
  return normalizedData;
}

export function mergeRecords(current, incoming) {
  const map = new Map(current.map((record) => [record.id, record]));
  incoming.forEach((record) => map.set(record.id, record));
  return [...map.values()];
}
