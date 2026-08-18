export function createDeleteConfirmation(windowMs = 5000) {
  let pendingKey = '';
  let expiresAt = 0;

  return {
    click(key, now = Date.now()) {
      if (pendingKey === key && now <= expiresAt) {
        pendingKey = '';
        expiresAt = 0;
        return true;
      }
      pendingKey = key;
      expiresAt = now + windowMs;
      return false;
    },
    cancel() {
      pendingKey = '';
      expiresAt = 0;
    },
    isPending(key, now = Date.now()) {
      if (now > expiresAt) {
        pendingKey = '';
        expiresAt = 0;
      }
      return pendingKey === key && Boolean(pendingKey);
    },
    get pendingKey() {
      return pendingKey;
    },
  };
}
