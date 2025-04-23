import './i18n'; // ✅ Initialize i18n before anything else
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom'; // ✅ React 17-compatible
import App from './App';
import './styles/tailwind.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // ✅ PWA support

// Determine layout direction based on saved language
const currentLang = localStorage.getItem('lang') || 'en';
const languageDirection = currentLang === 'ar' ? 'rtl' : 'ltr';

// Set <html> dir attribute for global styling & accessibility
document.documentElement.dir = languageDirection;

// Render the app
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

// Use Suspense to provide a fallback UI while loading
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  rootElement
);

// ❌ Disable service worker during development
serviceWorkerRegistration.unregister();

