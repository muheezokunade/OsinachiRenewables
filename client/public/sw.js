const CACHE_VERSION = 'v3';
const STATIC_CACHE = `osinachi-static-${CACHE_VERSION}`;
const ASSET_CACHE = `osinachi-assets-${CACHE_VERSION}`;
const API_CACHE_NAME = `osinachi-api-${CACHE_VERSION}`;

// Only stable, non-hashed assets. Do NOT include HTML or hashed /assets/* files.
const STATIC_ASSETS = ['/manifest.json', '/logo.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS))
  );
  // Activate the new SW immediately
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (![STATIC_CACHE, ASSET_CACHE, API_CACHE_NAME].includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  // Take control of uncontrolled clients ASAP
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin
  if (url.origin !== location.origin) return;

  // Network-first for navigation (HTML) to avoid stale index.html
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  // Runtime cache for versioned build assets
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(cacheFirst(ASSET_CACHE, request));
    return;
  }

  // API requests: network-first with fallback to cache
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(API_CACHE_NAME, request));
    return;
  }

  // Default: try network, then cache, then graceful fallback
  event.respondWith(handleDefault(request));
});

async function networkFirstNavigation(request) {
  try {
    return await fetch(request, { cache: 'no-store' });
  } catch (err) {
    void err;
    const cachedRoot = await caches.match('/');
    if (cachedRoot) return cachedRoot;
    return new Response('Service Unavailable', { status: 503 });
  }
}

async function handleDefault(request) {
  try {
    return await fetch(request);
  } catch (err) {
    void err;
    const cached = await caches.match(request);
    if (cached) return cached;
    // Avoid errors for icons/images when offline
    if (request.destination === 'image' || /favicon\.ico$/.test(request.url)) {
      return new Response('', { status: 204 });
    }
    return new Response('Service Unavailable', { status: 503 });
  }
}

async function cacheFirst(cacheName, request) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const resp = await fetch(request);
  if (resp && resp.ok) cache.put(request, resp.clone());
  return resp;
}

async function networkFirst(cacheName, request) {
  const cache = await caches.open(cacheName);
  try {
    const resp = await fetch(request, { cache: 'no-store' });
    if (resp && resp.ok) cache.put(request, resp.clone());
    return resp;
  } catch (err) {
    void err;
    const cached = await cache.match(request);
    if (cached) return cached;
    return new Response('Offline', { status: 503 });
  }
}

// Handle background sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForms());
  }
});

// Sync offline contact form submissions
async function syncContactForms() {
  const db = await openDB();
  const tx = db.transaction(['offline-forms'], 'readonly');
  const store = tx.objectStore('offline-forms');
  const forms = await store.getAll();

  for (const form of forms) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.data),
      });

      if (response.ok) {
        // Remove from offline storage
        const deleteTx = db.transaction(['offline-forms'], 'readwrite');
        const deleteStore = deleteTx.objectStore('offline-forms');
        await deleteStore.delete(form.id);

        console.log('Service Worker: Synced offline form submission');
      }
    } catch (error) {
      console.log('Service Worker: Failed to sync form', error);
    }
  }
}

// Simple IndexedDB wrapper for offline storage
async function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('OsinachiOfflineDB', 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('offline-forms')) {
        db.createObjectStore('offline-forms', {
          keyPath: 'id',
          autoIncrement: true,
        });
      }
    };
  });
}

// Push notification handling
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/logo.png',
      badge: '/logo.png',
      data: data.url || '/',
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();

  event.waitUntil(clients.openWindow(event.notification.data || '/'));
});
