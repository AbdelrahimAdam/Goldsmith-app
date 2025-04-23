import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillHome } from 'react-icons/ai';
import { FaStoreAlt, FaWallet, FaUser } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { MdOutlineAnalytics, MdReceipt } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface MobileSidebarProps {
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ onClose }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ar';

  // Tab data
  const tabs = [
    { label: 'Home', icon: <AiFillHome />, path: '/Dashboard' },
    { label: 'Markets', icon: <FaStoreAlt />, path: '/Transactions' },
    { label: 'Wallet', icon: <FaWallet />, path: '/Inventory' },
    { label: 'Price Alerts', icon: <FaBell />, path: '/Price Tracking' },
    { label: t('salesInvoicing.title'), icon: <MdReceipt />, path: '/Sales' },
    { label: 'Profile', icon: <FaUser />, path: '/settings' },
    { label: t('nav.analytics'), icon: <MdOutlineAnalytics />, path: '/Analytics' }
  ];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg 
z-50 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Mobile Sidebar Container */}
      <div className="flex justify-around items-center h-16 bg-gray-50 shadow-md 
rounded-t-lg">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => {
              navigate(tab.path);
              onClose();
            }}
            className="flex flex-col items-center justify-center text-sm text-gray-700 
hover:text-yellow-500 transition-all duration-300 w-full py-2 space-y-1"
          >
            {/* Icon */}
            <div className="text-2xl">{tab.icon}</div>

            {/* Label */}
            <span className="whitespace-nowrap text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileSidebar;

