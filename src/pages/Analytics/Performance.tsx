import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const PerformanceAnalytics: React.FC = () => {
  const { t } = useTranslation();

  const data: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: t('Performance'),
        data: [100, 200, 150, 300, 250],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: t('Performance Analytics'),
      },
    },
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{t('Performance Analytics')}</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceAnalytics;

