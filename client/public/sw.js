const CACHE_NAME = 'osinachi-renewables-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/logo.png',
  '/assets/index.css',
  '/assets/index.js',
];

const API_CACHE_NAME = 'osinachi-api-v1';

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch(err => console.log('Service Worker: Cache failed', err))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME && cache !== API_CACHE_NAME) {
            console.log('Service Worker: Clearing old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip external resources (fonts, analytics, etc.)
  if (url.origin !== location.origin) {
    return;
  }

  // Handle API requests
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleApiRequest(request));
    return;
  }

  // Handle static assets
  if (request.method === 'GET') {
    event.respondWith(handleStaticRequest(request));
  }
});

// Handle API requests with network-first strategy
async function handleApiRequest(request) {
  const cache = await caches.open(API_CACHE_NAME);

  try {
    // Try network first
    const networkResponse = await fetch(request);

    // Cache successful responses (except for sensitive endpoints)
    if (networkResponse.ok && !request.url.includes('contact-submissions')) {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache', error);

    // Fallback to cache
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline response
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Network unavailable. Please try again when online.',
      }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// Handle static requests with cache-first strategy
async function handleStaticRequest(request) {
  const cache = await caches.open(CACHE_NAME);

  // Try cache first
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    // Fallback to network
    const networkResponse = await fetch(request);

    // Cache the response for future use
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Both cache and network failed', error);

    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/') || new Response('Offline', { status: 503 });
    }

    throw error;
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
