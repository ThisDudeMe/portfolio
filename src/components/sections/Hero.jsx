import React, { useState, useEffect } from 'react';
import '../../assets/styles/components/sections/hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    const texts = [
        'a Software Engineer',
        'a System Designer',
        'an AI Developer'
    ];

    useEffect(() => {
        const currentText = texts[currentIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && charIndex < currentText.length) {
                // Typing
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                // Deleting
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === currentText.length) {
                // Finished typing, start deleting after pause
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && charIndex === 0) {
                // Finished deleting, move to next text
                setIsDeleting(false);
                setCurrentIndex((currentIndex + 1) % texts.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, currentIndex, texts]);

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>
                    Hi! I'm Ervin and I'm{' '}
                    <span className="typing-text">
                        {displayText}
                        <span className="cursor">|</span>
                    </span>
                </h1>
                <button className="cta-button">Learn More</button>
            </div>
        </section>
    );
};

export default Hero;