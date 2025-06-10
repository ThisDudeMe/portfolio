import React from 'react';
import '../../assets/styles/components/sections/about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p className="about-intro">
              I'm a passionate software engineer with expertise in system design and AI development. 
              I love creating innovative solutions that make a real impact.
            </p>
            <p className="about-description">
              With a strong foundation in modern web technologies and machine learning, I specialize 
              in building scalable applications and intelligent systems. My experience spans across 
              full-stack development, cloud architecture, and AI implementation.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;