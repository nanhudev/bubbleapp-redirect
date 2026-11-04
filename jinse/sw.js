self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));self.addEventListener('activate',e=>e.waitUntil((async()=>{await self.clients.claim();await self.registration.unregister();})()));
