// NUCLEAR UPDATE v67.6 - Timestamp único para forzar actualización
const BUILD_TIMESTAMP = '20260204073500';
const CACHE_NAME = `mastertest-v67.6-${BUILD_TIMESTAMP}`;

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './motor.js',
  './data.js',
  './manifest.json',
];

// INSTALACIÓN: FORZAR inmediatamente
self.addEventListener('install', (e) => {
  console.log('🔥🔥🔥 FORZANDO actualización NUCLEAR v67.6...');
  console.log('📦 Cache:', CACHE_NAME);
  
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => {
        console.log('✅ Assets cacheados');
        return self.skipWaiting();
      })
  );
});

// ACTIVACIÓN: ELIMINAR TODO
self.addEventListener('activate', (e) => {
  console.log('🗑️🗑️🗑️ LIMPIEZA NUCLEAR v67.6...');
  
  e.waitUntil(
    caches.keys()
      .then(keyList => {
        console.log('📋 Cachés:', keyList);
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME) {
              console.log('❌ Eliminando:', key);
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll())
      .then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'FORCE_RELOAD_NOW',
            version: 'v67.6'
          });
        });
      })
  );
});

// FETCH: Network first para HTML
self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('.html') || e.request.url.endsWith('/')) {
    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request)
        .then(response => response || fetch(e.request))
    );
  }
});

// Mensajes
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
