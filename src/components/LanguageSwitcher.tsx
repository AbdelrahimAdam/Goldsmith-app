import React from 'react';  // Import React for JSX syntax
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = (): JSX.Element => {  // Explicit return type added here
  const { i18n } = useTranslation();

  const toggleLanguage = (): void => {  // Explicit return type added here
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm px-4 py-1.5 rounded-md font-medium transition-colors duration-200
      bg-yellow-300 text-gray-800 hover:bg-gray-200 border border-gray-300 shadow-sm"
    >
      {i18n.language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;

