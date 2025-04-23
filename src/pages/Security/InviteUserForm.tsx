// src/pages/Security/InviteUserForm.tsx
import React, { useState } from 'react';

const roles = ['superadmin', 'admin', 'staff'];

const InviteUserForm: React.FC<{ onInvite: (user: { email: string; role: string }) => void }> = ({
  onInvite,
}) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('staff');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert('Please enter an email.');
    onInvite({ email, role });
    setEmail('');
    setRole('staff');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md mx-auto 
mb-6">
      <h2 className="text-lg font-semibold mb-4">Invite User</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full rounded mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 w-full rounded mb-3"
      >
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
      >
        Send Invite
      </button>
    </form>
  );
};

export default InviteUserForm;

