// src/pages/RegulatoryCompliance.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import LayoutHeader from '../components/LayoutHeader';

const RegulatoryCompliance: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <LayoutHeader title={t('regulatoryCompliance.title')} />

      {/* Document upload section */}
      <section className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">{t('regulatoryCompliance.uploadDocs')}</h2>
        <div className="border-2 border-dashed border-gray-300 p-6 text-center text-sm text-gray-500 rounded-md">
          {t('regulatoryCompliance.uploadPlaceholder')}
        </div>
      </section>

      {/* Compliance checklist */}
      <section className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">{t('regulatoryCompliance.checklist')}</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>{t('regulatoryCompliance.kyc')}</li>
          <li>{t('regulatoryCompliance.tax')}</li>
          <li>{t('regulatoryCompliance.inspection')}</li>
        </ul>
      </section>
    </div>
  );
};

export default RegulatoryCompliance;

