import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LayoutWrapper from '../components/LayoutWrapper';

const InventoryAudits: React.FC = () => {
  const { t } = useTranslation();
  const [audits, setAudits] = useState<any[]>([]);
  const [checklist, setChecklist] = useState<any[]>([]);

  // Placeholder function for fetching audit data
  const fetchAudits = async () => {
    // Example: Fetch audit data from the API (replace with actual call)
    const fetchedAudits = [
      { id: 1, type: 'Inventory', date: '2025-04-01', result: 'Completed' },
      { id: 2, type: 'Quality Control', date: '2025-04-10', result: 'Pending' },
    ];
    setAudits(fetchedAudits);
  };

  // Placeholder function for fetching checklist data
  const fetchChecklist = async () => {
    // Example: Fetch checklist items from the API (replace with actual call)
    const fetchedChecklist = [
      { id: 1, task: 'Verify weight and purity', completed: false },
      { id: 2, task: 'Check gold quality based on standards', completed: true },
    ];
    setChecklist(fetchedChecklist);
  };

  useEffect(() => {
    fetchAudits();
    fetchChecklist();
  }, []);

  const toggleChecklistItem = (id: number) => {
    setChecklist(prevChecklist =>
      prevChecklist.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <LayoutWrapper>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {t('inventoryAudits.title', 'Inventory Audits & Quality Control')}
        </h1>

        {/* Inventory Audit Overview */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">
            {t('inventoryAudits.auditOverview', 'Audit Overview')}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t('inventoryAudits.auditDesc', 'Summary of past and upcoming inventory audits.')}
          </p>

          {/* Audit List */}
          <ul className="space-y-2">
            {audits.map(audit => (
              <li key={audit.id} className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-300">
                <span>{`${audit.type} - ${audit.date}`}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    audit.result === 'Completed' ? 'bg-green-200 text-green-600' : 'bg-yellow-200 text-yellow-600'
                  }`}
                >
                  {audit.result}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quality Control Checklist */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">
            {t('inventoryAudits.qualityChecklist', 'Quality Control Checklist')}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t('inventoryAudits.checklistDesc', 'Define and monitor gold purity and quality metrics.')}
          </p>

          {/* Checklist Table */}
          <ul className="space-y-2">
            {checklist.map(item => (
              <li key={item.id} className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">{item.task}</span>
                <button
                  className={`px-2 py-1 text-xs rounded-full ${
                    item.completed ? 'bg-green-200 text-green-600' : 'bg-gray-200 text-gray-600'
                  }`}
                  onClick={() => toggleChecklistItem(item.id)}
                >
                  {item.completed ? t('inventoryAudits.completed', 'Completed') : t('inventoryAudits.incomplete', 'Incomplete')}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Audit Log Table */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">
            {t('inventoryAudits.auditLog', 'Audit Log')}
          </h2>

          <table className="min-w-full text-sm text-left dark:text-gray-300">
            <thead className="bg-yellow-200 text-yellow-900">
              <tr>
                <th className="px-4 py-2">{t('inventoryAudits.auditDate', 'Date')}</th>
                <th className="px-4 py-2">{t('inventoryAudits.auditType', 'Audit Type')}</th>
                <th className="px-4 py-2">{t('inventoryAudits.auditResult', 'Result')}</th>
              </tr>
            </thead>
            <tbody>
              {audits.map(audit => (
                <tr key={audit.id} className="border-b">
                  <td className="px-4 py-2">{audit.date}</td>
                  <td className="px-4 py-2">{audit.type}</td>
                  <td className="px-4 py-2">{audit.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default InventoryAudits;

