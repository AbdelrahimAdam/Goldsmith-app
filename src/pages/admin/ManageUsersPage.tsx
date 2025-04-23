import React from 'react';
import { useTranslation } from 'react-i18next';

const ManageUsersPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-yellow-400">{t('admin.manageUsers')}</h1>
      <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg text-gray-300">
        <p>{t('admin.manageUsersDescription')}</p>
        {/* Table or user management component will go here */}
      </div>
    </div>
  );
};

export default ManageUsersPage;

