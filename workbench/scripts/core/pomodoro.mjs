const MINUTE_MS = 60 * 1000;
const SUPPORTED_DURATIONS = new Set([30, 60]);

export function createPomodoroState(durationMinutes = 30) {
  const safeDuration = SUPPORTED_DURATIONS.has(durationMinutes) ? durationMinutes : 30;
  return {
    durationMinutes: safeDuration,
    status: 'idle',
    targetAt: null,
    remainingMs: safeDuration * MINUTE_MS,
    notifiedAt: null,
  };
}

export function selectPomodoroDuration(state, durationMinutes) {
  if (!SUPPORTED_DURATIONS.has(durationMinutes)) throw new Error('番茄钟仅支持 30 分钟或 1 小时');
  return createPomodoroState(durationMinutes);
}

export function startPomodoro(state, now = Date.now()) {
  const remainingMs = state.status === 'paused' ? state.remainingMs : state.durationMinutes * MINUTE_MS;
  return { ...state, status: 'running', targetAt: now + remainingMs, remainingMs, notifiedAt: null };
}

export function getPomodoroRemaining(state, now = Date.now()) {
  if (state.status === 'running') return Math.max(0, Number(state.targetAt) - now);
  return Math.max(0, Number(state.remainingMs) || 0);
}

export function pausePomodoro(state, now = Date.now()) {
  if (state.status !== 'running') return state;
  return { ...state, status: 'paused', targetAt: null, remainingMs: getPomodoroRemaining(state, now) };
}

export function resumePomodoro(state, now = Date.now()) {
  if (state.status !== 'paused') return state;
  return { ...state, status: 'running', targetAt: now + state.remainingMs, notifiedAt: null };
}

export function resetPomodoro(state) {
  return createPomodoroState(state.durationMinutes);
}

export function isPomodoroFinished(state, now = Date.now()) {
  return state.status === 'running' && getPomodoroRemaining(state, now) === 0;
}
