import React, { useState } from 'react';
import ProjectCard from '../common/ProjectCard';
import '../../assets/styles/components/sections/projects.css';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
        {
            id: 1,
            title: "AI-Powered Task Manager",
            description: "A smart task management application that uses AI to prioritize and organize tasks based on user behavior and deadlines.",
            image: null, // Using placeholder
            technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
            demoLink: "https://example.com/demo1",
            codeLink: "https://github.com/username/project1",
            category: "web-projects"
        },
        {
            id: 2,
            title: "E-Commerce Mobile App",
            description: "A fully-featured e-commerce application with real-time inventory, secure payments, and personalized recommendations.",
            image: null, // Using placeholder
            technologies: ["React Native", "Firebase", "Stripe API", "Redux"],
            demoLink: "https://example.com/demo2",
            codeLink: "https://github.com/username/project2",
            category: "mobile-projects"
        },
        {
            id: 3,
            title: "Predictive Analytics Dashboard",
            description: "A data visualization platform that uses machine learning to forecast trends and provide actionable insights.",
            image: null, // Using placeholder
            technologies: ["Python", "Scikit-learn", "D3.js", "Flask", "PostgreSQL"],
            demoLink: "https://example.com/demo3",
            codeLink: "https://github.com/username/project3",
            category: "data-projects"
        },
        {
            id: 4,
            title: "Open Source Utility Library",
            description: "A utility library for JavaScript that simplifies common tasks and improves performance for web applications.",
            image: null, // Using placeholder
            technologies: ["JavaScript", "TypeScript", "Webpack", "Jest"],
            demoLink: "https://example.com/demo4",
            codeLink: "https://github.com/username/project4",
            category: "open-source"
        },
        {
            id: 5,
            title: "Personal Finance Tracker",
            description: "A web application that helps users track expenses, set budgets, and visualize spending patterns to improve financial habits.",
            image: null, // Using placeholder
            technologies: ["React", "Chart.js", "Express", "MongoDB"],
            demoLink: "https://example.com/demo5",
            codeLink: "https://github.com/username/project5",
            category: "web-projects"
        },
        {
            id: 6,
            title: "AR Navigation App",
            description: "A mobile application that uses augmented reality to provide intuitive navigation in complex indoor environments like malls and airports.",
            image: null, // Using placeholder
            technologies: ["Swift", "ARKit", "CoreLocation", "Firebase"],
            demoLink: "https://example.com/demo6",
            codeLink: "https://github.com/username/project6",
            category: "mobile-projects"
        }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2>My Projects</h2>

                <div className="project-filters">
                    <button
                        className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === 'web-projects' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('web-projects')}
                        id="web-projects"
                    >
                        Web Development
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === 'mobile-projects' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('mobile-projects')}
                        id="mobile-projects"
                    >
                        Mobile Apps
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === 'data-projects' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('data-projects')}
                        id="data-projects"
                    >
                        Data Science
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === 'open-source' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('open-source')}
                        id="open-source"
                    >
                        Open Source
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            demoLink={project.demoLink}
                            codeLink={project.codeLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;