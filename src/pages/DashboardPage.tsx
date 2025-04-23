import React from 'react';
import { useTranslation } from 'react-i18next';
import UserLayout from '../layouts/UserLayout'; // Updated import
import Sidebar from '../components/Sidebar';
import logo from '../assets/Goldsmith_System_Logo.png';

const DashboardPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <UserLayout> {/* Updated layout component */}
      <div className="flex">
        <Sidebar />
        
        {/* Main content area */}
        <div
          dir={isRTL ? 'rtl' : 'ltr'}
          className={`p-6 sm:p-10 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 
dark:to-gray-800 transition-colors duration-300 overflow-y-auto flex-1 ${isRTL ? 'mr-64' : 'ml-64'}`}
        >
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {t('dashboard.welcome')}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {t('dashboard.welcomeSubtitle') || 'Manage your goldsmith business efficiently'}
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: t('dashboard.totalSales'),
                value: '$45,230',
                change: '+12.5%',
                icon: '💰',
                bg: 'bg-blue-50 dark:bg-blue-900/30',
                text: 'text-blue-600 dark:text-blue-400'
              },
              {
                title: t('dashboard.totalInventory'),
                value: '1,200g',
                change: '+3.2%',
                icon: '📦',
                bg: 'bg-green-50 dark:bg-green-900/30',
                text: 'text-green-600 dark:text-green-400'
              },
              {
                title: t('dashboard.newCustomers'),
                value: '150',
                change: '+8.7%',
                icon: '👥',
                bg: 'bg-purple-50 dark:bg-purple-900/30',
                text: 'text-purple-600 dark:text-purple-400'
              },
              {
                title: t('dashboard.pendingOrders'),
                value: '24',
                change: '-2.1%',
                icon: '📝',
                bg: 'bg-yellow-50 dark:bg-yellow-900/30',
                text: 'text-yellow-600 dark:text-yellow-400'
              }
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`${stat.bg} p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all 
hover:shadow-md`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      {stat.title}
                    </p>
                    <p className={`text-2xl font-semibold ${stat.text} mb-1`}>
                      {stat.value}
                    </p>
                    <p className={`text-xs ${parseFloat(stat.change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change} {t('dashboard.fromLastMonth')}
                    </p>
                  </div>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 
dark:border-gray-700 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {t('dashboard.salesOverview')}
                </h2>
                <select className="text-sm bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 
rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>{t('dashboard.thisMonth')}</option>
                  <option>{t('dashboard.lastMonth')}</option>
                  <option>{t('dashboard.thisYear')}</option>
                </select>
              </div>
              <div className="h-80 flex items-center justify-center text-gray-400 dark:text-gray-500 bg-gray-50 
dark:bg-gray-700/50 rounded-lg">
                {t('dashboard.chartPlaceholder')}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
                {t('dashboard.recentTransactions')}
              </h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center justify-between pb-3 border-b border-gray-100 
dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center 
justify-center">
                        <span className="text-blue-500 dark:text-blue-400">💰</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                          {t('dashboard.transaction')} #{item}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item} {t('dashboard.hoursAgo')}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-green-500">
                      +${(item * 250).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Inventory Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 
mb-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
              {t('dashboard.inventorySummary')}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase 
tracking-wider">
                      {t('dashboard.item')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase 
tracking-wider">
                      {t('dashboard.category')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase 
tracking-wider">
                      {t('dashboard.quantity')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase 
tracking-wider">
                      {t('dashboard.value')}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { item: '24K Gold Ring', category: 'Rings', quantity: '15', value: '$12,450' },
                    { item: '22K Gold Chain', category: 'Necklaces', quantity: '8', value: '$8,200' },
                    { item: '18K Gold Bracelet', category: 'Bracelets', quantity: '12', value: '$9,600' },
                    { item: 'Silver Pendant', category: 'Pendants', quantity: '20', value: '$3,400' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                        {row.item}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {row.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {row.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-white">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default DashboardPage;
