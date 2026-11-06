const timeEndpoint = 'https://timeapi.io/api/time/current/zone?timeZone=UTC';

async function readServerTime(url, readTimestamp, method = 'GET') {
  const started = performance.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2200);
  try {
    const response = await fetch(url, {
      method,
      cache: 'no-store',
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      signal: controller.signal,
    });
    const received = performance.now();
    if (!response.ok || Number(response.headers.get('age')) > 0) return null;
    const timestamp = await readTimestamp(response);
    if (!Number.isFinite(timestamp)) return null;
    return { timestamp, midpoint: (started + received) / 2 };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export function createClock() {
  let reference;
  let pending;
  let source = '正在校时';

  async function calibrate() {
    const nonce = Math.random().toString(36).slice(2);
    let sample = await readServerTime(timeEndpoint + '&sample=' + nonce, async response => {
      const data = await response.json();
      if (data.timeZone !== 'UTC' || typeof data.dateTime !== 'string') return NaN;
      return Date.parse(data.dateTime.replace(/\.(\d{3})\d+$/, '.$1') + 'Z');
    });

    let label = '已同步';
    if (!sample) {
      // The site response's HTTP Date only resolves to whole seconds.
      sample = await readServerTime('./?clock=' + nonce, response => {
        const timestamp = Date.parse(response.headers.get('date'));
        return timestamp + 500;
      }, 'HEAD');
      label = '已同步 · 秒级';
    }

    if (sample) {
      reference = sample;
      source = label;
    } else {
      source = reference ? '暂用上次校时' : '暂用设备时间';
    }
  }

  return {
    now() {
      return new Date(reference
        ? reference.timestamp + performance.now() - reference.midpoint
        : Date.now());
    },
    get source() {
      return source;
    },
    sync() {
      pending ??= calibrate().finally(() => { pending = undefined; });
      return pending;
    },
  };
}
