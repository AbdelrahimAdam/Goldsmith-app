import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthForm from '../components/AuthForm';
import logo from '../assets/Goldsmith_System_Logo.png';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleSignup = (data: { [key: string]: string | boolean }) => {
    console.log('Signup data:', data);
    // TODO: Implement real signup logic
    navigate('/dashboard');
  };

  return (
    <div
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-200 to-gray-300 px-4 py-6 overflow-y-auto 
scroll-smooth scale-[0.97]"
    >
      {/* Logo and heading */}
      <div className="mb-8 text-center">
        <img
          src={logo}
          alt={t('auth.logoAlt')}
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 mx-auto rounded-full shadow-lg object-cover"
        />
        <h1 className="text-3xl font-semibold text-yellow-600 mt-4 shadow-md">
          {t('auth.goldsmithSystem')}
        </h1>
      </div>

      {/* Signup Form */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-md w-full mx-auto">
        <AuthForm onSubmit={handleSignup} isLogin={false} />

        {/* Already have account? Log in */}
        <div className="mt-6 text-center text-sm text-gray-700">
          {t('auth.alreadyHaveAccount')}{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-yellow-600 hover:underline font-semibold"
          >
            {t('auth.login')}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-600">
        {t('auth.poweredBy')}{' '}
        <span className="font-semibold text-yellow-600">Goldsmith</span> | {t('auth.systemTagline')}
      </div>
    </div>
  );
};

export default Signup;

