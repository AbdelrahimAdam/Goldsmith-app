// src/pages/SupplierVendorRecords.tsx

import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { useTranslation } from 'react-i18next';

const SupplierVendorRecords: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AdminLayout layout="mobile">
      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-yellow-100 to-gray-200 min-h-screen rounded-xl shadow-md 
overflow-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-4">
          {t('supplierVendorRecords.title')}
        </h1>
        <p className="text-gray-700 mb-6">
          {t('supplierVendorRecords.description')}
        </p>

        {/* Placeholder for Supplier/Vendor List */}
        <div className="bg-white p-4 rounded shadow-inner">
          <p className="text-gray-500 text-sm">
            {t('supplierVendorRecords.placeholder')}
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SupplierVendorRecords;

