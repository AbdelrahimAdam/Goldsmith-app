// src/pages/CustomerCredit.tsx

import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { useTranslation } from 'react-i18next';

const CustomerCredit: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AdminLayout layout="mobile">
      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-yellow-100 to-gray-200 min-h-screen rounded-xl 
shadow-inner">
        <h1 className="text-2xl font-bold text-yellow-800 mb-4">
          {t('customerCredit.title')}
        </h1>
        <p className="text-gray-700 mb-6">
          {t('customerCredit.description')}
        </p>

        {/* Placeholder: Customer List */}
        <div className="bg-white rounded-lg p-4 shadow mb-6">
          <p className="text-gray-600 italic">{t('customerCredit.customerListPlaceholder')}</p>
        </div>

        {/* Placeholder: Credit Tracking */}
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-gray-600 italic">{t('customerCredit.creditTrackingPlaceholder')}</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CustomerCredit;

