'use client';
import {createContext, useState, useEffect} from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Get theme from localStorage or default to dark
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Prevent rendering children until theme is set (avoids hydration mismatch)
  if (!theme) return null;

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
};

export {ThemeContext, ThemeProvider};
