import React from 'react';
import { useTranslation } from 'react-i18next';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 
'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const PerformanceAnalytics: React.FC = () => {
  const { t } = useTranslation();

  // Placeholder data for the line chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: t('performanceAnalytics.revenue'),
        data: [3000, 4000, 3500, 5000, 6000, 7000, 8000],
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: t('performanceAnalytics.expenses'),
        data: [2000, 2500, 2000, 3000, 3500, 4000, 4500],
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
        {t('performanceAnalytics.title')}
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded shadow p-4 space-y-4">
        <p className="text-gray-700 dark:text-gray-300">{t('performanceAnalytics.description')}</p>

        <div className="w-full max-w-4xl mx-auto">
          <Line data={data} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Placeholder for KPIs */}
          <div className="bg-blue-100 dark:bg-blue-700 rounded shadow p-4">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {t('performanceAnalytics.kpiRevenue')}
            </h2>
            <p className="text-lg font-bold text-gray-900 dark:text-white">$75,000</p>
          </div>

          <div className="bg-green-100 dark:bg-green-700 rounded shadow p-4">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {t('performanceAnalytics.kpiProfit')}
            </h2>
            <p className="text-lg font-bold text-gray-900 dark:text-white">$50,000</p>
          </div>

          <div className="bg-yellow-100 dark:bg-yellow-700 rounded shadow p-4">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {t('performanceAnalytics.kpiExpense')}
            </h2>
            <p className="text-lg font-bold text-gray-900 dark:text-white">$25,000</p>
          </div>

          <div className="bg-red-100 dark:bg-red-700 rounded shadow p-4">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {t('performanceAnalytics.kpiLoss')}
            </h2>
            <p className="text-lg font-bold text-gray-900 dark:text-white">$5,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;

