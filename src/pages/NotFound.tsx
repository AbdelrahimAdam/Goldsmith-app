import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{t('pageNotFound')}</h1>
      <p className="mb-4">{t('sorryWeCouldntFind')}</p>
      <Link to="/" className="text-blue-500 hover:underline">
        {t('home')}
      </Link>
    </div>
  );
};

export default NotFound;

