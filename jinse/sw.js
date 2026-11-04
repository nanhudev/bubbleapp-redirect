const RELEASE = 'jinse-original-motion-2026-11-04-r4';
const VERSION = 'original-motion-2026-11-04-r4';
const BASE = new URL('./', self.location.href);
const FILES=['index.html','design-v6.css','stage-bundle-v4.js','assets/jinse-v6.glb.gz','assets/landscape-v6-fast.webp','assets/dream-v6-fast.webp','assets/poet-v6-fast.webp','assets/wing-v4-fast.webp','assets/memories-v4-fast.webp','assets/fonts/MaShanZheng-report.woff2','assets/fonts/ZCOOLXiaoWei-report.woff2'];
self.addEventListener('install', event => event.waitUntil((async () => {
  const cache = await caches.open(RELEASE);
  const assets=await caches.open('jinse-complete-assets-v1');
  await Promise.all(FILES.map(async name=>{
    const url=new URL(name,BASE);if(!name.includes('/')&&(name.endsWith('.js')||name.endsWith('.css')))url.searchParams.set('v',VERSION);
    const completed=name.startsWith('assets/')?await assets.match(url.href):null;
    const response=completed||await fetch(new Request(url,{cache:name==='index.html'?'reload':'force-cache'}));
    if(!response.ok)throw new Error('Resource unavailable: '+name);await cache.put(url.href,response);
  }));
  await self.skipWaiting();
})()));
self.addEventListener('activate', event => event.waitUntil((async () => {
  for (const key of await caches.keys()) {
    if (key.startsWith('jinse-original-motion-') && key !== RELEASE) await caches.delete(key);
  }
  await self.clients.claim();
  // Upgrade already-open, cached presentation entries after the worker changes.
  for(const client of await self.clients.matchAll({type:'window'})){
    const url=new URL(client.url);
    if(url.origin===BASE.origin&&(url.pathname===BASE.pathname||url.pathname===BASE.pathname+'index.html')&&url.searchParams.get('v')!==VERSION){url.searchParams.set('v',VERSION);void client.navigate(url.href).catch(()=>{});}
  }
})()));
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== BASE.origin || !url.pathname.startsWith(BASE.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(RELEASE);
    // Prefer the current entry online so a repaired release is not hidden by cached HTML.
    if (event.request.mode === 'navigate') {
      try { const response = await fetch(event.request); if (response.ok) return response; } catch {}
    }
    const hit = await cache.match(event.request, {ignoreSearch: !url.searchParams.has('v')});
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
