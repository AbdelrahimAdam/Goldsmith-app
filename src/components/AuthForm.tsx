import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface AuthFormProps {
  onSubmit: (data: { [key: string]: string | boolean }) => void;
  isLogin?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, isLogin = false }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeTOS: false,
  });

  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value.trim(), // Trim input values
    }));
  };

  const validate = () => {
    if (!formData.email || !formData.password || (!isLogin && !formData.confirmPassword)) {
      return t('auth.allFieldsRequired');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return t('auth.invalidEmail');
    }

    // Enforce strong password policy
    const passwordPolicyRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPolicyRegex.test(formData.password)) {
      return t('auth.weakPassword'); // Add translation key explanation for users
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      return t('auth.passwordsDoNotMatch');
    }

    if (!isLogin && !formData.agreeTOS) {
      return t('auth.agreeToTerms');
    }

    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setErrors(error);
    } else {
      setErrors(null);
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
      {errors && <div className="text-red-600 text-sm font-medium">{errors}</div>}

      <div>
        <label className="block text-sm font-medium text-gray-700">{t('auth.email')}</label>
        <input
          type="email"
          name="email"
          placeholder={t('auth.yourEmail')}
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">{t('auth.password')}</label>
        <input
          type="password"
          name="password"
          placeholder={t('auth.yourPassword')}
          value={formData.password}
          onChange={handleChange}
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {!isLogin && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('auth.confirmPassword')}</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder={t('auth.confirmYourPassword')}
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              name="agreeTOS"
              checked={formData.agreeTOS}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm text-gray-600 leading-snug">
              {t('auth.bySigningUp')}{' '}
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:underline"
              >
                {t('auth.termsOfService')}
              </a>
            </label>
          </div>
        </>
      )}

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
      >
        {isLogin ? t('auth.login') : t('auth.signUp')}
      </button>
    </form>
  );
};

export default AuthForm;

