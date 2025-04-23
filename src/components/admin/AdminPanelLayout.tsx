// src/components/admin/AdminPanelLayout.tsx

import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import { useTranslation } from 'react-i18next';

interface AdminPanelLayoutProps {
  children?: ReactNode;
}

const AdminPanelLayout: React.FC<AdminPanelLayoutProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <div className={`flex h-screen bg-gray-950 text-white ${isRtl ? 'flex-row-reverse' : ''}`}>
      {/* Sidebar (fixed width, scrolling independently) */}
      <aside className="w-72 h-full overflow-y-auto shadow-lg scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-800 bg-gray-900 border-r border-gray-800">
        <AdminSidebar />
      </aside>

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdminHeader />

        {/* Main content area with smooth scroll */}
        <main className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 scroll-smooth">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AdminPanelLayout;

