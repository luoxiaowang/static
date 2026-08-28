import test from 'node:test';
import assert from 'node:assert/strict';

import { selectTodos, sortTodos } from '../scripts/core/todo-sort.mjs';

const base = { completed: false, date: '2026-08-18', createdAt: '2026-08-18T08:00:00.000Z' };

test('Todo 未完成在前，组内按手动排序、创建时间兜底', () => {
  const records = [
    { ...base, id: 'old', sortOrder: 0 },
    { ...base, id: 'second', sortOrder: 1 },
    { ...base, id: 'newer-no-order', createdAt: '2026-08-18T09:00:00.000Z' },
    { ...base, id: 'older-no-order', createdAt: '2026-08-18T07:00:00.000Z' },
    { ...base, id: 'done', completed: true, sortOrder: 0 },
  ];

  assert.deepEqual(sortTodos(records).map((item) => item.id), ['old', 'second', 'older-no-order', 'newer-no-order', 'done']);
});

test('Todo 可以在当前日期和全部记录之间切换', () => {
  const records = [
    { ...base, id: 'today', sortOrder: 0 },
    { ...base, id: 'tomorrow', date: '2026-08-19', sortOrder: 1 },
  ];

  assert.deepEqual(selectTodos(records, { showAll: false, date: '2026-08-18' }).map((item) => item.id), ['today']);
  assert.deepEqual(selectTodos(records, { showAll: true, date: '2026-08-18' }).map((item) => item.id), ['today', 'tomorrow']);
});

test('今日视图展示时间范围内开始的未完成 Todo', () => {
  const records = [
    { ...base, id: 'started-today', sortOrder: 1 },
    { ...base, id: 'started-yesterday', date: '2026-08-17', sortOrder: 2 },
    { ...base, id: 'started-earlier', date: '2026-08-10', sortOrder: 0 },
    { ...base, id: 'started-tomorrow', date: '2026-08-19', sortOrder: 3 },
    { ...base, id: 'started-later', date: '2026-08-20', sortOrder: 4 },
  ];

  assert.deepEqual(
    selectTodos(records, { showAll: false, date: '2026-08-18' }).map((item) => item.id),
    ['started-earlier', 'started-today', 'started-yesterday'],
  );
});

test('今日视图仅展示当天完成的 Todo', () => {
  const records = [
    { ...base, id: 'done-today', completed: true },
    { ...base, id: 'done-yesterday', date: '2026-08-17', completed: true },
  ];

  assert.deepEqual(
    selectTodos(records, { showAll: false, date: '2026-08-18' }).map((item) => item.id),
    ['done-today'],
  );
});
