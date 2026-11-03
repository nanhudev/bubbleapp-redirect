const RELEASE = 'jinse-original-motion-2026-11-03';
const VERSION = 'original-motion-2026-11-03';
const BASE = new URL('./', self.location.href);
const FILES = ['index.html', 'design-v6.css', 'stage-v6.js', 'scene-v6.js',
  'cue-data.js', 'dramaturgy-v7.js', 'poetic-space-v7.js', 'instrument-performance-v8.js',
  'vendor/three.module.js', 'vendor/loaders/GLTFLoader.js', 'vendor/utils/BufferGeometryUtils.js',
  'assets/jinse-v6.glb', 'assets/landscape-v6.png', 'assets/dream-v6.png',
  'assets/poet-v6.png', 'assets/wing-v4.png', 'assets/memories-v4.png',
  'assets/fonts/MaShanZheng-report.woff2', 'assets/fonts/ZCOOLXiaoWei-report.woff2'];
self.addEventListener('install', event => event.waitUntil((async () => {
  const cache = await caches.open(RELEASE);
  await cache.addAll(FILES.map(name => new Request(new URL(name, BASE), {cache: 'reload'})));
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
