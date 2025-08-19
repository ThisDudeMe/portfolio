import React from 'react';
import profile from '../../data/profile';
import { socialIcons } from '../../data/icons';
import IconHolder from '../common/IconHolder';
import '../../assets/styles/components/sections/contact.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2>Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-icon">
                                <IconHolder icon={socialIcons.email} size="large" />
                            </div>
                            <h3>Email</h3>
                            <p>
                                <a href={`mailto:${profile.email}`} id="email">
                                    {profile.email}
                                </a>
                            </p>
                            <p className="contact-description">
                                Feel free to email me anytime. I'll respond as soon as possible.
                            </p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <IconHolder icon={socialIcons.linkedin} size="large" />
                            </div>
                            <h3>LinkedIn</h3>
                            <p>
                                <a href={profile.social.linkedin.url} target="_blank" rel="noopener noreferrer" id="linkedin">
                                    linkedin.com/in/{profile.social.linkedin.username}
                                </a>
                            </p>
                            <p className="contact-description">
                                Connect with me on LinkedIn for professional networking.
                            </p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <IconHolder icon={socialIcons.github} size="large" />
                            </div>
                            <h3>GitHub</h3>
                            <p>
                                <a href={profile.social.github.url} target="_blank" rel="noopener noreferrer" id="github">
                                    github.com/{profile.social.github.username}
                                </a>
                            </p>
                            <p className="contact-description">
                                Check out my code repositories and open source contributions.
                            </p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <IconHolder icon={socialIcons.resume} size="large" />
                            </div>
                            <h3>Resume</h3>
                            <p>
                                <a href={profile.resume.url} target="_blank" rel="noopener noreferrer" id="resume">
                                    {profile.resume.displayText}
                                </a>
                            </p>
                            <p className="contact-description">
                                Get a copy of my latest resume to learn more about my experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;