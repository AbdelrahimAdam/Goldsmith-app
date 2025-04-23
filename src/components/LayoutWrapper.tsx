// src/layouts/LayoutWrapper.tsx

import React, { useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MobileSidebar from '../components/MobileSidebar';

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper: React.FC<Props> = ({ children }) => {
  const { i18n } = useTranslation();
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        dir={direction}
        className="flex min-h-screen bg-gray-100 text-gray-900 font-sans transition-colors duration-300"
      >
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex md:flex-col w-64 h-screen shadow-lg bg-white border-r border-gray-200 
overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scroll-smooth">
          <Sidebar />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Mobile Sidebar Drawer */}
        {isSidebarOpen && (
          <aside className="fixed top-0 left-0 z-50 w-4/5 max-w-xs bg-white shadow-md transform transition-transform 
duration-300 ease-in-out md:hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 
scroll-smooth">
            <MobileSidebar onClose={toggleSidebar} />
          </aside>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Navbar */}
          <header className="sticky top-0 z-30 bg-white shadow-md">
            <Navbar toggleSidebar={toggleSidebar} />
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 
scrollbar-track-gray-100">
            {children}
          </main>
        </div>
      </div>
    </Suspense>
  );
};

export default LayoutWrapper;

