// src/pages/admin/AdminLogin.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AdminLogin: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // ✅ Simulate login for Super Admin
    if (email === 'admin@goldsmith.com' && password === 'admin123') {
      localStorage.setItem('user', JSON.stringify({ role: 'superadmin' }));
      window.location.href = '/admin/dashboard';
    } else {
      setError('Invalid credentials. Try using admin@goldsmith.com / admin123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300 p-4">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-yellow-400 text-center">
          🔐 {t('admin.superAdminLogin') || 'Super Admin Login'}
        </h1>

        {error && (
          <div className="bg-red-500 text-white px-4 py-2 rounded">{error}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">{t('auth.email') || 'Email'}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{t('auth.password') || 'Password'}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 rounded transition"
          >
            {t('auth.login') || 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

