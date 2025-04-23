import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FaHome, FaTh, FaChartLine, FaCogs, FaShieldAlt, FaHistory, 
  FaStore, FaUsers, FaTasks, FaAddressBook, FaCreditCard, 
  FaClipboardList, FaIndustry, FaExchangeAlt, FaBars, FaTimes 
} from 'react-icons/fa';
import logo from '../assets/Goldsmith_System_Logo.png';

const Sidebar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState<string>('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isRTL = i18n.language === 'ar';

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (window.innerWidth <= 768) {
      setIsMobileOpen(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-full shadow-lg text-white focus:outline-none 
focus:ring-2 focus:ring-yellow-400"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 ${isRTL ? 'right-0' : 'left-0'} z-40 w-64 bg-gray-800 text-gray-200 transition-all 
duration-300 ease-in-out transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        aria-hidden={!isMobileOpen && window.innerWidth <= 768}
      >
        {/* Fixed Header */}
        <div className="h-20 p-5 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="System Logo" 
              className="h-10 w-10 rounded-full object-cover border-2 border-yellow-400"
            />
            <h1 className="text-xl font-semibold text-white">Goldsmith</h1>
          </div>
          <button
            onClick={toggleLanguage}
            className="p-1.5 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-200 text-xs 
focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Toggle language"
          >
            {i18n.language === 'ar' ? 'EN' : 'عربي'}
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="absolute top-20 bottom-0 left-0 right-0 overflow-y-auto">
          <nav className={`space-y-2 py-2 ${isRTL ? 'pr-2 pl-4' : 'pl-2 pr-4'}`}>
            {[
              { path: '/dashboard', icon: <FaHome />, text: t('sidebar.dashboard') || 'Dashboard', key: 'dashboard' },
              { path: '/inventory', icon: <FaTh />, text: t('sidebar.inventory') || 'Inventory', key: 'inventory' },
              { path: '/price-tracking', icon: <FaChartLine />, text: t('sidebar.priceTracking') || 'Price Tracking', key: 
'priceTracking' },
              { path: '/analytics', icon: <FaChartLine />, text: t('sidebar.analytics') || 'Analytics', key: 'analytics' },
              { path: '/profile', icon: <FaUsers />, text: t('sidebar.profile') || 'Profile', key: 'profile' },
              { path: '/settings', icon: <FaCogs />, text: t('sidebar.settings') || 'Settings', key: 'settings' },
              { path: '/security', icon: <FaShieldAlt />, text: t('sidebar.security') || 'Security', key: 'security' },
              { path: '/history', icon: <FaHistory />, text: t('sidebar.history') || 'History', key: 'history' },
              { path: '/store', icon: <FaStore />, text: t('sidebar.store') || 'Store', key: 'store' },
              { path: '/employees', icon: <FaUsers />, text: t('sidebar.employees') || 'Employees', key: 'employees' },
              { path: '/tasks', icon: <FaTasks />, text: t('sidebar.tasks') || 'Tasks', key: 'tasks' },
              { path: '/contacts', icon: <FaAddressBook />, text: t('sidebar.contacts') || 'Contacts', key: 'contacts' },
              { path: '/payments', icon: <FaCreditCard />, text: t('sidebar.payments') || 'Payments', key: 'payments' },
              { path: '/compliance', icon: <FaClipboardList />, text: t('sidebar.compliance') || 'Compliance', key: 
'compliance' },
              { path: '/miners', icon: <FaIndustry />, text: t('sidebar.miners') || 'Miners', key: 'miners' },
              { path: '/merchants', icon: <FaExchangeAlt />, text: t('sidebar.merchants') || 'Merchants', key: 'merchants' 
},
              { path: '/transactions', icon: <FaExchangeAlt />, text: t('sidebar.transactions') || 'Transactions', key: 
'transactions' },
              // Add more links here if needed
            ].map((item) => (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => handleLinkClick(item.key)}
                className={`flex items-center ${isRTL ? 'flex-row-reverse justify-end' : ''} px-4 py-3 mx-2 text-sm 
font-medium rounded-xl transition-all duration-200 group ${
                  activeLink === item.key
                    ? 'bg-gray-700 text-white shadow-lg border-l-4 border-yellow-400'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-md border-l-4 border-transparent'
                } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                aria-current={activeLink === item.key ? 'page' : undefined}
              >
                <span className={`${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0 ${
                  activeLink === item.key ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400'
                }`}>
                  {item.icon}
                </span>
                <span className="truncate">{item.text}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
