import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BillingSettings from './Settings/BillingSettings';
import LanguageSettings from './Settings/LanguageSettings';
import PasswordSettings from './Settings/PasswordSettings';
import DeleteAccount from './Settings/DeleteAccount';
import NotificationSettings from './Settings/NotificationSettings';
import SecuritySettings from './Settings/SecuritySettings';

export default function Settings() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [username, setUsername] = useState('abdelrahim');
  const [email, setEmail] = useState('abdelrahim@example.com');
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Handle image file input and preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          if (typeof result === 'string') { // Type guard to check for string result
            setPreviewImage(result);
          }
        };
        reader.onerror = () => console.error('Error reading file');
        reader.readAsDataURL(file);
      } else {
        alert('Please select an image file');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleHomeRedirect = () => {
    navigate('/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">{t('settings.title')}</h1>

      {/* Profile Picture Upload */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
          {t('settings.profilePicture')}
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={previewImage || '/default-avatar.png'}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full border object-cover shadow-sm"
          />
          <input
            id="profilePicture"
            name="profilePicture"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-white hover:file:bg-yellow-500 transition"
          />
        </div>
      </section>

      {/* Account Info Section */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {t('settings.accountInfo')}
        </h2>
        <div>
          <label htmlFor="username" className="block mb-1 text-gray-600 dark:text-gray-300">
            {t('settings.username')}
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 dark:text-gray-300">
            {t('settings.email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>
      </section>

      {/* Other Modular Settings Sections */}
      <BillingSettings />
      <LanguageSettings />
      <PasswordSettings />
      <NotificationSettings />
      <SecuritySettings />
      <DeleteAccount />

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handleHomeRedirect}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          {t('settings.home')}
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          {t('settings.logout')}
        </button>
      </div>
    </div>
  );
}

