import React, { useEffect, useState } from 'react';

const OfflineBanner = () => {
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setOffline(false));
    window.addEventListener('offline', () => setOffline(true));
  }, []);

  return (
    offline ? (
      <div className="bg-red-500 text-white text-center py-2">
        ⚠️ You are offline. Changes will sync when connection is restored.
      </div>
    ) : null
  );
};

export default OfflineBanner;

