// src/guards/withRoleGuard.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// Utility function to get user role from localStorage
const getUserRole = (): string | null => {
  try {
    const user = localStorage.getItem('user');
    if (!user) {
      return null; // No user data found
    }
    const parsed = JSON.parse(user);
    return parsed?.role || null; // Return role if present, otherwise null
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
};

// Higher-order component for role-based protection
function withRoleGuard<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,  // The component to be protected
  allowedRoles: string[]               // List of allowed roles
): React.FC<P> {
  return function RoleProtected(props: P) {
    const role = getUserRole(); // Get the current user's role from localStorage

    // If no role or user data exists, redirect to login
    if (!role) {
      return <Navigate to="/login" replace />;
    }

    // If role is not in the allowed roles list, redirect to an unauthorized page
    if (!allowedRoles.includes(role)) {
      return <Navigate to="/unauthorized" replace />;
    }

    // If role is valid, render the protected component
    return <Component {...props} />;
  };
}

export default withRoleGuard;

