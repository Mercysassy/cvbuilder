import React from 'react';

const colors = [
    { name: 'Black', value: '#000000' },
    { name: 'Blue', value: '#2563eb' },
    { name: 'Red', value: '#dc2626' },
    { name: 'Green', value: '#16a34a' },
    { name: 'Purple', value: '#9333ea' },
    { name: 'Teal', value: '#0d9488' },
];

const backgrounds = [
    { name: 'White', value: '#ffffff' },
    { name: 'Cream', value: '#fdfbf7' },
    { name: 'Dark', value: '#1f2937' },
];

const ThemeEditor = ({ theme, setTheme }) => {
    return (
        <div className="theme-editor-sidebar">

            {/* Choose Layout Section */}
            <div className="sidebar-section">
                <h4 className="sidebar-section-title">Choose Layout</h4>
                <div className="layout-grid">
                    {['minimalist', 'professional', 'modern', 'bold', 'creative'].map(template => (
                        <button
                            key={template}
                            onClick={() => setTheme(prev => ({ ...prev, template }))}
                            className={`layout-option ${theme.template === template ? 'active' : ''}`}
                        >
                            <div className={`preview-box preview-${template}`} />
                            <span>{template}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Color Palette Section */}
            <div className="sidebar-section">
                <h4 className="sidebar-section-title">Color Palette</h4>

                {/* Accent Color */}
                <div className="color-group">
                    <label>Accent</label>
                    <div className="color-options">
                        {colors.map(color => (
                            <button
                                key={color.name}
                                onClick={() => setTheme(prev => ({ ...prev, accentColor: color.value }))}
                                className={`color-circle ${theme.accentColor === color.value ? 'active' : ''}`}
                                style={{ backgroundColor: color.value }}
                                title={color.name}
                            />
                        ))}
                        <input
                            type="color"
                            value={theme.accentColor}
                            onChange={(e) => setTheme(prev => ({ ...prev, accentColor: e.target.value }))}
                            className="color-picker-input"
                        />
                    </div>
                </div>

                {/* Background Color */}
                <div className="color-group">
                    <label>Background</label>
                    <div className="bg-options">
                        {backgrounds.map(bg => (
                            <button
                                key={bg.name}
                                onClick={() => setTheme(prev => ({ ...prev, backgroundColor: bg.value }))}
                                className={`bg-option ${theme.backgroundColor === bg.value ? 'active' : ''}`}
                                style={{
                                    backgroundColor: bg.value,
                                    color: bg.value === '#1f2937' ? 'white' : '#374151'
                                }}
                            >
                                {bg.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeEditor;
