import React from 'react';
import { useTranslation } from 'react-i18next';
import AdminLayout from '../layouts/AdminLayout';

const ContactsManagement: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AdminLayout layout="mobile">
      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-yellow-100 to-gray-100 min-h-screen rounded-xl 
shadow-inner">
        <h1 className="text-2xl font-bold text-yellow-800 mb-4">
          {t('contacts.title')}
        </h1>
        <p className="text-gray-700">{t('contacts.description')}</p>

        {/* Placeholder content */}
        <div className="mt-6 p-4 border border-dashed border-yellow-500 rounded-lg text-center text-gray-500">
          {t('contacts.placeholder')}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ContactsManagement;

