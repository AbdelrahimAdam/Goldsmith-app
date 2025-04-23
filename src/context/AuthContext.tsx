// src/context/AuthContext.tsx
import React, { createContext, useContext } from 'react';

interface AuthContextType {
  user: { id: string; role: string } | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // You can update this with real auth logic later
  const mockUser = { id: '123', role: 'superadmin' };

  return (
    <AuthContext.Provider value={{ user: mockUser, isAuthenticated: true }}>
      {children}
    </AuthContext.Provider>
  );
};

