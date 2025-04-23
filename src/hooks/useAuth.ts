import { useState, useEffect } from 'react';

type UserType = {
  role: string;
  [key: string]: string | boolean | number | undefined; // Enhanced type for user properties
};

type AuthReturnType = {
  user: UserType | null;
  isAuthenticated: boolean;
  logout: () => void;
};

const useAuth = (): AuthReturnType => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const checkAuth = () => {
    const token = localStorage.getItem('userToken');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        if (parsedUser && typeof parsedUser === 'object' && 'role' in parsedUser) {
          setUser(parsedUser);
          setIsAuthenticated(true);
        } else {
          throw new Error('Invalid user data');
        }
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
        setUser(null);
        setIsAuthenticated(false);
      }
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
    
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userToken');
    setUser(null);
    setIsAuthenticated(false);
    window.location.href = '/login'; // Redirect to login after logout
  };

  return { user, isAuthenticated, logout };
};

export { useAuth };

