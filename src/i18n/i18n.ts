// src/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: '/i18n/{{lng}}.json', // loads from public/i18n/en.json or ar.json
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;

