import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const TabletLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-950 text-gray-900 
dark:text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-white dark:bg-gray-900 border-r 
border-gray-200 dark:border-gray-800 shadow-md">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 shadow-sm border-b 
border-gray-200 dark:border-gray-800 px-4 py-2">
          <Navbar />
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-950 transition-all 
duration-300 ease-in-out rounded-t-2xl">
          <div className="max-w-screen-lg mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default TabletLayout;

