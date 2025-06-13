import React from 'react';
import '../../assets/styles/components/common/iconHolder.css';

const IconHolder = ({ icon, size = 'medium', className = '' }) => {
    const sizeClass = size === 'small' ? 'icon-holder-small' :
        size === 'large' ? 'icon-holder-large' :
            'icon-holder-medium';

    return (
        <span className={`icon-holder ${sizeClass} ${className}`}>
            {icon}
        </span>
    );
};

export default IconHolder;