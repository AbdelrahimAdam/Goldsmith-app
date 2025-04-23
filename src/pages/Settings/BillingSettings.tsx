// src/pages/Settings/BillingSettings.tsx

import React from 'react';

const BillingSettings = () => {
  return (
    <div className="space-y-4 border rounded-lg p-6 shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold">💳 Billing & Subscription</h2>
      <p className="text-gray-600">Manage your plan, payment methods, and invoices here.</p>

      <div className="bg-gray-100 p-4 rounded-md">
        <p><strong>Current Plan:</strong> Premium</p>
        <p><strong>Next Billing Date:</strong> May 30, 2025</p>
      </div>

      <button className="btn btn-secondary">Upgrade Plan</button>
      <button className="btn btn-outline">View Invoices</button>
    </div>
  );
};

export default BillingSettings;

