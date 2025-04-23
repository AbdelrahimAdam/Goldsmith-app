// src/pages/Settings/DeleteAccount.tsx

import React, { useState } from 'react';

const DeleteAccount = () => {
  const [confirming, setConfirming] = useState(false);

  const handleDelete = () => {
    if (confirming) {
      // 🔥 Actual delete logic here
      alert('Account Deleted (Placeholder)');
    } else {
      setConfirming(true);
    }
  };

  return (
    <div className="border border-red-500 rounded-lg p-6 shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-red-600">⚠️ Delete Account</h2>
      <p className="text-sm text-gray-500">
        This action is irreversible. All your data will be permanently deleted.
      </p>

      <button
        className={`mt-4 btn ${confirming ? 'btn-red' : 'btn-outline-red'}`}
        onClick={handleDelete}
      >
        {confirming ? 'Confirm Delete' : 'Delete My Account'}
      </button>
    </div>
  );
};

export default DeleteAccount;

