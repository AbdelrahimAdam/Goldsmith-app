// src/hooks/useAdminAccess.ts
import { useAuth } from '../context/AuthContext';

export function useAdminAccess() {
  const { user } = useAuth();
  return user?.role === 'superadmin';
}

