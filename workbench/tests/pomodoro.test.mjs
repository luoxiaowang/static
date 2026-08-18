import test from 'node:test';
import assert from 'node:assert/strict';

import {
  createPomodoroState,
  getPomodoroRemaining,
  isPomodoroFinished,
  pausePomodoro,
  resetPomodoro,
  resumePomodoro,
  selectPomodoroDuration,
  startPomodoro,
} from '../scripts/core/pomodoro.mjs';

test('番茄钟支持 30 分钟和 1 小时预设', () => {
  assert.equal(selectPomodoroDuration(createPomodoroState(), 30).remainingMs, 30 * 60 * 1000);
  assert.equal(selectPomodoroDuration(createPomodoroState(), 60).remainingMs, 60 * 60 * 1000);
  assert.throws(() => selectPomodoroDuration(createPomodoroState(), 45), /仅支持 30 分钟或 1 小时/);
});

test('开始后根据真实结束时间计算剩余时间', () => {
  const selected = selectPomodoroDuration(createPomodoroState(), 30);
  const running = startPomodoro(selected, 1_000);
  assert.equal(running.status, 'running');
  assert.equal(running.targetAt, 1_801_000);
  assert.equal(getPomodoroRemaining(running, 61_000), 29 * 60 * 1000);
});

test('暂停和继续不会计算暂停期间的时间', () => {
  const running = startPomodoro(selectPomodoroDuration(createPomodoroState(), 30), 1_000);
  const paused = pausePomodoro(running, 61_000);
  assert.equal(paused.status, 'paused');
  assert.equal(paused.remainingMs, 29 * 60 * 1000);
  const resumed = resumePomodoro(paused, 121_000);
  assert.equal(resumed.status, 'running');
  assert.equal(resumed.targetAt, 121_000 + 29 * 60 * 1000);
});

test('刷新恢复运行状态并能判断结束', () => {
  const persisted = { durationMinutes: 30, status: 'running', targetAt: 2_000, remainingMs: 30 * 60 * 1000, notifiedAt: null };
  assert.equal(getPomodoroRemaining(persisted, 1_500), 500);
  assert.equal(isPomodoroFinished(persisted, 1_999), false);
  assert.equal(isPomodoroFinished(persisted, 2_000), true);
});

test('重置回到所选预设的未开始状态', () => {
  const running = startPomodoro(selectPomodoroDuration(createPomodoroState(), 60), 1_000);
  assert.deepEqual(resetPomodoro(running), {
    durationMinutes: 60,
    status: 'idle',
    targetAt: null,
    remainingMs: 60 * 60 * 1000,
    notifiedAt: null,
  });
});
