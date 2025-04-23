import React from 'react';

interface Props {
  roles: string[]; // List of roles
  permissions: { [role: string]: string[] }; // Permissions for each role
  onToggle: (role: string, permission: string) => void; // Function to toggle permissions
}

const allPermissions = ['manage_users', 'edit_settings', 'view_logs']; // All available permissions

const RolePermissionsTable: React.FC<Props> = ({ roles, permissions, onToggle }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2 text-left">Role</th>
            {allPermissions.map((perm) => (
              <th key={perm} className="border px-3 py-2 text-center">
                {perm}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role}>
              <td className="border px-3 py-2 font-bold">{role}</td>
              {allPermissions.map((perm) => (
                <td key={perm} className="border px-3 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={permissions[role]?.includes(perm)} // Check if the role has the permission
                    onChange={() => onToggle(role, perm)} // Toggle permission onChange
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolePermissionsTable;

