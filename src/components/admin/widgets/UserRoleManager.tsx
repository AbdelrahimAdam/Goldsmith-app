import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const UserRoleManager: React.FC = () => {
  const { t } = useTranslation();
  const [roles, setRoles] = useState([
    { user: 'Alice', role: 'Admin' },
    { user: 'Bob', role: 'Viewer' },
  ]);

  return (
    <div className="p-8 bg-gradient-to-r from-yellow-300 via-yellow-200 to-gray-200 dark:from-yellow-300 dark:to-gray-800 dark:bg-opacity-70 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {t('admin.roles.title', 'User Roles')}
      </h2>
      <ul className="space-y-4">
        {roles.map((r, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-4 bg-gray-50/90 dark:bg-gray-800/90 rounded-lg shadow-md hover:scale-105 transition-transform ease-in-out"
          >
            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{r.user}</span>
            <span className="text-sm text-yellow-500 dark:text-yellow-400">{r.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRoleManager;

