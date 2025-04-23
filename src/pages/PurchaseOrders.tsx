import React from 'react';
import { useTranslation } from 'react-i18next';

const PurchaseOrders: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        {t('purchaseOrders.title')}
      </h1>

      {/* Placeholder: Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Placeholder Cards */}
        <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {t('purchaseOrders.totalOrders')}
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">0</h2>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {t('purchaseOrders.pendingPayments')}
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">0</h2>
        </div>
        {/* Add more placeholders as needed */}
      </div>

      {/* Placeholder: Table */}
      <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
        <p className="text-gray-600 dark:text-gray-300">{t('purchaseOrders.tableTitle')}</p>
        <div className="overflow-x-auto mt-2">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                <th className="p-2">{t('purchaseOrders.supplier')}</th>
                <th className="p-2">{t('purchaseOrders.date')}</th>
                <th className="p-2">{t('purchaseOrders.amount')}</th>
                <th className="p-2">{t('purchaseOrders.status')}</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder Rows */}
              <tr className="border-t dark:border-gray-600">
                <td className="p-2">—</td>
                <td className="p-2">—</td>
                <td className="p-2">—</td>
                <td className="p-2">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrders;

