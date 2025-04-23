// src/routes/AppRoutes.tsx
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import useDeviceType from '../hooks/useDeviceType';

// Pages
import Login from '../pages/Login';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';
import NotFound from '../pages/NotFound';
import RequireSuperAdmin from '../auth/RequireSuperAdmin';
import AdminLayout from '../layouts/AdminLayout';

// General Pages
import DashboardPage from '../pages/DashboardPage';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import SettingsCustomization from '../pages/SettingsCustomization';
import GoldInventoryValuation from '../pages/GoldInventoryValuation';
import PriceTrackingPage from '../pages/PriceTrackingPage';
import PerformanceAnalytics from '../pages/PerformanceAnalytics';
import StaffRolesAccessControl from '../pages/StaffRolesAccessControl';
import ContactsManagement from '../pages/ContactsManagement';
import Reports from '../pages/Reports';
import EmployeeManagement from '../pages/EmployeeManagement';
import EmployeePayroll from '../pages/EmployeePayroll';
import RiskManagement from '../pages/RiskManagement';
import MultiBranchStorefront from '../pages/MultiBranchStorefront';
import RegulatoryCompliance from '../pages/RegulatoryCompliance';
import SupplierVendorRecords from '../pages/SupplierVendorRecords';
import CustomerCredit from '../pages/CustomerCredit';
import TransactionAnalytics from '../pages/TransactionAnalytics';
import InviteUserPage from '../pages/InviteUserPage';

// Admin Pages
import ManageUsersPage from '../pages/admin/ManageUsersPage';
import SystemSettingsPage from '../pages/admin/SystemSettingsPage';
import SecurityPage from '../pages/admin/SecurityPage';
import AuditLogsPage from '../pages/admin/AuditLogsPage';

// Role Guard
import withRoleGuard from '../guards/withRoleGuard';
const GuardedSecurityPage = withRoleGuard(SecurityPage, ['superadmin']);

const AppRoutes = (): JSX.Element => {
  const layout = useDeviceType();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* General User Pages */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/inventory" element={<GoldInventoryValuation />} />
        <Route path="/price-tracking" element={<PriceTrackingPage />} />
        <Route path="/analytics" element={<PerformanceAnalytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/customization" element={<SettingsCustomization />} />
        <Route path="/security" element={<GuardedSecurityPage />} />
        <Route path="/history" element={<Reports />} />
        <Route path="/store" element={<MultiBranchStorefront />} />
        <Route path="/employees" element={<EmployeeManagement />} />
        <Route path="/tasks" element={<StaffRolesAccessControl />} />
        <Route path="/contacts" element={<ContactsManagement />} />
        <Route path="/payments" element={<CustomerCredit />} />
        <Route path="/compliance" element={<RegulatoryCompliance />} />
        <Route path="/miners" element={<RiskManagement />} />
        <Route path="/merchants" element={<SupplierVendorRecords />} />
        <Route path="/transactions" element={<TransactionAnalytics />} />

        {/* Admin-only Routes */}
        <Route path="/admin/dashboard" 
          element={<RequireSuperAdmin><AdminLayout layout={layout}><AdminDashboard /></AdminLayout></RequireSuperAdmin>} />
        <Route path="/admin/users" 
          element={<RequireSuperAdmin><AdminLayout layout={layout}><ManageUsersPage /></AdminLayout></RequireSuperAdmin>} />
        <Route path="/admin/settings" 
          element={<RequireSuperAdmin><AdminLayout layout={layout}><SystemSettingsPage /></AdminLayout></RequireSuperAdmin>} 
/>
        <Route path="/admin/security" 
          element={<RequireSuperAdmin><AdminLayout layout={layout}><GuardedSecurityPage 
/></AdminLayout></RequireSuperAdmin>} />
        <Route path="/admin/audit-logs" 
          element={<RequireSuperAdmin><AdminLayout layout={layout}><AuditLogsPage /></AdminLayout></RequireSuperAdmin>} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

