import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiHome, HiChartBar, HiCollection, HiUser } from 'react-icons/hi';

const NavLinks = () => {
  const { t } = useTranslation();

  const links = [
    { to: '/', label: t('sidebar.home'), icon: <HiHome /> },
    { to: '/markets', label: t('sidebar.markets'), icon: <HiChartBar /> },
    { to: '/inventory', label: t('sidebar.inventory'), icon: <HiCollection /> },
    { to: '/profile', label: t('sidebar.profile'), icon: <HiUser /> },
  ];

  return (
    <nav className="flex flex-col gap-2 px-4 py-2">
      {links.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
              isActive ? 'bg-yellow-200 text-yellow-800' : 'hover:bg-gray-100 text-gray-700'
            }`
          }
        >
          {icon}
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;

