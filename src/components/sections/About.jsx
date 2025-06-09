import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import '../../assets/styles/components/sections/about.css';

const About = () => {
  const { theme } = useTheme();

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'REST APIs'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] }
  ];

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Developed responsive web applications using React and modern JavaScript.'
    },
    {
      title: 'Web Developer',
      company: 'Startup Inc',
      period: '2021 - 2022',
      description: 'Built full-stack applications and collaborated with design teams.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="bio">
              <h3>My Story</h3>
              <p>
                I'm a passionate full-stack developer with over 3 years of experience
                creating web applications that solve real-world problems. I love working
                with modern technologies and am always eager to learn new skills.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </div>

            <div className="experience">
              <h3>Experience</h3>
              <div className="experience-list">
                {experience.map((job, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <h4 className="job-title">{job.title}</h4>
                      <span className="job-period">{job.period}</span>
                    </div>
                    <p className="job-company">{job.company}</p>
                    <p className="job-description">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h4 className="skill-category-title">{skillGroup.category}</h4>
                  <ul className="skill-list">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="skill-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;