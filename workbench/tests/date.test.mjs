import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getCountdownParts,
  getPeriodRange,
  getTodoStatus,
  groupByLocalDate,
} from '../scripts/core/date.mjs';

test('已完成 Todo 始终返回 completed', () => {
  assert.equal(getTodoStatus({ completed: true }, new Date('2026-08-18T10:00:00')), 'completed');
});

test('超过截止时间的未完成 Todo 返回 overdue', () => {
  assert.equal(
    getTodoStatus({ completed: false, dueAt: '2026-08-18T09:00:00' }, new Date('2026-08-18T10:00:00')),
    'overdue',
  );
});

test('24 小时内到期的 Todo 返回 due-soon', () => {
  assert.equal(
    getTodoStatus({ completed: false, dueAt: '2026-08-19T09:59:59' }, new Date('2026-08-18T10:00:00')),
    'due-soon',
  );
});

test('未进入 24 小时且无截止时间的 Todo 返回 active', () => {
  const now = new Date('2026-08-18T10:00:00');
  assert.equal(getTodoStatus({ completed: false, dueAt: '2026-08-20T10:00:00' }, now), 'active');
  assert.equal(getTodoStatus({ completed: false, dueAt: '' }, now), 'active');
});

test('本周从周一零点开始并在周五二十四点结束', () => {
  const { start, end, ended } = getPeriodRange('week', new Date('2026-08-19T12:30:00'));
  assert.equal(start.getDay(), 1);
  assert.equal(start.getHours(), 0);
  assert.equal(end.getDay(), 6);
  assert.equal(end.getHours(), 0);
  assert.equal(end.getDate() - start.getDate(), 5);
  assert.equal(ended, false);
});

test('周末显示工作周已结束', () => {
  const { start, end, ended } = getPeriodRange('week', new Date('2026-08-23T10:00:00'));
  assert.equal(start.getDay(), 1);
  assert.equal(end.getDay(), 6);
  assert.equal(ended, true);
});

test('人生倒计时从生日开始到 85 岁生日结束', () => {
  const { start, end } = getPeriodRange('life', new Date('2026-08-18T12:00:00'), '1990-03-12');
  assert.equal(start.getFullYear(), 1990);
  assert.equal(start.getMonth(), 2);
  assert.equal(start.getDate(), 12);
  assert.equal(end.getFullYear(), 2075);
});

test('剩余时间不会产生负数', () => {
  assert.deepEqual(getCountdownParts(-1000), { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });
});

test('碎碎念按本地日期分组且组内倒序', () => {
  const groups = groupByLocalDate([
    { id: 'a', createdAt: '2026-08-17T10:00:00' },
    { id: 'b', createdAt: '2026-08-18T09:00:00' },
    { id: 'c', createdAt: '2026-08-18T11:00:00' },
  ]);
  assert.deepEqual(groups.map((group) => group.date), ['2026-08-18', '2026-08-17']);
  assert.deepEqual(groups[0].items.map((item) => item.id), ['c', 'b']);
});
