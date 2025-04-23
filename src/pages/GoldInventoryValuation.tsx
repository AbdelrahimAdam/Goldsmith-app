import React from 'react';
import { useTranslation } from 'react-i18next';
import AdminLayout from '../layouts/AdminLayout';

// Removed the api import for now
// import { fetchGoldData } from '../utils/api';

const GoldInventoryValuation: React.FC = () => {
  const { t, i18n } = useTranslation();   
  const isRtl = i18n.language === 'ar';   
        
  return (    
    <AdminLayout layout="mobile">
      <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-b from-yellow-100 to-gray-200 
rounded-x$
shadow-inner">
        <h1 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-4">
          {t('goldInventory.title')}
        </h1>
        <p className="text-gray-700 mb-6">
          {t('goldInventory.description')}
        </p>
  
        {/* Placeholder for gold items list */}
        <div className="bg-white rounded-lg shadow p-4 overflow-auto">
          <table className="min-w-full text-sm text-left rtl:text-right">
            <thead className="bg-yellow-200 text-yellow-900">
              <tr>
                <th className="px-4 py-2">{t('goldInventory.item')}</th>
                <th className="px-4 py-2">{t('goldInventory.weight')}</th>
                <th className="px-4 py-2">{t('goldInventory.purity')}</th>
                <th className="px-4 py-2">{t('goldInventory.value')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">—</td>
                <td className="px-4 py-2">—</td>
                <td className="px-4 py-2">—</td>
                <td className="px-4 py-2">—</td>
              </tr>
              {/* Add dynamic rows here later */}
            </tbody>      
          </table>  
        </div>
      </div>
    </AdminLayout>
  );
};
                
export default GoldInventoryValuation;

