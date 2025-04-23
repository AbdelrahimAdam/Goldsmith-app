// src/components/LogoutButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    const confirmed = window.confirm(t('auth.confirmLogout'));
    if (!confirmed) return;

    // Clear token or session-related data
    localStorage.removeItem('token');

    // Optionally notify the user
    alert(t('auth.loggedOut'));

    // Redirect to login
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow"
    >
      {t('auth.logout')}
    </button>
  );
};

export default LogoutButton;

