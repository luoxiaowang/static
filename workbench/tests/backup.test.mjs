import test from 'node:test';
import assert from 'node:assert/strict';

import {
  BACKUP_APP_ID,
  BACKUP_VERSION,
  createBackup,
  mergeRecords,
  validateBackup,
} from '../scripts/core/backup.mjs';

const emptyData = {
  todos: [],
  timers: [],
  ideas: [],
  thoughts: [],
  favorites: [],
  settings: [],
};

test('创建带应用标识和版本号的完整备份', () => {
  const backup = createBackup(emptyData, new Date('2026-08-18T08:00:00.000Z'));
  assert.equal(backup.appId, BACKUP_APP_ID);
  assert.equal(backup.version, BACKUP_VERSION);
  assert.equal(backup.exportedAt, '2026-08-18T08:00:00.000Z');
  assert.deepEqual(backup.data, emptyData);
});

test('拒绝错误应用标识', () => {
  assert.throws(
    () => validateBackup({ appId: 'other', version: 1, data: emptyData }),
    /不是个人工作台的备份文件/,
  );
});

test('兼容缺少收藏夹的第一版备份', () => {
  const legacyData = { ...emptyData };
  delete legacyData.favorites;
  const data = validateBackup({ appId: BACKUP_APP_ID, version: 1, data: legacyData });
  assert.deepEqual(data.favorites, []);
});

test('拒绝不是数组的数据集合', () => {
  assert.throws(
    () => validateBackup({ appId: BACKUP_APP_ID, version: 1, data: { ...emptyData, todos: {} } }),
    /todos 数据格式不正确/,
  );
});

test('拒绝缺少 ID 的业务记录', () => {
  assert.throws(
    () => validateBackup({ appId: BACKUP_APP_ID, version: 1, data: { ...emptyData, ideas: [{ content: '灵感' }] } }),
    /ideas 中存在缺少 id 的记录/,
  );
});

test('合并时相同 ID 使用导入记录并追加新记录', () => {
  assert.deepEqual(
    mergeRecords([{ id: '1', title: '旧' }], [{ id: '1', title: '新' }, { id: '2', title: '追加' }]),
    [{ id: '1', title: '新' }, { id: '2', title: '追加' }],
  );
});
