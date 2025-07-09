importScripts("/serviceWorker.bundle.js");

// is preview
if (
  self.location.hostname.includes("preview-") &&
  self.location.hostname != "develop.freeschema.com" &&
  self.location.hostname != "localhost"
) {
  (() => {
    const CACHE_NAME = "pwa-cache-v1.5";
    const ASSETS = [
      "/",
      "/index.html",
      "/favicon.ico",
      "/icons/icon-192x192.png",
      "/icons/icon-512x512.png",
    ];

    const MAX_AGE = 1 * 24 * 60 * 60 * 1000; // 1 day in milliseconds

    // Install Service Worker & Cache Essential Files
    self.addEventListener("install", (event) => {
      event.waitUntil(
        caches.open(CACHE_NAME)
        .then(async (cache) => {
          for (const asset of ASSETS) {
            try {
              await cache.add(asset);
            } catch (error) {
              console.warn(`Failed to cache: ${asset}`, error);
            }
          }
        }).then(() => {
          self.skipWaiting(); // Only skip waiting once all assets are cached
        })
      );
      // self.skipWaiting();
    });

    // Activate & Cleanup Old Caches
    self.addEventListener("activate", (event) => {
      event.waitUntil(
        caches
          .keys()
          .then((keys) =>
            Promise.all(
              keys.map((key) =>
                key !== CACHE_NAME ? caches.delete(key) : null
              )
            )
          )
          .then(() => {
            self.clients.claim(); // Claim control over the client
          })
      );
      // self.clients.claim();
    });

    // Fetch Requests with Live Update Fallback
    self.addEventListener("fetch", (event) => {
      if (event.request.method !== "GET") return; // Ignore non-GET requests (e.g., POST, PUT, DELETE)

      event.respondWith(
        // First try to fetch live data
        fetch(event.request)
          .then((networkResponse) => {
            // If successful, update the cache with live data
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          })
          .catch(() => {
            // If live data fails (offline or other issues), fallback to cache
            return caches.match(event.request).then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse; // Return cached response if available
              }
              // If no cached response, return an error response
              return Response.error();
            });
          })
      );
    });

    // Notify Clients to Refresh When New SW is Available
    self.addEventListener("message", (event) => {
      if (event.data === "skipWaiting") {
        self.skipWaiting();
      }
    });

    // Push Notifications
    self.addEventListener("push", (event) => {
      const data = event.data?.json() || {
        title: "New Notification",
        body: "You have a new message!",
      };
      event.waitUntil(
        self.registration.showNotification(data.title, {
          body: data.body,
          icon: "/icons/icon-192x192.png",
        })
      );
    });
  })();
}
