// src/pages/TransactionAnalytics.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AdminLayout from '../layouts/AdminLayout';
import { FilterBar } from '../components/ui/FilterBar';
import ChartPlaceholder from '../components/ui/ChartPlaceholder';
import { DataTable } from '../components/ui/DataTable';

// Define the type for each row of data
interface TransactionData {
  date: string;
  type: string;
  amount: number;
  price: number;
}

// Define Column type explicitly (optional if already exported from DataTable)
interface Column<T> {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
}

const TransactionAnalytics: React.FC = () => {
  const { t } = useTranslation('transaction');
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    from: '',
    to: '',
  });

  // Replace with real fetched or filtered data
  const data: TransactionData[] = [];

  const columns: Column<TransactionData>[] = [
    { key: 'date', label: t('date', 'Date') },
    { key: 'type', label: t('type', 'Type') },
    { key: 'amount', label: t('amount', 'Amount') },
    { key: 'price', label: t('price', 'Price') },
  ];

  return (
    <AdminLayout layout="mobile">
      <div className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen space-y-6 transition-all">
        <h1 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">{t('title', 'Transaction Analytics')}</h1>

        <FilterBar
          onSearch={(search) => setFilters((f) => ({ ...f, search }))}
          onTypeChange={(type) => setFilters((f) => ({ ...f, type }))}
          onDateChange={(from, to) => setFilters((f) => ({ ...f, from, to }))}
        />

        <ChartPlaceholder />

        <DataTable columns={columns} data={data} />
      </div>
    </AdminLayout>
  );
};

export default TransactionAnalytics;

