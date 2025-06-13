import React, { useState, useEffect } from 'react';
import profile from '../../data/profile';
import { navigationIcons, socialIcons } from '../../data/icons'; // Import icons from centralized file
import '../../assets/styles/components/layout/header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownToggle = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const handleLinkClick = () => {
        setActiveDropdown(null);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav">
                <div className="nav-brand">{profile.name}</div>

                <ul className="nav-links">
                    <li>
                        <a href="#home" onClick={handleLinkClick}>
                            <span className="nav-icon">{navigationIcons.home}</span> Home
                        </a>
                    </li>

                    <li className="dropdown">
                        <a href="#about" onClick={handleLinkClick}>
                            <span className="nav-icon">{navigationIcons.about}</span> About
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#about-me" onClick={handleLinkClick}>About Me</a></li>
                            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                            <li><a href="#experience & education" onClick={handleLinkClick}>Experience & Education</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#projects" onClick={handleLinkClick}>
                            <span className="nav-icon">{navigationIcons.projects}</span> Projects
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#web-projects" onClick={handleLinkClick}>Web Development</a></li>
                            <li><a href="#mobile-projects" onClick={handleLinkClick}>Mobile Apps</a></li>
                            <li><a href="#data-projects" onClick={handleLinkClick}>Data Science</a></li>
                            <li><a href="#open-source" onClick={handleLinkClick}>Open Source</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#contact" onClick={handleLinkClick}>
                            <span className="nav-icon">{navigationIcons.contact}</span> Contact
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    href={`mailto:${profile.email}`}
                                    onClick={handleLinkClick}
                                >
                                    <span className="dropdown-icon">{socialIcons.email}</span> Email
                                </a>
                            </li>
                            <li>
                                <a
                                    href={profile.social.linkedin.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                >
                                    <span className="dropdown-icon">{socialIcons.linkedin}</span> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href={profile.social.github.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                >
                                    <span className="dropdown-icon">{socialIcons.github}</span> GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={profile.resume.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                >
                                    <span className="dropdown-icon">{socialIcons.resume}</span> Resume
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;