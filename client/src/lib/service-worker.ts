// Service Worker registration and management

// Extend ServiceWorkerRegistration interface for background sync
declare global {
  interface ServiceWorkerRegistration {
    sync?: {
      register(tag: string): Promise<void>;
    };
  }
}

export const registerServiceWorker =
  async (): Promise<ServiceWorkerRegistration | null> => {
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none',
        });

        // Handle service worker updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                // New service worker is available
                showUpdateNotification();
              }
            });
          }
        });

        // Handle service worker messages
        navigator.serviceWorker.addEventListener('message', event => {
          if (event.data && event.data.type === 'CACHE_UPDATED') {
            console.log('Service Worker: Cache updated');
          }
        });

        console.log('Service Worker registered successfully');
        return registration;
      } catch (error) {
        console.error('Service Worker registration failed:', error);
        return null;
      }
    }
    return null;
  };

export const unregisterServiceWorker = async (): Promise<boolean> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        const result = await registration.unregister();
        console.log('Service Worker unregistered:', result);
        return result;
      }
    } catch (error) {
      console.error('Service Worker unregistration failed:', error);
    }
  }
  return false;
};

export const updateServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.update();
        console.log('Service Worker update requested');
      }
    } catch (error) {
      console.error('Service Worker update failed:', error);
    }
  }
};

// Check if the app is running offline
export const isOnline = (): boolean => {
  return navigator.onLine;
};

// Listen for online/offline events
export const setupNetworkListeners = (
  onOnline?: () => void,
  onOffline?: () => void
): (() => void) => {
  const handleOnline = () => {
    console.log('App is back online');
    onOnline?.();
  };

  const handleOffline = () => {
    console.log('App is offline');
    onOffline?.();
  };

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Return cleanup function
  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
};

// Store data for offline sync
export const storeOfflineData = async (data: any): Promise<void> => {
  if ('indexedDB' in window) {
    try {
      const db = await openOfflineDB();
      const tx = db.transaction(['offline-forms'], 'readwrite');
      const store = tx.objectStore('offline-forms');
      await store.add({ data, timestamp: Date.now() });

      // Register for background sync
      if (
        'serviceWorker' in navigator &&
        'sync' in window.ServiceWorkerRegistration.prototype
      ) {
        const registration = await navigator.serviceWorker.ready;
        if (registration.sync) {
          await registration.sync.register('contact-form-sync');
        }
      }
    } catch (error) {
      console.error('Failed to store offline data:', error);
    }
  }
};

// Open IndexedDB for offline storage
const openOfflineDB = (): Promise<IDBDatabase> => {
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
};

// Show update notification to user
const showUpdateNotification = (): void => {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: #1e40af;
      color: white;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      max-width: 300px;
    ">
      <div style="font-weight: 600; margin-bottom: 8px;">
        Update Available
      </div>
      <div style="font-size: 14px; margin-bottom: 12px;">
        A new version of the app is available. Refresh to update.
      </div>
      <button onclick="window.location.reload()" style="
        background: white;
        color: #1e40af;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
        margin-right: 8px;
      ">
        Refresh
      </button>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: transparent;
        color: white;
        border: 1px solid white;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
      ">
        Later
      </button>
    </div>
  `;

  document.body.appendChild(notification);

  // Auto-remove after 10 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 10000);
};
