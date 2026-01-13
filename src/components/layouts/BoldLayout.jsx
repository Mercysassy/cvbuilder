import React from 'react';
import { WorkEntry, EducationEntry, Section } from './Shared';

const BoldLayout = ({ cvData, theme }) => {
    const accentStyle = { color: theme.accentColor };
    const borderStyle = { borderLeft: `5px solid ${theme.accentColor}`, paddingLeft: '1.5rem' };

    return (
        <div style={{ padding: '0 1rem' }}>
            <div style={{ marginBottom: '3rem', borderBottom: `8px solid ${theme.accentColor}`, paddingBottom: '2rem' }}>
                <h1 style={{ fontSize: '4rem', lineHeight: 1, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-2px', color: theme.accentColor }}>
                    {cvData.personal.firstName} {cvData.personal.lastName}
                </h1>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '0.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    {cvData.personal.title}
                </h2>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontWeight: 500 }}>
                    {cvData.personal.email && <span>{cvData.personal.email}</span>}
                    {cvData.personal.phone && <span>• {cvData.personal.phone}</span>}
                    {cvData.personal.linkedin && <span>• {cvData.personal.linkedin}</span>}
                    {cvData.personal.portfolio && <span>• {cvData.personal.portfolio}</span>}
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1px dashed ${theme.accentColor}40`, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', fontSize: '0.9rem' }}>
                    {cvData.personal.age && <div><strong style={{ color: theme.accentColor }}>Age:</strong> {cvData.personal.age}</div>}
                    {cvData.personal.nationality && <div><strong style={{ color: theme.accentColor }}>Nationality:</strong> {cvData.personal.nationality}</div>}
                    {cvData.personal.stateOfOrigin && <div><strong style={{ color: theme.accentColor }}>State:</strong> {cvData.personal.stateOfOrigin}</div>}
                    {cvData.personal.address && <div><strong style={{ color: theme.accentColor }}>Address:</strong> {cvData.personal.address}</div>}
                </div>
            </div>

            {cvData.personal.summary && (
                <div style={{ marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500 }}>
                    {cvData.personal.summary}
                </div>
            )}

            <div className="bold-grid">
                <div>
                    <div style={{ marginBottom: '1rem', background: theme.accentColor, color: 'white', padding: '0.5rem 1.5rem', display: 'inline-block', fontWeight: 700, textTransform: 'uppercase', transform: 'skewX(-15deg)', marginLeft: '1rem' }}>
                        <span style={{ display: 'inline-block', transform: 'skewX(15deg)' }}>Experience</span>
                    </div>
                    <div style={borderStyle}>
                        {cvData.experience.map(exp => (
                            <div key={exp.id} style={{ marginBottom: '2rem' }}>
                                <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{exp.jobTitle}</div>
                                <div style={{ color: theme.accentColor, fontWeight: 700, marginBottom: '0.25rem' }}>{exp.company}</div>
                                <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontStyle: 'italic', opacity: 0.8 }}>{exp.startDate} - {exp.endDate}</div>
                                <p style={{ lineHeight: 1.5 }}>{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div style={{ marginBottom: '3rem' }}>
                        <div style={{ marginBottom: '1rem', background: theme.accentColor, color: 'white', padding: '0.5rem 1.5rem', display: 'inline-block', fontWeight: 700, textTransform: 'uppercase', transform: 'skewX(-15deg)', marginLeft: '1rem' }}>
                            <span style={{ display: 'inline-block', transform: 'skewX(15deg)' }}>Education</span>
                        </div>
                        <div style={borderStyle}>
                            {cvData.education.map(edu => (
                                <div key={edu.id} style={{ marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>{edu.degree}</div>
                                    <div style={{ fontSize: '1rem' }}>{edu.institution}</div>
                                    <div style={{ color: theme.accentColor, fontWeight: 600 }}>{edu.year}</div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

            {cvData.certifications && cvData.certifications.length > 0 && (
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ marginBottom: '1rem', background: theme.accentColor, color: 'white', padding: '0.5rem 1.5rem', display: 'inline-block', fontWeight: 700, textTransform: 'uppercase', transform: 'skewX(-15deg)', marginLeft: '1rem' }}>
                        <span style={{ display: 'inline-block', transform: 'skewX(15deg)' }}>Certifications</span>
                    </div>
                    <div style={borderStyle}>
                        {cvData.certifications.map(cert => (
                            <div key={cert.id} style={{ marginBottom: '1rem' }}>
                                <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>{cert.name}</div>
                                <div style={{ fontSize: '0.95rem' }}>{cert.issuer}</div>
                                <div style={{ color: theme.accentColor, fontWeight: 600 }}>{cert.year}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {cvData.volunteer && cvData.volunteer.length > 0 && (
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ marginBottom: '1rem', background: theme.accentColor, color: 'white', padding: '0.5rem 1.5rem', display: 'inline-block', fontWeight: 700, textTransform: 'uppercase', transform: 'skewX(-15deg)', marginLeft: '1rem' }}>
                        <span style={{ display: 'inline-block', transform: 'skewX(15deg)' }}>Volunteering</span>
                    </div>
                    <div style={borderStyle}>
                        {cvData.volunteer.map(vol => (
                            <div key={vol.id} style={{ marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>{vol.role}</div>
                                <div style={{ color: theme.accentColor, fontWeight: 700 }}>{vol.organization}</div>
                                <div style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>{vol.startDate} - {vol.endDate}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div>
                <div style={{ marginBottom: '1rem', background: theme.accentColor, color: 'white', padding: '0.5rem 1.5rem', display: 'inline-block', fontWeight: 700, textTransform: 'uppercase', transform: 'skewX(-15deg)', marginLeft: '1rem' }}>
                    <span style={{ display: 'inline-block', transform: 'skewX(15deg)' }}>Skills</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {cvData.skills.split(',').map((skill, i) => (
                        <span key={i} style={{
                            border: `2px solid ${theme.accentColor}`,
                            padding: '0.25rem 0.75rem',
                            fontWeight: 600,
                            color: theme.accentColor
                        }}>
                            {skill.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default BoldLayout;
