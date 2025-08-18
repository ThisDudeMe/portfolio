import React from 'react';
import profile from '../../data/profile';
import { programmingIcons, toolIcons, socialIcons } from '../../data/icons';
import IconHolder from '../common/IconHolder';
import Timeline from '../common/Timeline';
import '../../assets/styles/components/sections/about.css';

const About = () => {
  // Define the timeline items
  const timelineItems = [
    {
      type: 'work',
      title: 'AI Developer',
      organization: 'Spelinsikt',
      date: '2025',
      description: 'Developed AI-driven solutions for helping users with gambling problems.'
    },
    {
      type: 'work',
      title: 'Full Stack Developer with focus on Data Analysis',
      organization: 'Mappi',
      date: '2024 - 2025',
      description: 'Developed a communicaton system between database and ai for helpin studets with math problems.'
    },
    {
      type: 'education',
      title: 'AI Developer',
      organization: 'Jensen Yrkeshögskola',
      date: '2023 - 2025',
      description: 'Studied software development with a focus on AI and machine learning. Gained hands-on experience in building intelligent systems.'
    },
    {
      type: 'education',
      title: 'Game Developer',
      organization: 'Futuregames',
      date: '2021 - 2022',
      description: 'Learned game development principles and practices, focusing on Unity and Unreal Engine. Developed skills in C# and game design.'
    },
  ];

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
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skills-grid">
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.html}
                    size="small"
                    className="skill-icon-holder"
                  />
                  HTML5
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.css}
                    size="small"
                    className="skill-icon-holder"
                  />
                  CSS3
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.javascript}
                    size="small"
                    className="skill-icon-holder"
                  />
                  JavaScript
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.jsx}
                    size="small"
                    className="skill-icon-holder"
                  />
                  JSX
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.react}
                    size="small"
                    className="skill-icon-holder"
                  />
                  React
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skills-grid">
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.python}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Python
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.csharp}
                    size="small"
                    className="skill-icon-holder"
                  />
                  C#
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.javascript}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Node.js
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.sql}
                    size="small"
                    className="skill-icon-holder"
                  />
                  SQL
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.django}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Django
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.flask}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Flask
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Databases & APIs</h3>
              <div className="skills-grid">
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.mysql}
                    size="small"
                    className="skill-icon-holder"
                  />
                  MySQL
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.sqlite}
                    size="small"
                    className="skill-icon-holder"
                  />
                  SQLite
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.postman}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Postman
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.javascript}
                    size="small"
                    className="skill-icon-holder"
                  />
                  RESTful APIs
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Game Development</h3>
              <div className="skills-grid">
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.unity}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Unity
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.unrealEngine}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Unreal Engine
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.csharp}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Unity C#
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <div className="skills-grid">
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.docker}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Docker
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={socialIcons.github}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Git/GitHub
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.visualStudio}
                    size="small"
                    className="skill-icon-holder"
                  />
                  VS Code
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={toolIcons.davinciResolve}
                    size="small"
                    className="skill-icon-holder"
                  />
                  DaVinci Resolve
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h3>AI & Machine Learning</h3>
              <div className="skills-grid">
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.python}
                    size="small"
                    className="skill-icon-holder"
                  />
                  TensorFlow
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.python}
                    size="small"
                    className="skill-icon-holder"
                  />
                  PyTorch
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.python}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Scikit-learn
                </span>
                <span className="skill-tag">
                  <IconHolder
                    icon={programmingIcons.python}
                    size="small"
                    className="skill-icon-holder"
                  />
                  Data Analysis
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-education-section" id="experience & education">
          <h2>Experience & Education</h2>
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
};

export default About;