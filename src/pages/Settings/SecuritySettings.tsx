// src/pages/Settings/SecuritySettings.tsx

import React from 'react';

const SecuritySettings = () => {
  const handleEnable2FA = () => {
    // 🔐 Implement actual 2FA setup here
    alert('2FA Enabled (Placeholder)');
  };

  return (
    <div className="space-y-4 border rounded-lg p-6 shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold">🛡️ Security</h2>

      <div className="flex items-center justify-between">
        <span>Two-Factor Authentication (2FA)</span>
        <button className="btn btn-primary" onClick={handleEnable2FA}>
          Enable 2FA
        </button>
      </div>

      <div>
        <h3 className="text-md font-semibold mt-6 mb-2">Active Sessions</h3>
        <ul className="text-sm text-gray-500 list-disc list-inside">
          <li>Safari - macOS - IP: 192.168.1.23</li>
          <li>Chrome - Android - IP: 10.0.0.54</li>
        </ul>
      </div>
    </div>
  );
};

export default SecuritySettings;

