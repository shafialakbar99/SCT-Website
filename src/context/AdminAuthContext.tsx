import React, { createContext, useContext, useState, useEffect } from 'react';
import { safeStorage } from '../utils/safeStorage';

interface AdminAuthContextType {
  isAuthenticated: boolean;
  adminUser: { name: string; role: string; email: string } | null;
  login: (pinOrPass: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

const ADMIN_STORAGE_KEY = 'hf_admin_session';

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return safeStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
  });

  const [adminUser, setAdminUser] = useState<{ name: string; role: string; email: string } | null>(() => {
    if (safeStorage.getItem(ADMIN_STORAGE_KEY) === 'true') {
      return {
        name: 'Super Admin',
        role: 'Central Executive',
        email: 'admin@humanityfirstbd.org'
      };
    }
    return null;
  });

  const login = (pinOrPass: string): boolean => {
    // Default PIN: 1234 or Password: admin / admin123
    const normalized = pinOrPass.trim();
    if (normalized === '1234' || normalized === 'admin' || normalized === 'admin123' || normalized === 'hf2026') {
      setIsAuthenticated(true);
      setAdminUser({
        name: 'Super Admin',
        role: 'Central Executive',
        email: 'admin@humanityfirstbd.org'
      });
      safeStorage.setItem(ADMIN_STORAGE_KEY, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminUser(null);
    safeStorage.removeItem(ADMIN_STORAGE_KEY);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, adminUser, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
