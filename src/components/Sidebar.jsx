import React from 'react';

const Sidebar = ({ isOpen, onClose, children }) => {
    return (
        <>
            {/* Overlay for mobile (and desktop if preferred, but user asked to push content on desktop. 
                We'll handle the push in App layout, but an overlay is good for focus or mobile) 
                User said: "overlay the content on mobile and push the content slightly on desktop"
            */}
            <div
                className={`ui-sidebar-overlay ${isOpen ? 'open' : ''}`}
                onClick={onClose}
            />

            <div className={`ui-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h3>Customize Design</h3>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="sidebar-content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
