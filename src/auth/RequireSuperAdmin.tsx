// src/auth/RequireSuperAdmin.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// Utility function to get user role from localStorage
const getUserRole = (): string | null => {
  try {
    const user = localStorage.getItem('user');
    const parsed = user ? JSON.parse(user) : null;
    return parsed?.role || null;
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
};

// Protect a route only accessible by superadmin
const RequireSuperAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const role = getUserRole();

  // If no role is found or the role is not 'superadmin', redirect to login
  if (!role || role !== 'superadmin') {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default RequireSuperAdmin;

