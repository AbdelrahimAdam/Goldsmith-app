import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthForm from '../components/AuthForm';
import logo from '../assets/Goldsmith_System_Logo.png';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogin = (data: { [key: string]: string | boolean }) => {
    const userRole = (data.role as string) || 'user'; // Default to 'user'

    // Simulate login and store user in localStorage
    const fakeUser = {
      email: data.email,
      role: userRole,
    };
    localStorage.setItem('user', JSON.stringify(fakeUser));

    // Redirect based on role
    if (userRole === 'superadmin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-200 px-4 py-6 overflow-y-auto"
    >
      {/* Logo and Title */}
      <div className="mb-8 text-center">
        <img
          src={logo}
          alt={t('auth.logoAlt')}
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full shadow-lg object-cover"
        />
        <h1 className="text-3xl font-semibold text-yellow-600 mt-4 shadow-sm">
          {t('auth.goldsmithSystem')}
        </h1>
      </div>

      {/* Login Card */}
      <div className="bg-white/80 border border-yellow-100 shadow-2xl rounded-3xl px-6 py-8 max-w-md w-full backdrop-blur-md transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          {t('auth.login')}
        </h2>

        <AuthForm onSubmit={handleLogin} isLogin />

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {t('auth.dontHaveAccount')}{' '}
            <Link to="/signup" className="text-yellow-600 hover:underline">
              {t('auth.signup')}
            </Link>
          </p>
        </div>

        <div className="mt-3 text-center">
          <Link to="/forgot-password" className="text-yellow-600 hover:underline text-sm">
            {t('auth.forgotPassword')}
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-600">
        {t('auth.poweredBy')} <span className="font-semibold text-yellow-600">Goldsmith</span>
      </div>
    </div>
  );
};

export default Login;

