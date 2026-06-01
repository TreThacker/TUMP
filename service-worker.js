// <------------------------------------------------
      THE ULTIMATE MEAL PLANNER
      FILE: service-worker.js
      VERSION: 2.00 Final
      CREDITS: Tre Thacker ~ 2026
      DEDICATION: ~~for my AMAZING wife, April, and my AWESOME mom, Sandii!~~

      SERVICE WORKER CHANGELOG:
			VERSION 2.00 - Tablet Compatibility			
      VERSION 1.00 Final - Initial service worker foundation created.
   -------------------------------------------------> //

const CACHE_NAME = "tump-cache-v2.00";

const APP_SHELL_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./image/tump-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL_FILES);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }

          return null;
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request);
    })
  );
});