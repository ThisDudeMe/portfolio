import React from 'react';
import '../../assets/styles/components/sections/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Your Name</h1>
        <p>I'm a Developer passionate about creating amazing web experiences</p>
        <button className="cta-button">View My Work</button>
      </div>
    </section>
  );
};

export default Hero;