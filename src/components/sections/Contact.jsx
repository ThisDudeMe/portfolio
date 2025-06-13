import React from 'react';
import ContactForm from '../common/ContactForm';
import useEmailJS from '../../hooks/useEmailJS';
import profile from '../../data/profile';
import { socialIcons } from '../../data/icons';
import IconHolder from '../common/IconHolder';
import '../../assets/styles/components/sections/contact.css';

const Contact = () => {
    const { status, sendEmail } = useEmailJS();

    // This function will handle the email sending logic
    const handleFormSubmit = async (formData) => {
        // If EmailJS is not configured, use the fallback
        if (!profile.contact.emailService.serviceId) {
            console.log('EmailJS not configured, using fallback:', formData);

            // Fallback for demonstration
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ success: true });
                }, 1000);
            });
        }

        // Use our EmailJS hook to send the email
        return sendEmail(formData);
    };

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

                    <div className="contact-form-wrapper">
                        <h3>Send Me a Message</h3>
                        <ContactForm onSubmit={handleFormSubmit} />
                        {status.submitted && (
                            <div className={`form-notification ${status.success ? 'success' : 'error'}`}>
                                {status.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;