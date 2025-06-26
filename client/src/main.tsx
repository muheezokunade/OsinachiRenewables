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
    console.log('App is back online');
  },
  () => {
    // Offline callback
    console.log('App is offline');
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
