import React from 'react';
import { useTranslation } from 'react-i18next';

const AuditLogs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
        {t('auditLogs.title')}
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded shadow p-4 space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          {t('auditLogs.description')}
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="border-b bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {t('auditLogs.timestamp')}
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {t('auditLogs.user')}
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {t('auditLogs.action')}
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {t('auditLogs.details')}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder Rows */}
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    {t('auditLogs.timestampPlaceholder')}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    {t('auditLogs.userPlaceholder')}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    {t('auditLogs.actionPlaceholder')}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                    {t('auditLogs.detailsPlaceholder')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;

