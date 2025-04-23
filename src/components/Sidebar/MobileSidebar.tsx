import React from 'react';
import { useTranslation } from 'react-i18next';

const MobileSidebar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="sidebar">
      <div className="sidebar-item">{t('login')}</div>
      <div className="sidebar-item">{t('signup')}</div>
      <div className="sidebar-item">{t('terms_of_service')}</div>
      <div className="sidebar-item">{t('logout')}</div>
    </div>
  );
};

export default MobileSidebar;

