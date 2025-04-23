import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import navigationConfig from '../constants/navigationConfig';

interface MobileNavbarProps {
  toggleSidebar: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ toggleSidebar }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [open, setOpen] = useState(false);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="md:hidden bg-white shadow-md border-b 
border-gray-200">
      {/* Navbar Container */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo/Brand */}
        <span className="text-lg font-semibold 
text-yellow-600">{t('auth.goldsmithSystem')}</span>
        
        {/* Hamburger button to toggle the sidebar */}
        <button
          onClick={() => {
            toggleSidebar();
            setOpen(!open);
          }}
          className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-200 
transition duration-300 ease-in-out"
        >
          {open ? (
            <HiX className="w-6 h-6 text-gray-700" />
          ) : (
            <HiMenuAlt2 className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Dropdown menu when the hamburger is clicked */}
      {open && (
        <div className="transition-all duration-300 ease-out bg-white px-4 py-2 space-y-3 
border-t border-gray-100 shadow-lg rounded-lg">
          {navigationConfig.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)} // Close the menu when a link is clicked
              className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-yellow-100 hover:text-yellow-600 transition-all duration-300 ease-in-out"
            >
              {t(item.label)} {/* Translated label */}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;

