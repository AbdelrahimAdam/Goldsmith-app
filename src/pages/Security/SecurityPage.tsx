import React, { useState, useEffect } from 'react';
import InviteUserForm from './InviteUserForm';
import RolePermissionsTable from './RolePermissionsTable';

const roles = ['superadmin', 'admin', 'staff']; // List of roles
const availablePermissions = ['manage_users', 'edit_settings', 'view_logs']; // List of all available permissions

const SecurityPage: React.FC = () => {
  // State to hold the permissions for each role
  const [permissions, setPermissions] = useState<Record<string, string[]>>({
    superadmin: ['manage_users', 'edit_settings', 'view_logs'],
    admin: ['manage_users'],
    staff: [],
  });

  // Load permissions from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('permissions');
    if (stored) {
      setPermissions(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage when permissions change
  useEffect(() => {
    localStorage.setItem('permissions', JSON.stringify(permissions));
  }, [permissions]);

  // Toggle permissions for a role
  const togglePermission = (role: string, perm: string) => {
    setPermissions((prev) => {
      const perms = new Set(prev[role]);
      perms.has(perm) ? perms.delete(perm) : perms.add(perm);
      return { ...prev, [role]: Array.from(perms) };
    });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-2xl font-semibold">🔐 Role & Permissions</h1>

      {/* Invite user form */}
      <InviteUserForm onInvite={(userData) => console.log('Invited user:', userData)} />
      
      {/* Role permissions table */}
      <RolePermissionsTable
        roles={roles}
        permissions={permissions} // Pass the role-specific permissions, not availablePermissions
        onToggle={togglePermission}
      />
    </div>
  );
};

export default SecurityPage;

