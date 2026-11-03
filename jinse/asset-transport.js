// Bounded byte-range downloads keep the original payload intact on slow links.
const jobs = [];
let active = 0;
function schedule(task) {
  return new Promise((resolve, reject) => {
    jobs.push({task, resolve, reject});
    pump();
  });
}
function pump() {
  while (active < 8 && jobs.length) {
    const job = jobs.shift();
    active++;
    Promise.resolve().then(job.task).then(job.resolve, job.reject).finally(() => {active--; pump();});
  }
}
const part = (url, start, end) => schedule(async () => {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, {headers: {Range: `bytes=${start}-${end}`}});
      if (!response.ok) throw new Error('资源下载失败');
      return {status: response.status, bytes: new Uint8Array(await response.arrayBuffer())};
    } catch (error) {
      if (attempt === 2) throw error;
      await new Promise(resolve => setTimeout(resolve, 300 * (attempt + 1)));
    }
  }
});
export async function downloadAsset(url, length) {
  const size = 131072;
  const first = await part(url, 0, Math.min(size, length) - 1);
  if (first.status === 200) {
    if (first.bytes.length !== length) throw new Error('资源未下载完整');
    return first.bytes.buffer;
  }
  if (first.bytes.length !== Math.min(size, length)) throw new Error('资源分段不完整');
  const output = new Uint8Array(length);
  output.set(first.bytes);
  await Promise.all(Array.from({length: Math.ceil(length / size) - 1}, async (_, index) => {
    const start = (index + 1) * size, end = Math.min(start + size, length) - 1;
    const result = await part(url, start, end);
    const bytes = result.status === 200 && result.bytes.length === length ? result.bytes.slice(start, end + 1) : result.bytes;
    if (bytes.length !== end - start + 1) throw new Error('资源分段不完整');
    output.set(bytes, start);
  }));
  return output.buffer;
}
