import React from 'react';
import profile from '../../data/profile';
import { socialIcons } from '../../data/icons'; // Import icons from centralized file
import '../../assets/styles/components/layout/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p className="footer-about-text">
              {profile.name} - {profile.title}. Creating innovative solutions with modern technologies.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-social">
              <a
                href={profile.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                {socialIcons.github}
              </a>
              <a
                href={profile.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                {socialIcons.linkedin}
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="social-icon"
              >
                {socialIcons.email}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <p className="footer-credit">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;