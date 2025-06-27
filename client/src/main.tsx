import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  registerServiceWorker,
  setupNetworkListeners,
} from './lib/service-worker';

// Register service worker for caching and offline support
registerServiceWorker();

// Set up network status listeners
setupNetworkListeners(
  () => {
    // Online callback
    console.warn('App is back online');
  },
  () => {
    // Offline callback
    console.warn('App is offline');
  }
);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
