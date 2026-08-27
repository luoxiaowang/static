import test from 'node:test';
import assert from 'node:assert/strict';

import { normalizePriority, selectTodos, sortTodos } from '../scripts/core/todo-sort.mjs';

const base = { completed: false, date: '2026-08-18', createdAt: '2026-08-18T08:00:00.000Z' };

test('旧 Todo 缺少优先级时按中优先级处理', () => {
  assert.equal(normalizePriority(), 'medium');
  assert.equal(normalizePriority('unknown'), 'medium');
});

test('Todo 按未完成、已激活、优先级、到期时间排序', () => {
  const records = [
    { ...base, id: 'low', priority: 'low', dueAt: '2026-08-18T11:00:00.000Z' },
    { ...base, id: 'medium', dueAt: '2026-08-18T10:00:00.000Z' },
    { ...base, id: 'high-none', priority: 'high', dueAt: '' },
    { ...base, id: 'high-late', priority: 'high', dueAt: '2026-08-20T11:00:00.000Z' },
    { ...base, id: 'high-near', priority: 'high', dueAt: '2026-08-19T11:00:00.000Z' },
    { ...base, id: 'active-low', priority: 'low', activated: true, dueAt: '2026-08-18T12:00:00.000Z' },
    { ...base, id: 'active-high', priority: 'high', activated: true, dueAt: '2026-08-18T13:00:00.000Z' },
    { ...base, id: 'done', priority: 'high', completed: true, activated: true, dueAt: '2026-08-18T09:00:00.000Z' },
  ];

  assert.deepEqual(
    sortTodos(records).map((item) => item.id),
    ['active-high', 'active-low', 'high-near', 'high-late', 'high-none', 'medium', 'low', 'done'],
  );
});

test('Todo 可以在当前日期和全部记录之间切换', () => {
  const records = [
    { ...base, id: 'today', priority: 'medium' },
    { ...base, id: 'tomorrow', date: '2026-08-19', priority: 'high' },
  ];

  assert.deepEqual(selectTodos(records, { showAll: false, date: '2026-08-18' }).map((item) => item.id), ['today']);
  assert.deepEqual(selectTodos(records, { showAll: true, date: '2026-08-18' }).map((item) => item.id), ['tomorrow', 'today']);
});

test('今日视图展示时间范围内开始的未完成 Todo', () => {
  const records = [
    { ...base, id: 'started-today', priority: 'medium' },
    { ...base, id: 'started-yesterday', date: '2026-08-17', priority: 'low' },
    { ...base, id: 'started-earlier', date: '2026-08-10', priority: 'high' },
    { ...base, id: 'started-tomorrow', date: '2026-08-19', priority: 'high' },
    { ...base, id: 'started-later', date: '2026-08-20', priority: 'medium' },
  ];

  assert.deepEqual(
    selectTodos(records, { showAll: false, date: '2026-08-18' }).map((item) => item.id),
    ['started-earlier', 'started-today', 'started-yesterday'],
  );
});

test('今日视图仅展示当天完成的 Todo', () => {
  const records = [
    { ...base, id: 'done-today', completed: true, priority: 'high' },
    { ...base, id: 'done-yesterday', date: '2026-08-17', completed: true, priority: 'high' },
  ];

  assert.deepEqual(
    selectTodos(records, { showAll: false, date: '2026-08-18' }).map((item) => item.id),
    ['done-today'],
  );
});
