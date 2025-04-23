import React from 'react';
import { useTranslation } from 'react-i18next';
import LayoutWrapper from '../components/LayoutWrapper';

const EmployeePayroll: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LayoutWrapper>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">{t('employeePayroll.title')}</h1>

        {/* Placeholder for Employee Table */}
        <div className="bg-white shadow rounded p-4 mb-4 dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-300">{t('employeePayroll.tablePlaceholder')}</p>
        </div>

        {/* Placeholder for Payroll Section */}
        <div className="bg-white shadow rounded p-4 dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-300">{t('employeePayroll.payrollPlaceholder')}</p>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default EmployeePayroll;

