import React from 'react';
import profile from '../../data/profile';
import { programmingIcons, toolIcons, socialIcons } from '../../data/icons'; // Added socialIcons
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
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skills-grid">
                <span className="skill-tag"><span className="skill-icon">{programmingIcons.javascript}</span> JavaScript</span>
                <span className="skill-tag"><span className="skill-icon">{toolIcons.react}</span> React</span>
                <span className="skill-tag"><span className="skill-icon">{programmingIcons.html}</span> HTML5</span>
                <span className="skill-tag"><span className="skill-icon">{programmingIcons.css}</span> CSS3</span>
                <span className="skill-tag"><span className="skill-icon">{programmingIcons.jsx}</span> TypeScript</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skills-grid">
                <span className="skill-tag"><span className="skill-icon">{programmingIcons.javascript}</span> Node.js</span>
                <span className="skill-tag"><span className="skill-icon">{programmingIcons.python}</span> Python</span>
                <span className="skill-tag"><span className="skill-icon">{programmingIcons.javascript}</span> Express</span>
                <span className="skill-tag"><span className="skill-icon">{toolIcons.mysql}</span> MongoDB</span>
                <span className="skill-tag"><span className="skill-icon">{toolIcons.mysql}</span> PostgreSQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>AI & Machine Learning</h3>
              <div className="skills-grid">
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">OpenAI API</span>
                <span className="skill-tag">Data Analysis</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <div className="skills-grid">
                <span className="skill-tag"><span className="skill-icon">{socialIcons.github}</span> Git</span>
                <span className="skill-tag"><span className="skill-icon">{toolIcons.docker}</span> Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag"><span className="skill-icon">{toolIcons.visualStudio}</span> VS Code</span>
                <span className="skill-tag">Linux</span>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-education-section" id="experience & education">
          <h2>Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item experience">
              <div className="timeline-marker">
                <div className="timeline-icon experience-icon">💼</div>
              </div>
              <div className="timeline-content">
                <h3>Senior Software Engineer</h3>
                <h4>Tech Solutions Inc.</h4>
                <span className="timeline-date">2022 - Present</span>
                <p>Led development of scalable web applications using React and Node.js. Implemented AI-powered features that improved user engagement by 40%.</p>
              </div>
            </div>

            <div className="timeline-item experience">
              <div className="timeline-marker">
                <div className="timeline-icon experience-icon">💼</div>
              </div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <h4>Digital Innovations Ltd.</h4>
                <span className="timeline-date">2020 - 2022</span>
                <p>Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.</p>
              </div>
            </div>

            <div className="timeline-item education">
              <div className="timeline-marker">
                <div className="timeline-icon education-icon">🎓</div>
              </div>
              <div className="timeline-content">
                <h3>Master of Science in Computer Science</h3>
                <h4>University of Technology</h4>
                <span className="timeline-date">2018 - 2020</span>
                <p>Specialized in Artificial Intelligence and Machine Learning. Thesis focused on neural networks for natural language processing.</p>
              </div>
            </div>

            <div className="timeline-item experience">
              <div className="timeline-marker">
                <div className="timeline-icon experience-icon">💼</div>
              </div>
              <div className="timeline-content">
                <h3>Junior Developer</h3>
                <h4>StartUp Ventures</h4>
                <span className="timeline-date">2018 - 2020</span>
                <p>Built responsive web applications and mobile apps. Gained experience in agile development methodologies and version control systems.</p>
              </div>
            </div>

            <div className="timeline-item education">
              <div className="timeline-marker">
                <div className="timeline-icon education-icon">🎓</div>
              </div>
              <div className="timeline-content">
                <h3>Bachelor of Science in Software Engineering</h3>
                <h4>State University</h4>
                <span className="timeline-date">2014 - 2018</span>
                <p>Strong foundation in software development principles, algorithms, and data structures. Graduated Magna Cum Laude.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;