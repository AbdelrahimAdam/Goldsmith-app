// src/routes/AdminRoutes.tsx
import React from 'react';
import { Route } from 'react-router-dom';

import AdminLayout from '../layouts/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManageUsersPage from '../pages/admin/ManageUsersPage';
import SystemSettingsPage from '../pages/admin/SystemSettingsPage';
import SecurityPage from '../pages/admin/SecurityPage';
import AuditLogsPage from '../pages/admin/AuditLogsPage';

import withRoleGuard from '../guards/withRoleGuard';

const GuardedSecurityPage = withRoleGuard(SecurityPage, ['superadmin']);

const AdminRoutes = () => (
  <>
    <Route
      path="/admin/dashboard"
      element={
        <AdminLayout layout="desktop"> {/* Pass the required layout prop */}
          <AdminDashboard />
        </AdminLayout>
      }
    />
    <Route
      path="/admin/users"
      element={
        <AdminLayout layout="desktop">
          <ManageUsersPage />
        </AdminLayout>
      }
    />
    <Route
      path="/admin/settings"
      element={
        <AdminLayout layout="desktop">
          <SystemSettingsPage />
        </AdminLayout>
      }
    />
    <Route
      path="/admin/security"
      element={
        <AdminLayout layout="desktop">
          <GuardedSecurityPage />
        </AdminLayout>
      }
    />
    <Route
      path="/admin/audit-logs"
      element={
        <AdminLayout layout="desktop">
          <AuditLogsPage />
        </AdminLayout>
      }
    />
  </>
);

export default AdminRoutes;

