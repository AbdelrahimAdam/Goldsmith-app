import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8 bg-white mx-auto max-w-3xl shadow-md rounded-lg mt-8">
      <h1 className="text-2xl font-bold mb-4">{t('termsOfService')}</h1>
      <p className="mb-2">{t('termsOfServiceContentLine1')}</p>
      <p className="mb-2">{t('termsOfServiceContentLine2')}</p>
      {/* Add additional terms as needed */}
    </div>
  );
};

export default TermsOfService;

