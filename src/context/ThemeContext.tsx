import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeMode } from '../types';
import { safeStorage } from '../utils/safeStorage';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = safeStorage.getItem('hf_theme');
    return (saved as ThemeMode) || 'hope-humanity';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    safeStorage.setItem('hf_theme', newTheme);
  };

  const toggleTheme = () => {
    const next = theme === 'hope-humanity' ? 'teal-coral' : 'hope-humanity';
    setTheme(next);
  };

  useEffect(() => {
    if (theme === 'teal-coral') {
      document.documentElement.setAttribute('data-theme', 'teal-coral');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
