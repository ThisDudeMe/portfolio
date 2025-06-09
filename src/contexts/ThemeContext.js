import React, { createContext, useState, useContext, useEffect } from 'react';
import { applyTheme, getSavedTheme, detectPreferredTheme } from '../utils/themeUtils';

// Create context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
    // Get initial theme using the utility function
    const [theme, setTheme] = useState(() => {
        return getSavedTheme();
    });

    // Apply theme when it changes
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleSystemThemeChange = (e) => {
            // Only auto-update if user hasn't manually set a preference
            const hasManualPreference = localStorage.getItem('theme');
            if (!hasManualPreference) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        
        // Cleanup listener on unmount
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, []);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    // Reset to system preference
    const resetToSystemTheme = () => {
        localStorage.removeItem('theme');
        const systemTheme = detectPreferredTheme();
        setTheme(systemTheme);
    };

    // Context value
    const value = {
        theme,
        toggleTheme,
        setTheme,
        resetToSystemTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light'
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};