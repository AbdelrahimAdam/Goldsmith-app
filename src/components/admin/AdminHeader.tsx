import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiArrowLeft, HiOutlineLogout } from 'react-icons/hi';

const AdminHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const goBackToDashboard = () => {
    navigate('/admin/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/admin/login');
  };

  const showBack = location.pathname !== '/admin/dashboard';

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 border-b border-gray-800 shadow-md">
      <div className="flex items-center space-x-4">
        {showBack && (
          <button
            onClick={goBackToDashboard}
            className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1.5 rounded font-semibold"
          >
            <HiArrowLeft className="mr-1" /> {t('admin.backToDashboard') || 'Back to Dashboard'}
          </button>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center text-red-400 hover:text-red-300 transition"
      >
        <HiOutlineLogout className="mr-1" /> {t('auth.logout') || 'Logout'}
      </button>
    </header>
  );
};

export default AdminHeader;

