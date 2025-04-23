// src/pages/Settings/PasswordSettings.tsx

import React, { useState } from 'react';

const PasswordSettings = () => {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleUpdate = () => {
    if (newPass !== confirm) {
      alert('Passwords do not match');
      return;
    }
    // 🔐 Handle secure password update logic here
    console.log({ current, newPass });
  };

  return (
    <div className="space-y-4 border rounded-lg p-6 shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold">🔒 Change Password</h2>
      <input
        type="password"
        placeholder="Current Password"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        className="input"
      />
      <button
        onClick={handleUpdate}
        className="btn btn-primary"
      >
        Update Password
      </button>
    </div>
  );
};

export default PasswordSettings;

