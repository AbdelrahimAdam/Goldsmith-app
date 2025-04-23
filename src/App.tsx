import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import i18n from './i18n';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    // Set the initial language direction
    handleLanguageChange(i18n.language);

    // Listen for changes in language and update direction accordingly
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange); // Cleanup the event listener
    };
  }, []);

  return (
    <Router>
      <div className={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/not-found" element={<NotFound />} />

            {/* Protected App Routes */}
            <Route path="/*" element={<AppRoutes />} />

            {/* 404 Not Found Route */}
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;

