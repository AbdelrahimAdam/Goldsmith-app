import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import widgets
import LogsViewer from '../../components/admin/widgets/LogsViewer';
import SyncManager from '../../components/admin/widgets/SyncManager';
import SystemStatusWidget from '../../components/admin/widgets/SystemStatusWidget';
import UserRoleManager from '../../components/admin/widgets/UserRoleManager';

const AdminDashboard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Retrieve the logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // If no user or user is not a superadmin, redirect to login page
  if (!user || user.role !== 'superadmin') {
    navigate('/login');
    return null; // Prevent rendering the dashboard
  }

  // Define quick admin tools
  const adminTools = [
    { label: t('admin.manageUsers'), path: '/admin/users', icon: '👥' },
    { label: t('admin.security'), path: '/admin/security', icon: '🔐' },
    { label: t('admin.systemSettings'), path: '/admin/settings', icon: '⚙️' },
    { label: t('admin.auditLogs'), path: '/admin/audit-logs', icon: '📜' },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-950 text-gray-200 backdrop-blur-md">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-yellow-300 drop-shadow-md">{t('admin.dashboardTitle')}</h1>
        <p className="text-sm text-gray-400 mt-1">{t('admin.dashboardSubtitle') || 'Administrative tools and system overview'}</p>
      </header>

      {/* Widgets Section */}
      <section aria-label="System Widgets" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        <SystemStatusWidget />
        <SyncManager />
        <UserRoleManager />
        <LogsViewer />
      </section>

      {/* Tools Section */}
      <section aria-label="Admin Tools">
        <h2 className="text-2xl font-semibold text-yellow-200 mb-6">{t('admin.quickTools') || 'Quick Access Tools'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {adminTools.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="p-5 bg-white/10 rounded-xl border border-gray-700 hover:bg-yellow-200/10 hover:border-yellow-300 transition transform hover:-translate-y-1 shadow-md flex flex-col gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              role="link"
              aria-label={tool.label}
            >
              <span className="text-3xl">{tool.icon}</span>
              <span className="text-lg font-medium text-yellow-200">{tool.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;

