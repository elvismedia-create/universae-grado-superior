// v1.9 - simulacros configurables, separados de tests oficiales
const APP_VERSION = 'v1.9';
const BUILD_TIMESTAMP = '20261010-gs-simulacro-1';
const CACHE_NAME = `universae-gs-${APP_VERSION}-${BUILD_TIMESTAMP}`;
const OFFLINE_CACHE = 'universae-gs-offline-v1.2';
const PDF_CACHE = 'universae-gs-pdfs-v1';

// ARCHIVOS CRÍTICOS - DEBEN estar en caché siempre
const CRITICAL_ASSETS = [
  './',
  './index.html',
  './motor.js',
  './repaso-espaciado.js',
  './repaso-espaciado.css',
  './plan-diario.js',
  './plan-diario.css',
  './simulacros-gs.js',
  './simulacros-gs.css',
  './pdf-local-store.js',
  './tutor.js',
  './tutor.css',
  './vendor/pdfjs/pdf.mjs',
  './vendor/pdfjs/pdf.worker.mjs',
  './data-gs-bloque1.js',
  './data-config.js',
  './taller-gs.js',
  './taller-gs.css',
  './img/anexo-simbologia-p2.png',
  './img/anexo-simbologia-p6.png',
];

// ARCHIVOS DE DATOS - Importante cachearlos
const DATA_ASSETS = [
  './data-especial.js',
  './data-gs-bloque1.js',
];

const ASSETS_TO_CACHE = [
  ...CRITICAL_ASSETS,
  ...DATA_ASSETS,
  './manifest.json',
  './img/universae-shield-logo.png',
  './img/icon-192.png',
  './img/icon-512.png',
  './img/t3-domotica-u1-topologia-bus-linea.png',
  './img/t3-domotica-u1-topologia-estrella.png',
  './img/t3-domotica-u1-topologia-arbol.png',
  './img/t3-domotica-u1-topologia-malla.png',
  './img/t3-domotica-u1-topologia-anillo.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const assets = [...new Set(ASSETS_TO_CACHE)];
    for (let index = 0; index < assets.length; index += 12) {
      await Promise.all(assets.slice(index, index + 12).map(async url => {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) throw new Error(`No se pudo guardar ${url}: ${response.status}`);
        await cache.put(url, response);
      }));
    }
    await self.skipWaiting();
  })());
});

// ACTIVACIÓN v90.2: Limpieza y notificación
self.addEventListener('activate', (e) => {
  console.log('✨ ACTIVANDO Universae GS v1.9...');

  e.waitUntil(
    caches.keys()
      .then(keyList => {
        console.log('📋 Cachés encontrados:', keyList);
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME && key !== OFFLINE_CACHE && key !== PDF_CACHE) {
              console.log('🗑️ Eliminando caché antiguo:', key);
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Cachés limpios');
        return self.clients.claim();
      })
      .then(() => self.clients.matchAll())
      .then(clients => {
        console.log('📲 Service Worker actualizado - Clientes notificados:', clients.length);
        clients.forEach(client => {
          client.postMessage({
            type: 'APP_UPDATE_READY',
            version: CACHE_NAME
          });
        });
      })
      .catch(err => {
        console.error('❌ Error en activación:', err);
      })
  );
});

// FETCH v72.0: Network-first para código/datos, fallback offline a caché
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.pathname.startsWith('/api/')) return;
  const isHTML = e.request.url.includes('.html') || url.pathname.endsWith('/');
  const isAsset = /\.(js|mjs|css|json|woff|woff2|ttf)$/i.test(url.pathname);
  const isImage = /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(url.pathname);

  // HTML: Intentar red primero, fallback a caché
  if (isHTML) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then(res => {
          if (res.ok) {
            // Actualizar caché con nueva versión
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, res.clone()));
            return res;
          }
          // Si la red falla, intentar caché (ignoreSearch: ignorar ?v=timestamp)
          return caches.match(e.request, { ignoreSearch: true }) || res;
        })
        .catch(() => {
          // Sin internet: servir desde caché (ignoreSearch: ignorar ?v=timestamp)
          return caches.match(e.request, { ignoreSearch: true }).then(res => {
            if (res) {
              console.log('📱 Sirviendo desde caché (offline):', url.pathname);
              return res;
            }
            // Si ni caché, página offline minimalista
            console.warn('⚠️ Archivo no disponible offline:', url.pathname);
            return new Response(
              '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Universae Offline</title></head>' +
              '<body style="font-family:sans-serif;padding:20px;background:#f5f5f5;">' +
              '<h1>⚠️ Sin conexión a Internet</h1>' +
              '<p>Universae está funcionando en modo offline. Los datos disponibles están en caché.</p>' +
              '<p>Intenta recarga (Cmd+R) cuando recuperes conexión.</p>' +
              '</body></html>',
              { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 200 }
            );
          });
        })
    );
  }
  // JS/CSS/Data: Red primero para que los deploys de Vercel se vean al instante.
  else if (isAsset) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then(res => {
          if (res.ok) {
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(err => {
          console.warn('📱 Asset desde caché offline:', url.pathname, err.message);
          return caches.match(e.request, { ignoreSearch: true }).then(response => {
            if (response) return response;
            return new Response('console.log("Asset offline");', {
              headers: { 'Content-Type': 'application/javascript' },
              status: 200
            });
          });
        })
    );
  }
  // Imágenes: Cache first, fallback a placeholder
  else if (isImage) {
    e.respondWith(
      caches.match(e.request, { ignoreSearch: true })
        .then(response => response || fetch(e.request, { cache: 'no-store' }).then(res => {
          if (res.ok) {
            caches.open(CACHE_NAME).then(c => c.put(e.request, res.clone()));
          }
          return res;
        }))
        .catch(() => {
          // Placeholder transparent PNG si falla
          return new Response(
            new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0, 31, 21, 196, 137, 0, 0, 0, 10, 73, 68, 65, 84, 120, 156, 99, 0, 1, 0, 0, 5, 0, 1, 13, 10, 45, 180, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]),
            { headers: { 'Content-Type': 'image/png' } }
          );
        })
    );
  }
  // Los PDFs descargados por el usuario se conservan entre versiones de la app.
  else if (/\.pdf$/i.test(url.pathname)) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' }).catch(async () => {
        const cached = await caches.open(PDF_CACHE).then(cache => cache.match(e.request, { ignoreSearch: true }));
        return cached || new Response('PDF no guardado para uso sin conexion', { status: 503 });
      })
    );
  }
  // Otros: Network first
  else {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' }).catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
  }
});

// Mensajes: Comunicación bidireccional con la app
self.addEventListener('message', (event) => {
  const message = event.data || {};
  const type = typeof message === 'string' ? message : message.type;
  const data = typeof message === 'string' ? undefined : message.data;

  if (type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  else if (type === 'ONLINE_STATUS_CHANGED') {
    console.log('📡 Estado de conexión:', data.online ? 'ONLINE ✅' : 'OFFLINE ❌');
    // Notificar a todos los clientes sobre cambio de conexión
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'CONNECTION_STATUS',
          online: data.online
        });
      });
    });
  }
  else if (type === 'CACHE_STATUS_CHECK') {
    // Verificar qué está en caché
    caches.open(CACHE_NAME).then(cache => {
      cache.keys().then(requests => {
        event.ports[0].postMessage({
          type: 'CACHE_STATUS',
          count: requests.length,
          cached: requests.map(r => r.url)
        });
      });
    });
  }
});
