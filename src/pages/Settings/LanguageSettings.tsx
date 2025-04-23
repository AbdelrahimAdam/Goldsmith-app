// src/pages/Settings/LanguageSettings.tsx

import React from 'react';

const LanguageSettings = () => {
  const changeLanguage = (lang: string) => {
    localStorage.setItem('lang', lang);
    window.location.reload(); // Reload to apply direction and translations
  };

  return (
    <div className="space-y-4 border rounded-lg p-6 shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold">🌐 Language Preferences</h2>
      <p className="text-sm text-gray-500">Choose your preferred language:</p>

      <div className="flex space-x-4">
        <button className="btn btn-outline" onClick={() => changeLanguage('en')}>English</button>
        <button className="btn btn-outline" onClick={() => changeLanguage('ar')}>العربية</button>
      </div>
    </div>
  );
};

export default LanguageSettings;

