import React from 'react';
import '../../assets/styles/components/common/projectCard.css';

const ProjectCard = ({ title, description, image, technologies, demoLink, codeLink }) => {
    // Generate a placeholder color based on project title if no image is provided
    const getColorFromTitle = (title) => {
        let hash = 0;
        for (let i = 0; i < title.length; i++) {
            hash = title.charCodeAt(i) + ((hash << 5) - hash);
        }

        const colors = [
            '#4493d4', // hover-highlight
            '#fca311', // standout-color
            '#1e3a8a', // darker blue
            '#14b8a6', // teal
            '#8b5cf6', // purple
        ];

        return colors[Math.abs(hash) % colors.length];
    };

    return (
        <div className="project-card">
            <div className="project-image">
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <div
                        className="project-image-placeholder"
                        style={{ backgroundColor: getColorFromTitle(title) }}
                    >
                        <span>{title.charAt(0)}</span>
                    </div>
                )}
                <div className="project-overlay">
                    <div className="project-links">
                        {demoLink && (
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                Live Demo
                            </a>
                        )}
                        {codeLink && (
                            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;