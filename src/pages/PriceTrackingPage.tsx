import React from 'react';
import { useTranslation } from 'react-i18next';
import AdminLayout from '../layouts/AdminLayout';

const PriceTrackingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AdminLayout layout="mobile">
      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-yellow-50 to-gray-100 min-h-screen rounded-xl 
shadow-inner">
        <h1 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-4">
          {t('priceTracking.title')}
        </h1>
        <p className="text-gray-700 mb-6">
          {t('priceTracking.description')}
        </p>

        {/* Placeholder for gold price charts */}
        <div className="w-full h-64 bg-white rounded-lg border border-dashed border-yellow-400 flex items-center 
justify-center text-gray-400">
          {t('priceTracking.chartPlaceholder')}
        </div>

        {/* Placeholder for alert settings */}
        <div className="mt-8 bg-white p-4 rounded-lg border border-yellow-300">
          <h2 className="text-lg font-semibold text-yellow-700 mb-2">
            {t('priceTracking.alertSettings')}
          </h2>
          <p className="text-gray-600">
            {t('priceTracking.alertPlaceholder')}
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PriceTrackingPage;

