const CACHE_NAME = 'brewww-companion-research-v4';
const APP_SHELL = [
  './index.html',
  './data.js',
  './support.js',
  './manifest.webmanifest',
  './sorso-logo-stacked.png',
  './ds-base.css',
  './ds-motion.css',
  './ds-fonts.css',
  './ds-colors.css',
  './ds-spacing.css',
  './ds-typography.css',
  './ds-styles.css',
  './ds-bundle.js',
  './react.production.min.js',
  './react-dom.production.min.js',
  './babel.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }))
  );
});
