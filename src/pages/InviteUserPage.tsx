// src/pages/InviteUserPage.tsx
import React, { useState } from 'react';

const InviteUserPage = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  const handleInvite = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ email, role });
    localStorage.setItem('users', JSON.stringify(users));
    alert(`User ${email} invited with role ${role}`);
    setEmail('');
    setRole('user');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Invite New User</h2>
      <input
        type="email"
        placeholder="User email"
        className="w-full border p-2 rounded mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        className="w-full border p-2 rounded mb-3"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="manager">Manager</option>
        <option value="superadmin">Super Admin</option>
      </select>
      <button
        onClick={handleInvite}
        className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded text-white"
      >
        Invite
      </button>
    </div>
  );
};

export default InviteUserPage;

