import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import '../../assets/styles/components/sections/projects.css';

const Projects = () => {
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js featuring user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project1',
      image: 'https://via.placeholder.com/400x200?text=E-Commerce+Platform'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides real-time weather data and forecasts for multiple cities using OpenWeather API.',
      technologies: ['JavaScript', 'CSS3', 'OpenWeather API', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project2',
      image: 'https://via.placeholder.com/400x200?text=Weather+Dashboard'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project3',
      image: 'https://via.placeholder.com/400x200?text=Task+Management'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React featuring dark/light mode, smooth animations, and modern design principles.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
      image: 'https://via.placeholder.com/400x200?text=Portfolio+Website'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;