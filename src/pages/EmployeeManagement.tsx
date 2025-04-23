import React from 'react';
import { useTranslation } from 'react-i18next';
import LayoutWrapper from '../components/LayoutWrapper';

const EmployeeManagement: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <LayoutWrapper>
      <div className={`p-4 sm:p-6 ${isRtl ? 'text-right' : 'text-left'}`}>
        <h1 className="text-2xl font-bold mb-4">
          {t('employee_management.title', 'Employee Management & Payroll')}
        </h1>

        {/* Placeholder Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-gray-700 dark:text-gray-200">
          <p>{t('employee_management.placeholder', 'Manage your staff, track work hours, process salaries, and maintain HR records here.')}</p>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default EmployeeManagement;

