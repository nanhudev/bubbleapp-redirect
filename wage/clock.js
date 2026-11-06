// The HTTPS JSON feeds used by NICT's official standard-time clock.
const endpoints = [
  'https://67495dde3b39c2991829589f0101ab7a035eecf5.nict.go.jp/cgi-bin/json',
  'https://08a08e3a6edef4ba7a0c055a42d8e1ba2597f2b5.nict.go.jp/cgi-bin/json',
];
const syncInterval = 15 * 60_000;
const maxSampleAge = 30 * 60_000;
const retryInterval = 60_000;

async function readServerTime(endpoint, nonce) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3500);
  const started = performance.now();

  try {
    const response = await fetch(endpoint + '?' + nonce, {
      cache: 'no-store',
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      signal: controller.signal,
    });
    const received = performance.now();
    if (!response.ok || Number(response.headers.get('age')) > 0) {
      throw new Error('Time response is unavailable or stale');
    }
    const { st } = await response.json();
    if (!Number.isFinite(st) || st < 1_700_000_000) {
      throw new Error('Invalid time response');
    }

    return {
      timestamp: st * 1000,
      midpoint: (started + received) / 2,
      wallOffset: Date.now() - performance.now(),
    };
  } finally {
    clearTimeout(timeout);
  }
}

export function createClock() {
  let reference;
  let pending;
  let lastAttempt = -Infinity;
  let preferredEndpoint = endpoints[0];
  let source = '正在连接官方授时';

  function sampleAge() {
    if (!reference) return Infinity;
    const monotonic = performance.now();
    // Some devices pause the monotonic clock during sleep. Wall time only detects that jump.
    if (Math.abs(Date.now() - monotonic - reference.wallOffset) > 2000) return Infinity;
    return monotonic - reference.midpoint;
  }

  function now() {
    const elapsed = sampleAge();
    if (elapsed > maxSampleAge) return null;

    // All clients use the same UTC-second boundaries, displayed in Beijing time.
    const second = Math.floor((reference.timestamp + elapsed) / 1000);
    return new Date(second * 1000);
  }

  async function calibrate() {
    const nonce = Math.random().toString(36).slice(2);
    const backup = endpoints.find(endpoint => endpoint !== preferredEndpoint);
    for (const endpoint of [preferredEndpoint, backup]) {
      const sample = await readServerTime(endpoint, nonce).catch(() => null);
      if (!sample) continue;
      reference = sample;
      preferredEndpoint = endpoint;
      source = '已同步 · NICT 官方授时';
      return;
    }
    source = now() ? '暂用上次官方校时' : '暂未连上官方授时';
  }

  return {
    now,
    get source() {
      if (source.startsWith('已同步') && !now()) return '等待重新校时';
      return source;
    },
    sync() {
      if (pending) return pending;
      const monotonic = performance.now();
      if (sampleAge() < syncInterval || monotonic - lastAttempt < retryInterval) {
        return Promise.resolve();
      }
      lastAttempt = monotonic;
      pending = calibrate().finally(() => { pending = undefined; });
      return pending;
    },
  };
}
