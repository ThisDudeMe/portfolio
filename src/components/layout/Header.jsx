import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import '../../assets/styles/components/layout/header.css';

const Header = () => {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <h2>Your Name</h2>
                </div>
                <ul className="nav-links">
                    <li className="nav-item">
                        <a href="#home">Home</a>
                        <div className="dropdown">
                            <div className="option">Option 1</div>
                            <div className="option">Option 2</div>
                            <div className="option">Option 3</div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#about">About</a>
                        <div className="dropdown">
                            <div className="option">Option 1</div>
                            <div className="option">Option 2</div>
                            <div className="option">Option 3</div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#projects">Projects</a>
                        <div className="dropdown">
                            <div className="option">Option 1</div>
                            <div className="option">Option 2</div>
                            <div className="option">Option 3</div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">Contact</a>
                        <div className="dropdown">
                            <div className="option">Option 1</div>
                            <div className="option">Option 2</div>
                            <div className="option">Option 3</div>
                        </div>
                    </li>
                    <li className="nav-item theme-toggle-item">
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
                        >
                            <span className="theme-toggle-icon">
                                {isDark ? '☀️' : '🌙'}
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;