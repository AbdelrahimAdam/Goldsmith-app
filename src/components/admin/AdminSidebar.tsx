import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Sidebar items for general users and admin
const generalLinks = [
  { label: 'Dashboard', path: '/dashboard', icon: '🏠' },
  { label: 'Inventory', path: '/inventory', icon: '📦' },
  { label: 'Price Tracking', path: '/price-tracking', icon: '📉' },
  { label: 'Analytics', path: '/analytics', icon: '📊' },
  { label: 'Profile', path: '/profile', icon: '👤' },
  { label: 'Settings', path: '/settings', icon: '⚙️' },
  { label: 'Security', path: '/security', icon: '🔐' },
  { label: 'History', path: '/history', icon: '📜' },
  { label: 'Store', path: '/store', icon: '🏪' },
  { label: 'Employees', path: '/employees', icon: '👨‍💻' },
  { label: 'Tasks', path: '/tasks', icon: '📝' },
  { label: 'Contacts', path: '/contacts', icon: '📞' },
  { label: 'Payments', path: '/payments', icon: '💳' },
  { label: 'Compliance', path: '/compliance', icon: '✅' },
  { label: 'Miners', path: '/miners', icon: '⛏️' },
  { label: 'Merchants', path: '/merchants', icon: '💼' },
  { label: 'Transactions', path: '/transactions', icon: '💸' },
];

const adminLinks = [
  { label: 'Manage Users', path: '/admin/users', icon: '👥' },
  { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
  { label: 'Security', path: '/admin/security', icon: '🔐' },
  { label: 'Audit Logs', path: '/admin/audit-logs', icon: '📜' },
];

const AdminSidebar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-800 text-gray-200 h-screen p-4 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-yellow-400">{t('sidebar.generalPages')}</h2>
        <div className="space-y-2">
          {generalLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-4 py-2 rounded-lg bg-gray-700 hover:bg-yellow-600 hover:text-white transition-all duration-300"
            >
              <span className="text-2xl">{link.icon}</span> {t(link.label) || link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-yellow-400">{t('sidebar.adminPages')}</h2>
        <div className="space-y-2">
          {adminLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-4 py-2 rounded-lg bg-gray-700 hover:bg-yellow-600 hover:text-white transition-all duration-300"
            >
              <span className="text-2xl">{link.icon}</span> {t(link.label) || link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

