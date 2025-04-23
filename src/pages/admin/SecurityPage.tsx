import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Define available roles and permissions
const roles = ['superadmin', 'admin', 'staff'];
const availablePermissions = ['manage_users', 'edit_settings', 'view_logs'];

const SecurityPage: React.FC = () => {
  const { t } = useTranslation();

  // State to hold permissions for each role
  const [permissions, setPermissions] = useState<Record<string, string[]>>({
    superadmin: ['manage_users', 'edit_settings', 'view_logs'],
    admin: ['manage_users'],
    staff: [],
  });

  const togglePermission = (role: string, permission: string) => {
    setPermissions((prev) => {
      const perms = new Set(prev[role]);
      perms.has(permission) ? perms.delete(permission) : perms.add(permission);
      return { ...prev, [role]: Array.from(perms) };
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-yellow-400">{t('admin.security')}</h1>

      <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg text-gray-300">
        <p>{t('admin.securityDescription')}</p>
        {/* Render roles and permissions */}
        <div>
          <h2 className="text-xl text-yellow-300">{t('admin.manageRoles')}</h2>
          <table className="w-full table-auto text-gray-300">
            <thead>
              <tr>
                <th className="border px-3 py-2">Role</th>
                <th className="border px-3 py-2">Permissions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role}>
                  <td className="border px-3 py-2">{role}</td>
                  <td className="border px-3 py-2">
                    {availablePermissions.map((perm) => (
                      <div key={perm} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={permissions[role]?.includes(perm)}
                          onChange={() => togglePermission(role, perm)}
                          className="checkbox"
                        />
                        <label>{perm}</label>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;

