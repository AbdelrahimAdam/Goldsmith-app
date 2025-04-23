// public/service-worker.js

// Import Workbox libraries as ES modules
import { precacheAndRoute } from 'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-precaching.prod.min.js';
import { registerRoute } from 'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-routing.prod.min.js';
import { NetworkFirst, StaleWhileRevalidate } from 'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-strategies.prod.min.js';

// Precache assets injected by Workbox (replaced at build time)
precacheAndRoute(self.__WB_MANIFEST || []);

// HTML navigation requests (e.g., React routes)
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'pages-cache',
  })
);

// Static assets like JS, CSS, HTML
registerRoute(
  ({ request }) =>
    ['script', 'style', 'document'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Optional: Handle 'install' event to pre-cache important files manually
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/logo192.png',
        '/logo512.png',
        '/manifest.json',
        '/favicon.ico',
        '/favicon-32x32.png',
        // Add other important files
      ]);
    })
  );
});

// Optional: Handle 'fetch' event to serve cached files
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Return cached response if available
      }
      return fetch(event.request); // Otherwise, fetch from the network
    })
  );
});

