import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/Goldsmith_System_Logo.png';
import { HiMenu, HiX, HiBell } from 'react-icons/hi';
import LanguageSwitcher from './LanguageSwitcher';
import MobileNavLink from './MobileNavLink';

interface NavbarProps {
  toggleSidebar?: () => void;
}

const avatar = 'https://ui-avatars.com/api/?name=User&background=eee&color=000';

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-lg py-3 px-6 sticky top-0 z-50 border-b border-gray-200 relative overflow-hidden">
      {/* ✨ Sparkle Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-pulse opacity-5 
bg-[radial-gradient(#FFD700_1px,transparent_1px)] bg-[size:10px_10px]" />

      <div className={`flex items-center justify-between ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Logo + System Name */}
        <Link
          to="/dashboard"
          onClick={closeMenu}
          className="flex items-center text-lg font-semibold text-yellow-600 z-10"
        >
          <img
            src={logo}
            alt={t('logoAlt', 'Goldsmith System Logo')}
            className="h-10 w-10 rounded-full border border-yellow-500 shadow-md object-contain"
          />
          <span className={`text-yellow-500 font-bold text-xl tracking-wide ${isRtl ? 'mr-3' : 'ml-3'}`}>
            {t('system.name', 'Goldsmith')}
          </span>
        </Link>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <button className="text-yellow-500 hover:text-yellow-400 transition text-xl relative">
            <HiBell />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <img
            src={avatar}
            alt="User"
            className="w-9 h-9 rounded-full border border-yellow-300 shadow-md hover:scale-105 transition"
          />
          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden z-10">
          <button
            onClick={toggleSidebar ?? toggleMenu}
            className="text-yellow-500 text-3xl focus:outline-none hover:text-yellow-400 transition"
            aria-label="Toggle menu"
          >
            {menuOpen && !toggleSidebar ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (only shown if toggleSidebar is not used) */}
      {!toggleSidebar && menuOpen && (
        <div className="md:hidden transition-all duration-300 ease-in-out transform max-h-[500px] opacity-100 scale-100 
overflow-hidden mt-2">
          <div
            className={`flex flex-col space-y-4 bg-gray-800 p-4 rounded-md shadow-inner z-10 ${
              isRtl ? 'text-right' : 'text-left'
            }`}
          >
            <MobileNavLink to="/Markets" label={t('Markets')} onClick={closeMenu} />
            <MobileNavLink to="/Miners" label={t('Miners')} onClick={closeMenu} />
            <MobileNavLink to="/merchants" label={t('Merchants')} onClick={closeMenu} />
            <MobileNavLink to="/transactions" label={t('Transactions')} onClick={closeMenu} />

            <div className="flex justify-center gap-3 pt-2 border-t border-gray-700">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

