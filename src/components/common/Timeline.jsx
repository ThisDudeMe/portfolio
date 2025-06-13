import React from 'react';
import { timelineIcons } from '../../data/icons';
import IconHolder from './IconHolder';
import '../../assets/styles/components/common/timeline.css';

const TimelineItem = ({ type, title, organization, date, description, isEven }) => {
    const isEducation = type === 'education';
    const icon = isEducation ? timelineIcons.education : timelineIcons.work;
    const iconClass = isEducation ? 'timeline-education-icon' : 'timeline-work-icon';

    return (
        <div className={`timeline-item ${type}`}>
            <div className="timeline-marker">
                <IconHolder
                    icon={icon}
                    size="medium"
                    className={iconClass}
                />
            </div>
            <div className="timeline-content">
                <h3>{title}</h3>
                <h4>{organization}</h4>
                <span className="timeline-date">{date}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Timeline = ({ items }) => {
    return (
        <div className="timeline-container">
            <div className="timeline">
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        {...item}
                        isEven={index % 2 === 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;