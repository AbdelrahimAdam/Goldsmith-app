import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const SalesInvoicing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 space-y-6">
      <Helmet>
        <title>{t('salesInvoicing.title')}</title>
      </Helmet>

      <h1 className="text-2xl font-bold text-yellow-700">
        {t('salesInvoicing.title')}
      </h1>

      <div className="bg-white rounded shadow p-4 text-gray-700">
        <p>{t('salesInvoicing.description')}</p>

        {/* Placeholder for invoice list, new invoice form, filtering, etc. */}
        <div className="mt-6 border-t pt-4 text-sm text-gray-500">
          {t('common.placeholders.comingSoon')}
        </div>
      </div>
    </div>
  );
};

export default SalesInvoicing;

