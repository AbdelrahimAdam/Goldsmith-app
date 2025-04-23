// src/pages/Settings/NotificationSettings.tsx

import React, { useState } from 'react';

const NotificationSettings = () => {
  const [emailNotify, setEmailNotify] = useState(true);
  const [smsNotify, setSmsNotify] = useState(false);

  return (
    <div className="space-y-4 border rounded-lg p-6 shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold">🔔 Notifications</h2>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={emailNotify}
          onChange={() => setEmailNotify(!emailNotify)}
        />
        <span>Email Alerts</span>
      </label>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={smsNotify}
          onChange={() => setSmsNotify(!smsNotify)}
        />
        <span>SMS Alerts</span>
      </label>

      <button className="btn btn-primary">Save Preferences</button>
    </div>
  );
};

export default NotificationSettings;

