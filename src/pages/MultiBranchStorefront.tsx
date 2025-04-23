import React from 'react';
import { useTranslation } from 'react-i18next';

const MultiBranchStorefront: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
        {t('multiBranch.title')}
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded shadow p-4 space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          {t('multiBranch.description')}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-dashed rounded p-4 text-center text-gray-500 dark:text-gray-400">
            {t('multiBranch.placeholderBranchList')}
          </div>
          <div className="border border-dashed rounded p-4 text-center text-gray-500 dark:text-gray-400">
            {t('multiBranch.placeholderStorefrontSettings')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiBranchStorefront;

