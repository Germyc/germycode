const CACHE_NAME = 'germycode-v4';
const OFFLINE_URLS = [
  './',
  './index.html',
  './estilos.css?v=2.0.1',
  './app.js?v=2.0.1',
  './manifest.json',
  './assets/logo-horizontal-transparent.png',
  './assets/fonts/plus-jakarta-sans-latin.woff2'
];

// Instalación: descarga directa forzada sin pasar por la caché de disco HTTP
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        OFFLINE_URLS.map((url) => {
          return fetch(new Request(url, { cache: 'reload' }))
            .then((response) => {
              if (response && response.status === 200) {
                return cache.put(url, response);
              }
            })
            .catch((err) => {
              console.warn('Pre-cache omitido para:', url, err);
            });
        })
      );
    })
  );
});

// Activación: purga inmediata e incondicional de cualquier versión de caché anterior
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Intercepción de solicitudes de red
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. Navegación principal (HTML) -> Siempre pide versión fresca a la red (cache: no-cache)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(new Request(event.request, { cache: 'no-cache' }))
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
              cache.put('./index.html', clone.clone());
              cache.put('./', clone.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => {
            if (cached) return cached;
            return caches.match('./index.html').then((indexCached) => {
              if (indexCached) return indexCached;
              return caches.match('./');
            });
          });
        })
    );
    return;
  }

  // 2. Archivos estáticos locales (CSS, JS, imágenes, fuentes) -> Cache first con actualización en segundo plano
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, clone);
              });
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // 3. Peticiones externas estándar
  event.respondWith(fetch(event.request));
});
