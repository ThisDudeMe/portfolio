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
      title: 'Senior Software Engineer',
      organization: 'Tech Solutions Inc.',
      date: '2022 - Present',
      description: 'Led development of scalable web applications using React and Node.js. Implemented AI-powered features that improved user engagement by 40%.'
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'Digital Innovations Ltd.',
      date: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.'
    },
    {
      type: 'education',
      title: 'Master of Science in Computer Science',
      organization: 'University of Technology',
      date: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis focused on neural networks for natural language processing.'
    },
    {
      type: 'work',
      title: 'Junior Developer',
      organization: 'StartUp Ventures',
      date: '2018 - 2020',
      description: 'Built responsive web applications and mobile apps. Gained experience in agile development methodologies and version control systems.'
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Software Engineering',
      organization: 'State University',
      date: '2014 - 2018',
      description: 'Strong foundation in software development principles, algorithms, and data structures. Graduated Magna Cum Laude.'
    },
    // Additional items to demonstrate scrolling
    {
      type: 'work',
      title: 'Software Development Intern',
      organization: 'Tech Innovators',
      date: '2013 - 2014',
      description: 'Assisted in developing front-end components and participated in code reviews. Learned practical application of software engineering principles.'
    },
    {
      type: 'education',
      title: 'Web Development Bootcamp',
      organization: 'Code Academy',
      date: 'Summer 2013',
      description: 'Intensive three-month program focused on modern web development technologies and practices.'
    }
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