import React from 'react';
import { useTranslation } from 'react-i18next';

const users = [
  { id: 1, name: 'Alice Johnson', role: 'Admin' },
  { id: 2, name: 'Mohammed Ali', role: 'Editor' },
  { id: 3, name: 'Chen Wei', role: 'Viewer' },
];

const UserList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-yellow-200 mb-4">
        {t('security.userList.title', 'User Management')}
      </h2>
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-sm text-gray-300">
            <th className="px-4">{t('security.userList.name', 'Name')}</th>
            <th className="px-4">{t('security.userList.role', 'Role')}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="bg-gray-100/80 dark:bg-gray-700/50 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition rounded"
            >
              <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{user.name}</td>
              <td className="px-4 py-2 text-gray-600 dark:text-gray-300">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

