import React from 'react';
import '../../assets/styles/components/layout/header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-brand">Ervin Török</div>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>

                    <li className="dropdown">
                        <a href="#about">About</a>
                        <ul className="dropdown-menu">
                            <li><a href="#about-me">About Me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#education">Education</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#projects">Projects</a>
                        <ul className="dropdown-menu">
                            <li><a href="#web-projects">Web Development</a></li>
                            <li><a href="#mobile-projects">Mobile Apps</a></li>
                            <li><a href="#data-projects">Data Science</a></li>
                            <li><a href="#open-source">Open Source</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#contact">Contact</a>
                        <ul className="dropdown-menu">
                            <li><a href="#email">Email</a></li>
                            <li><a href="#linkedin">LinkedIn</a></li>
                            <li><a href="#github">GitHub</a></li>
                            <li><a href="#resume">Resume</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;