import React from 'react';
import ProjectCard from '../common/ProjectCard';
import '../../assets/styles/components/sections/projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Project One",
            description: "Coming Soon",
            image: null,
            technologies: ["Coming Soon"],
            demoLink: null,
            codeLink: null
        },
        {
            id: 2,
            title: "Project Two",
            description: "Coming Soon",
            image: null,
            technologies: ["Coming Soon"],
            demoLink: null,
            codeLink: null
        },
        {
            id: 3,
            title: "Project Three",
            description: "Coming Soon",
            image: null,
            technologies: ["Coming Soon"],
            demoLink: null,
            codeLink: null
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
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