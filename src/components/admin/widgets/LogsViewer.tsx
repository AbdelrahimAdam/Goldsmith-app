import React from 'react';
import { useTranslation } from 'react-i18next';

// Define a type for the log data (if you plan on expanding this in the future)
interface Log {
  message: string;
  timestamp: Date;
}

const LogsViewer: React.FC = () => {
  const { t } = useTranslation();

  // Sample logs with timestamps for better data structure
  const logs: Log[] = [
    { message: 'System initialized.', timestamp: new Date() },
    { message: 'User admin logged in.', timestamp: new Date() },
    { message: 'Settings updated.', timestamp: new Date() },
    { message: 'Backup completed successfully.', timestamp: new Date() },
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-yellow-300 via-yellow-200 to-gray-200 dark:from-yellow-300 dark:to-gray-800 dark:bg-opacity-70 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {t('admin.logs.title', 'System Logs')}
      </h2>
      <ul className="space-y-4">
        {logs.map((log, index) => (
          <li
            key={index}
            className="px-6 py-3 rounded-lg bg-gray-50/90 dark:bg-gray-800/80 hover:bg-gray-100/90 dark:hover:bg-gray-700/80 transition-all ease-in-out"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-800 dark:text-gray-300">{log.message}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{log.timestamp.toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogsViewer;

