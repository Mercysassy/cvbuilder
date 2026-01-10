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
        <div className="theme-editor">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: '#1f2937' }}>Customize Theme</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                {/* Template Selection */}
                <div className="control-group">
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.75rem', color: '#4b5563' }}>Template</label>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {['minimalist', 'professional', 'modern', 'bold', 'creative'].map(template => (
                            <button
                                key={template}
                                onClick={() => setTheme(prev => ({ ...prev, template }))}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    border: `2px solid ${theme.template === template ? '#2563eb' : '#e5e7eb'}`,
                                    background: theme.template === template ? '#eff6ff' : 'white',
                                    color: theme.template === template ? '#2563eb' : '#374151',
                                    cursor: 'pointer',
                                    textTransform: 'capitalize',
                                    fontWeight: 500
                                }}
                            >
                                {template}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Accent Color */}
                <div className="control-group">
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.75rem', color: '#4b5563' }}>Accent Color</label>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <input
                            type="color"
                            value={theme.accentColor}
                            onChange={(e) => setTheme(prev => ({ ...prev, accentColor: e.target.value }))}
                            style={{ width: '40px', height: '40px', border: 'none', cursor: 'pointer', padding: 0, borderRadius: '6px', overflow: 'hidden' }}
                        />
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {colors.map(color => (
                                <button
                                    key={color.name}
                                    onClick={() => setTheme(prev => ({ ...prev, accentColor: color.value }))}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: color.value,
                                        border: '2px solid white',
                                        outline: theme.accentColor === color.value ? '2px solid #2563eb' : 'none',
                                        cursor: 'pointer',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                                    }}
                                    title={color.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background Color */}
                <div className="control-group">
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.75rem', color: '#4b5563' }}>Background</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {backgrounds.map(bg => (
                            <button
                                key={bg.name}
                                onClick={() => setTheme(prev => ({ ...prev, backgroundColor: bg.value }))}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    border: `2px solid ${theme.backgroundColor === bg.value ? '#2563eb' : '#e5e7eb'}`,
                                    background: bg.value,
                                    color: bg.value === '#1f2937' ? 'white' : '#374151',
                                    cursor: 'pointer',
                                    fontWeight: 500
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
