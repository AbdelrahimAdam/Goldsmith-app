import React from 'react';
import { useTranslation } from 'react-i18next';

const RiskManagement: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-semibold mb-4">{t('risk.title')}</h1>

      {/* Placeholder for Risk Charts */}
      <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-6">
        <p className="text-gray-600 dark:text-gray-300">
          {t('risk.insuranceSummary')}
        </p>
        <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded mt-4 flex items-center justify-center text-gray-400">
          📊 {t('risk.riskChartPlaceholder')}
        </div>
      </div>

      {/* Risk Factors Table */}
      <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
        <h2 className="text-lg font-medium mb-2">{t('risk.factors')}</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-300">
                <th className="p-2">{t('risk.factor')}</th>
                <th className="p-2">{t('risk.impact')}</th>
                <th className="p-2">{t('risk.status')}</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Rows */}
              <tr className="border-t dark:border-gray-700">
                <td className="p-2">{t('risk.securityBreach')}</td>
                <td className="p-2">{t('risk.high')}</td>
                <td className="p-2">{t('risk.mitigated')}</td>
              </tr>
              <tr className="border-t dark:border-gray-700">
                <td className="p-2">{t('risk.marketVolatility')}</td>
                <td className="p-2">{t('risk.medium')}</td>
                <td className="p-2">{t('risk.ongoing')}</td>
              </tr>
              {/* More dynamic rows to come */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;

