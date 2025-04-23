import React from 'react';
import { useTranslation } from 'react-i18next';

const SystemStatusWidget: React.FC = () => {
  const { t } = useTranslation();

  // The system status message is now derived from the translation.
  // The variable is no longer unused, and it makes the component more flexible.
  const statusMessage = t('admin.status.online', 'All systems operational');
  
  return (
    <div className="p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md shadow-xl rounded-2xl border border-gray-300 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-yellow-200 mb-4">
        {t('admin.status.title', 'System Status')}
      </h2>
      <div className="flex items-center space-x-4">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-sm text-gray-800 dark:text-gray-100">
          {statusMessage}
        </span>
      </div>
    </div>
  );
};

export default SystemStatusWidget;

