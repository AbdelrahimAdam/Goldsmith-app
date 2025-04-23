import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SettingsCustomization: React.FC = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  // Change theme handler
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
    // Add logic to apply theme in the app (e.g., changing body class, using a CSS-in-JS solution, etc.)
  };

  // Change language handler
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // Logic for changing language in your app (i.e., updating i18next language setting)
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
        {t('settingsCustomization.title')}
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded shadow p-4 space-y-6">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {t('settingsCustomization.generalSettings')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Theme Settings */}
          <div className="bg-blue-100 dark:bg-blue-700 rounded shadow p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {t('settingsCustomization.theme')}
            </h3>
            <select
              value={theme}
              onChange={handleThemeChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 
dark:text-white"
            >
              <option value="light">{t('settingsCustomization.lightTheme')}</option>
              <option value="dark">{t('settingsCustomization.darkTheme')}</option>
            </select>
          </div>

          {/* Language Settings */}
          <div className="bg-green-100 dark:bg-green-700 rounded shadow p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {t('settingsCustomization.language')}
            </h3>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 
dark:text-white"
            >
              <option value="en">{t('settingsCustomization.english')}</option>
              <option value="ar">{t('settingsCustomization.arabic')}</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded shadow p-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            {t('settingsCustomization.accountSettings')}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{t('settingsCustomization.accountInfo')}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsCustomization;

