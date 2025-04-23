import React, { ReactNode } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth'; // ✅ Changed to relative path

interface LayoutProps {
  children: ReactNode;
}

const DesktopLayout: React.FC<LayoutProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const { user } = useAuth();
  const isRtl = i18n.language === 'ar';
  const isSuperAdmin = user?.role === 'superadmin';

  return (
    <div
      className={`flex min-h-screen w-full bg-gray-950 text-white ${isRtl ? 'flex-row-reverse' : ''}`}
    >
      {isSuperAdmin && (
        <aside className="w-72 bg-gray-900 border-r border-gray-800 shadow-lg hidden lg:block">
          <AdminSidebar />
        </aside>
      )}

      <div className="flex-1 flex flex-col">
        {isSuperAdmin && (
          <header className="sticky top-0 z-30 bg-gray-900 shadow-sm">
            <AdminHeader />
          </header>
        )}

        <main className="flex-1 overflow-y-auto px-6 py-6 bg-gray-900 rounded-tl-2xl rounded-tr-2xl scrollbar-thin 
        scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          <div className="max-w-screen-xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DesktopLayout;

