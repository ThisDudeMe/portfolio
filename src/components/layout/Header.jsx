import React, { useState, useEffect } from 'react';
import profile from '../../data/profile';
import { navigationIcons, socialIcons } from '../../data/icons';
import IconHolder from '../common/IconHolder';
import '../../assets/styles/components/layout/header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        // Simplified function for closing mobile menu in the future if needed
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav">
                <div className="nav-brand">{profile.name}</div>

                <ul className="nav-links">
                    <li>
                        <a href="#home" onClick={handleLinkClick}>
                            <IconHolder
                                icon={navigationIcons.home}
                                size="small"
                                className="nav-icon-holder"
                            />
                            Home
                        </a>
                    </li>

                    <li className="dropdown">
                        <a href="#about" onClick={handleLinkClick}>
                            <IconHolder
                                icon={navigationIcons.about}
                                size="small"
                                className="nav-icon-holder"
                            />
                            About
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#about-me" onClick={handleLinkClick}>About Me</a></li>
                            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                            <li><a href="#experience & education" onClick={handleLinkClick}>Experience & Education</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#projects" onClick={handleLinkClick}>
                            <IconHolder
                                icon={navigationIcons.projects}
                                size="small"
                                className="nav-icon-holder"
                            />
                            Projects
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
                            <IconHolder
                                icon={navigationIcons.contact}
                                size="small"
                                className="nav-icon-holder"
                            />
                            Contact
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    href={`mailto:${profile.email}`}
                                    onClick={handleLinkClick}
                                >
                                    <IconHolder
                                        icon={socialIcons.email}
                                        size="small"
                                        className="dropdown-icon-holder"
                                    />
                                    Email
                                </a>
                            </li>
                            <li>
                                <a
                                    href={profile.social.linkedin.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                >
                                    <IconHolder
                                        icon={socialIcons.linkedin}
                                        size="small"
                                        className="dropdown-icon-holder"
                                    />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href={profile.social.github.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                >
                                    <IconHolder
                                        icon={socialIcons.github}
                                        size="small"
                                        className="dropdown-icon-holder"
                                    />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={profile.resume.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                >
                                    <IconHolder
                                        icon={socialIcons.resume}
                                        size="small"
                                        className="dropdown-icon-holder"
                                    />
                                    Resume
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