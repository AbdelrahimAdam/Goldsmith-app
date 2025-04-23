import React from 'react';
import { useTranslation } from 'react-i18next';

interface FilterBarProps {
  onSearch: (q: string) => void;
  onTypeChange: (type: string) => void;
  onDateChange: (from: string, to: string) => void;
}

export function FilterBar({ onSearch, onTypeChange, onDateChange }: FilterBarProps) {
  const { t } = useTranslation();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onTypeChange(e.target.value);
  };

  const handleDateFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(e.target.value, '');  // Set 'from' date
  };

  const handleDateToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange('', e.target.value);  // Set 'to' date
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder={t('common.search')}
        onChange={handleSearchChange}
        className="border rounded px-3 py-2 flex-1 min-w-[150px]"
      />
      <select
        onChange={handleTypeChange}
        className="border rounded px-3 py-2"
      >
        <option value="">{t('common.filterBy')}</option>
        <option value="buy">{t('transaction.purchase')}</option>
        <option value="sell">{t('transaction.sale')}</option>
      </select>
      <input
        type="date"
        onChange={handleDateFromChange}
        className="border rounded px-3 py-2"
      />
      <input
        type="date"
        onChange={handleDateToChange}
        className="border rounded px-3 py-2"
      />
    </div>
  );
}

