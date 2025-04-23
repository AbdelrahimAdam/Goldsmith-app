import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/solid';

interface UserLayoutProps {
  children: ReactNode;
}

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: HomeIcon },
  { label: 'Inventory', path: '/inventory', icon: ClipboardDocumentListIcon },
  { label: 'Price Tracking', path: '/priceTracking', icon: ClipboardDocumentListIcon },
  { label: 'Analytics', path: '/analytics', icon: DocumentChartBarIcon },
  { label: 'Profile', path: '/profile', icon: Cog6ToothIcon },
  { label: 'Settings', path: '/settings', icon: Cog6ToothIcon },
  { label: 'History', path: '/history', icon: DocumentChartBarIcon },
  { label: 'Store', path: '/store', icon: ClipboardDocumentListIcon },
  { label: 'Employees', path: '/employees', icon: ClipboardDocumentListIcon },
  { label: 'Tasks', path: '/tasks', icon: ClipboardDocumentListIcon },
  { label: 'Contacts', path: '/contacts', icon: ClipboardDocumentListIcon },
  { label: 'Payments', path: '/payments', icon: ClipboardDocumentListIcon },
  { label: 'Compliance', path: '/compliance', icon: ClipboardDocumentListIcon },
  { label: 'Miners', path: '/miners', icon: ClipboardDocumentListIcon },
  { label: 'Merchants', path: '/merchants', icon: ClipboardDocumentListIcon },
  { label: 'Transactions', path: '/transactions', icon: ClipboardDocumentListIcon },
];

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const handleNavClick = (path: string) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <div className={`relative flex min-h-screen w-full overflow-hidden ${isRTL ? 'rtl' : ''} bg-yellow-50 dark:bg-gray-950 
text-gray-900 dark:text-gray-200`}>
      {/* Sidebar (Desktop) */}
      {isDesktop && (
        <aside className="hidden lg:flex flex-col w-72 bg-white dark:bg-gray-800 shadow-2xl rounded-tr-3xl rounded-br-3xl 
p-6 space-y-4">
          <h2 className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 mb-4">
            🌟 Goldsmith
          </h2>
          {navItems.map(({ label, path, icon: Icon }) => (
            <button
              key={path}
              onClick={() => handleNavClick(path)}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl transition text-left ${
                isActive(path)
                  ? 'bg-yellow-300 text-yellow-900 dark:bg-yellow-500 dark:text-gray-900'
                  : 'bg-yellow-100 dark:bg-gray-700 hover:bg-yellow-200 dark:hover:bg-gray-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              {t(label)}
            </button>
          ))}
        </aside>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Navbar */}
        {!isDesktop && (
          <header className="sticky top-0 z-50 bg-yellow-200/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md flex 
items-center justify-between px-4 py-3 rounded-b-xl">
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold">🌟 Goldsmith</h1>
            <div className="w-6 h-6" />
          </header>
        )}

        {/* Drawer Sidebar (Mobile) */}
        <Transition show={sidebarOpen}>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <aside
            className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} z-50 h-full w-72 bg-white dark:bg-gray-800 shadow-2xl 
rounded-tr-2xl rounded-br-2xl p-6 transition-transform duration-300 ease-in-out transform ${
              sidebarOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">Menu</h2>
              <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
                <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <nav className="space-y-4">
              {navItems.map(({ label, path, icon: Icon }) => (
                <button
                  key={path}
                  onClick={() => handleNavClick(path)}
                  className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-left transition ${
                    isActive(path)
                      ? 'bg-yellow-300 text-yellow-900 dark:bg-yellow-500 dark:text-gray-900'
                      : 'bg-yellow-100 dark:bg-gray-700 hover:bg-yellow-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {t(label)}
                </button>
              ))}
            </nav>
          </aside>
        </Transition>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;

