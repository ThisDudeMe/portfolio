import React from 'react';
import profile from '../../data/profile';
import { socialIcons, navigationIcons, toolIcons } from '../../data/icons';
import IconHolder from '../common/IconHolder';
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
              <li>
                <a href="#home">
                  <IconHolder icon={navigationIcons.home} size="small" className="footer-icon" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <IconHolder icon={navigationIcons.about} size="small" className="footer-icon" />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#projects">
                  <IconHolder icon={navigationIcons.projects} size="small" className="footer-icon" />
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <IconHolder icon={navigationIcons.contact} size="small" className="footer-icon" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <ul className="footer-links">
              <li>
                <a
                  href={profile.social.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <IconHolder icon={socialIcons.github} size="small" className="footer-icon" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconHolder icon={socialIcons.linkedin} size="small" className="footer-icon" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                >
                  <IconHolder icon={socialIcons.email} size="small" className="footer-icon" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume"
                >
                  <IconHolder icon={socialIcons.resume} size="small" className="footer-icon" />
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {profile.name}</p>
          <p className="footer-credit">
            Powered by <IconHolder icon={toolIcons.react} size="small" className="react-icon" /> React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;