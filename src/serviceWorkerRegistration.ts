export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Register the service worker with type 'module' for ES module support
      navigator.serviceWorker
        .register('/service-worker.js', { type: 'module' }) // Added { type: 'module' }
        .then(registration => {
          console.log('✅ Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('❌ Service Worker registration failed:', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

