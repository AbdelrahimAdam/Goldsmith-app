import React from 'react';
import { useTranslation } from 'react-i18next';

const SyncManager: React.FC = () => {
  const { t } = useTranslation();

  // Ensure that the handleSync function is properly typed
  const handleSync = (): void => {
    // Alert is triggered when sync starts, utilizing translation
    alert(t('admin.sync.started', 'Sync started.'));
  };

  return (
    <div className="p-6 bg-gradient-to-r from-yellow-300 via-yellow-200 to-gray-200 dark:from-yellow-300 dark:to-gray-800 dark:bg-opacity-70 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {t('admin.sync.title', 'Data Synchronization')}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {t('admin.sync.description', 'Ensure all systems are in sync.')}
      </p>
      <button
        onClick={handleSync}
        className="px-6 py-3 bg-yellow-200 text-gray-900 rounded-lg shadow hover:bg-yellow-300 transition"
      >
        {t('admin.sync.button', 'Start Sync')}
      </button>
    </div>
  );
};

export default SyncManager;

