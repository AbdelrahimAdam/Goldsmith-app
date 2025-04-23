import React, { ReactNode, useState } from 'react';
import MobileNavbar from '../components/MobileNavbar';
import MobileSidebar from '../components/MobileSidebar';
import logo from '../assets/Goldsmith_System_Logo.png'; // Optional for future use

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 shadow-md px-4 py-2">
        <MobileNavbar toggleSidebar={toggleSidebar} />
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          />
          <aside className="fixed top-0 left-0 z-50 h-full w-4/5 max-w-xs bg-white dark:bg-gray-800 shadow-2xl rounded-tr-xl rounded-br-xl transition-transform duration-300 ease-in-out transform translate-x-0">
            <MobileSidebar onClose={toggleSidebar} />
          </aside>
        </>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-24 bg-gray-100 dark:bg-gray-950 transition-all duration-300 ease-in-out rounded-t-2xl">
        <div className="min-h-full">{children}</div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg h-16 flex items-center justify-around px-4 backdrop-blur-md">
        {[
          { icon: 'home', label: 'Home' },
          { icon: 'analytics', label: 'Market' },
          { icon: 'menu', label: 'Menu', onClick: toggleSidebar },
          { icon: 'account_circle', label: 'Profile' },
        ].map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center text-xs text-gray-600 dark:text-gray-300 hover:text-yellow-500 focus:outline-none transition"
            onClick={item.onClick}
            aria-label={item.label}
          >
            <span className="material-icons text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MobileLayout;

