import React from 'react';
import profile from '../../data/profile';
import { scrollToSection } from '../../utils/scrollUtils';
import '../../assets/styles/components/sections/hero.css';

const Hero = () => {
    const handleLearnMoreClick = () => {
        scrollToSection('about');
    };

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>
                    Hi! I'm {profile.name.split(' ')[0]} and I'm{' '}
                    <span className="highlight-text">
                        {profile.typingTexts[0]}
                    </span>
                </h1>
                <button
                    className="cta-button"
                    onClick={handleLearnMoreClick}
                    aria-label="Scroll to About section"
                >
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default Hero;