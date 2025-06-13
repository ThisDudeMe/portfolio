import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../../assets/styles/components/common/themeToggle.css';

const ThemeToggle = () => {
    // Initialize state with the stored preference or default to dark
    const [theme, setTheme] = useState(() => {
        // Check if there's a stored preference
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'light' ? 'light' : 'dark';
    });

    // Apply theme change to document root and store preference
    useEffect(() => {
        const root = document.documentElement;

        // Remove any existing theme classes
        root.classList.remove('light-theme', 'dark-theme');

        // Add the current theme class
        root.classList.add(`${theme}-theme`);

        // Store the preference
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    );
};

export default ThemeToggle;