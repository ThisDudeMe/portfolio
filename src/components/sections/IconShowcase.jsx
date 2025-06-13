import React from 'react';
import { iconSets } from '../../data/icons'; // Import iconSets from centralized file
import '../../assets/styles/components/sections/iconShowcase.css';

const IconShowcase = () => {
    return (
        <section className="icon-showcase" id="icon-showcase">
            <div className="icon-showcase-container">
                <h2>Icon Showcase</h2>
                <p className="icon-showcase-intro">
                    Browse through these icons to see how they look in both light and dark themes.
                    Click on an icon to copy its import statement.
                </p>

                {iconSets.map((set, setIndex) => (
                    <div className="icon-category" key={setIndex}>
                        <h3>{set.title}</h3>
                        <div className="icon-grid">
                            {set.icons.map((iconItem, iconIndex) => (
                                <div className="theme-container" key={iconIndex}>
                                    {/* Light theme version */}
                                    <div
                                        className="icon-item light"
                                        onClick={() => {
                                            const importStatement = `import { ${iconItem.name} } from "react-icons/${iconItem.name.substring(0, 2).toLowerCase()}";`;
                                            navigator.clipboard.writeText(importStatement);
                                            alert(`Copied: ${importStatement}`);
                                        }}
                                    >
                                        <div className="icon-display">
                                            {iconItem.icon}
                                        </div>
                                        <div className="icon-name">{iconItem.name}</div>
                                        <div className="theme-label">Light</div>
                                    </div>

                                    {/* Dark theme version */}
                                    <div
                                        className="icon-item dark"
                                        onClick={() => {
                                            const importStatement = `import { ${iconItem.name} } from "react-icons/${iconItem.name.substring(0, 2).toLowerCase()}";`;
                                            navigator.clipboard.writeText(importStatement);
                                            alert(`Copied: ${importStatement}`);
                                        }}
                                    >
                                        <div className="icon-display">
                                            {iconItem.icon}
                                        </div>
                                        <div className="icon-name">{iconItem.name}</div>
                                        <div className="theme-label">Dark</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <p className="icon-showcase-intro" style={{ marginTop: '40px' }}>
                    <strong>Note:</strong> This split light/dark display is temporary and only for this showcase section.
                </p>
            </div>
        </section>
    );
};

export default IconShowcase;