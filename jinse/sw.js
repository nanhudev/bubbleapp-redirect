const RELEASE = 'jinse-original-motion-2026-11-03-r2';
const VERSION = 'original-motion-2026-11-03-r2';
const BASE = new URL('./', self.location.href);
const FILES = ['index.html', 'design-v6.css', 'stage-v6.js', 'scene-v6.js',
  'cue-data.js', 'dramaturgy-v7.js', 'poetic-space-v7.js', 'instrument-performance-v8.js',
  'vendor/three.module.js', 'vendor/loaders/GLTFLoader.js', 'vendor/utils/BufferGeometryUtils.js',
  'assets/jinse-v6.glb.gz', 'assets/landscape-v6.webp', 'assets/dream-v6.webp',
  'assets/poet-v6.webp', 'assets/wing-v4.webp', 'assets/memories-v4.webp',
  'assets/fonts/MaShanZheng-report.woff2', 'assets/fonts/ZCOOLXiaoWei-report.woff2'];
self.addEventListener('install', event => event.waitUntil((async () => {
  const cache = await caches.open(RELEASE);
  await cache.addAll(FILES.map(name => {const url=new URL(name,BASE);if(!name.includes('/')&&(name.endsWith('.js')||name.endsWith('.css')))url.searchParams.set('v',VERSION);return new Request(url,{cache:name==='index.html'?'reload':'force-cache'})}));
  await self.skipWaiting();
})()));
self.addEventListener('activate', event => event.waitUntil((async () => {
  for (const key of await caches.keys()) {
    if (key.startsWith('jinse-original-motion-') && key !== RELEASE) await caches.delete(key);
  }
  await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== BASE.origin || !url.pathname.startsWith(BASE.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(RELEASE);
    const hit = await cache.match(event.request, {ignoreSearch: true});
    if (hit) return hit;
    try { return await fetch(event.request); }
    catch (error) {
      if (event.request.mode === 'navigate') {
        const entry = await cache.match(new URL('index.html', BASE));
        if (entry) return entry;
      }
      throw error;
    }
  })());
});
