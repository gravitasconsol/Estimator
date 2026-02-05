/**
 * Service Worker for Construction Estimator Pro PWA
 * Provides offline functionality for Enterprise subscribers
 * Price updates: Weekly (every 7 days)
 */

const CACHE_NAME = "estimator-pro-v1";
const PRICE_CACHE_NAME = "estimator-prices-v1";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-192x192.png",
  "/icon-512x512.png",
];

// Price update interval (7 days in milliseconds)
const PRICE_UPDATE_INTERVAL = 7 * 24 * 60 * 60 * 1000;

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("[SW] Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Caching static assets");
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== PRICE_CACHE_NAME)
          .map((name) => {
            console.log("[SW] Deleting old cache:", name);
            return caches.delete(name);
          })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache when offline
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") return;

  // Skip chrome-extension requests
  if (url.protocol === "chrome-extension:") return;

  // API requests - network first, then cache
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful API responses
          if (response.ok) {
            const clone = response.clone();
            caches.open(PRICE_CACHE_NAME).then((cache) => {
              cache.put(request, clone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return cached response if offline
          return caches.match(request).then((cached) => {
            if (cached) {
              console.log("[SW] Serving cached API response");
              return cached;
            }
            // Return offline fallback for prices
            if (url.pathname.includes("/api/prices")) {
              return new Response(
                JSON.stringify({
                  offline: true,
                  message: "Using cached prices. Last updated: " + getLastPriceUpdate(),
                  prices: null,
                }),
                {
                  headers: { "Content-Type": "application/json" },
                }
              );
            }
            throw new Error("Network error and no cache available");
          });
        })
    );
    return;
  }

  // Static assets - cache first, then network
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        // Return cached and update in background
        fetch(request)
          .then((response) => {
            if (response.ok) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, response);
              });
            }
          })
          .catch(() => {});
        return cached;
      }

      // Not in cache, fetch from network
      return fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clone);
            });
          }
          return response;
        })
        .catch((error) => {
          console.error("[SW] Fetch failed:", error);
          // Return offline page for navigation requests
          if (request.mode === "navigate") {
            return caches.match("/index.html");
          }
          throw error;
        });
    })
  );
});

// Background sync for price updates
self.addEventListener("sync", (event) => {
  if (event.tag === "price-update") {
    console.log("[SW] Background sync: price update");
    event.waitUntil(updatePrices());
  }
});

// Periodic background sync (if supported)
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "weekly-price-update") {
    console.log("[SW] Periodic sync: weekly price update");
    event.waitUntil(updatePrices());
  }
});

// Push notifications for price updates
self.addEventListener("push", (event) => {
  const data = event.data?.json() || {};
  
  if (data.type === "price-update") {
    event.waitUntil(
      self.registration.showNotification("Price Update Available", {
        body: "New construction material prices are available. Tap to update.",
        icon: "/icon-192x192.png",
        badge: "/icon-72x72.png",
        tag: "price-update",
        requireInteraction: true,
        actions: [
          {
            action: "update",
            title: "Update Now",
          },
          {
            action: "dismiss",
            title: "Later",
          },
        ],
      })
    );
  }
});

// Notification click handler
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "update") {
    event.waitUntil(
      updatePrices().then(() => {
        return self.clients.openWindow("/dashboard?price-update=success");
      })
    );
  } else {
    event.waitUntil(self.clients.openWindow("/"));
  }
});

// Message handler from main app
self.addEventListener("message", (event) => {
  const { type, data } = event.data;

  switch (type) {
    case "CHECK_PRICE_UPDATE":
      checkPriceUpdate().then((needsUpdate) => {
        event.ports[0]?.postMessage({ needsUpdate });
      });
      break;

    case "FORCE_PRICE_UPDATE":
      updatePrices().then((success) => {
        event.ports[0]?.postMessage({ success });
      });
      break;

    case "GET_CACHED_PRICES":
      getCachedPrices().then((prices) => {
        event.ports[0]?.postMessage({ prices });
      });
      break;

    case "CACHE_PRICES":
      cachePrices(data.prices).then(() => {
        event.ports[0]?.postMessage({ success: true });
      });
      break;
  }
});

// Helper functions
async function updatePrices() {
  try {
    console.log("[SW] Fetching latest prices...");
    const response = await fetch("/api/prices/latest");
    if (response.ok) {
      const prices = await response.json();
      await cachePrices(prices);
      await setLastPriceUpdate(Date.now());
      console.log("[SW] Prices updated successfully");
      return true;
    }
    return false;
  } catch (error) {
    console.error("[SW] Price update failed:", error);
    return false;
  }
}

async function cachePrices(prices) {
  const cache = await caches.open(PRICE_CACHE_NAME);
  const response = new Response(JSON.stringify(prices), {
    headers: {
      "Content-Type": "application/json",
      "X-Cache-Time": Date.now().toString(),
    },
  });
  await cache.put("/api/prices/cached", response);
}

async function getCachedPrices() {
  const cache = await caches.open(PRICE_CACHE_NAME);
  const response = await cache.match("/api/prices/cached");
  if (response) {
    return response.json();
  }
  return null;
}

async function checkPriceUpdate() {
  const lastUpdate = await getLastPriceUpdate();
  if (!lastUpdate) return true;
  return Date.now() - lastUpdate > PRICE_UPDATE_INTERVAL;
}

async function getLastPriceUpdate() {
  const cache = await caches.open(PRICE_CACHE_NAME);
  const response = await cache.match("/meta/last-update");
  if (response) {
    const text = await response.text();
    return parseInt(text, 10);
  }
  return null;
}

async function setLastPriceUpdate(timestamp) {
  const cache = await caches.open(PRICE_CACHE_NAME);
  const response = new Response(timestamp.toString());
  await cache.put("/meta/last-update", response);
}

console.log("[SW] Service Worker loaded");
