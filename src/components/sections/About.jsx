import React from 'react';
import profile from '../../data/profile';
import timelineItems from '../../data/timeline';
import skillsData from '../../data/skills';
import IconHolder from '../common/IconHolder';
import Timeline from '../common/Timeline';
import '../../assets/styles/components/sections/about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text" id="about-me">
            <h2>About Me</h2>
            <p className="about-intro">
              {profile.about.intro}
            </p>
            <p className="about-description">
              {profile.about.description}
            </p>
          </div>
        </div>

        <div className="skills-section" id="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            {skillsData.map((category) => (
              <div key={category.category} className="skill-category">
                <h3>{category.category}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="skill-tag">
                      <IconHolder
                        icon={skill.icon}
                        size="small"
                        className="skill-icon-holder"
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-education-section" id="experience">
          <h2>Experience & Education</h2>
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
};

export default About;