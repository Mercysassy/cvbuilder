import React from 'react';
import { WorkEntry, EducationEntry } from './Shared';

const ProfessionalLayout = ({ cvData, theme }) => {
    return (
        <div className="professional-layout">
            {/* Left Sidebar */}
            <div className="sidebar professional-sidebar">
                <div className="sidebar-header">
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>{cvData.personal.firstName}<br />{cvData.personal.lastName}</h1>
                    <h2 style={{ fontSize: '1rem', fontWeight: 400, opacity: 0.9 }}>{cvData.personal.title}</h2>
                </div>

                <div className="sidebar-section">
                    <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>Personal Details</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                        {cvData.personal.age && <div><strong>Age:</strong> {cvData.personal.age}</div>}
                        {cvData.personal.nationality && <div><strong>Nationality:</strong> {cvData.personal.nationality}</div>}
                        {cvData.personal.stateOfOrigin && <div><strong>State:</strong> {cvData.personal.stateOfOrigin}</div>}
                        {cvData.personal.address && <div><strong>Address:</strong> {cvData.personal.address}</div>}
                    </div>
                </div>

                <div className="sidebar-section">
                    <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>Contact</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                        {cvData.personal.email && <div style={{ wordBreak: 'break-all' }}>{cvData.personal.email}</div>}
                        {cvData.personal.phone && <div>{cvData.personal.phone}</div>}
                        {cvData.personal.linkedin && <div style={{ wordBreak: 'break-all' }}>in/{cvData.personal.linkedin.replace('linkedin.com/in/', '')}</div>}
                        {cvData.personal.portfolio && <div style={{ wordBreak: 'break-all' }}>{cvData.personal.portfolio}</div>}
                    </div>
                </div>

                {cvData.skills && (
                    <div className="sidebar-section">
                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>Skills</h3>
                        <div style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                            {cvData.skills.split(',').map((skill, i) => (
                                <span key={i} style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', margin: '0 0.5rem 0.5rem 0' }}>{skill.trim()}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Right Main Content */}
            <div className="main" style={{ padding: '0' }}>
                {cvData.personal.summary && (
                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ color: theme.accentColor, borderBottom: `2px solid ${theme.accentColor}`, paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Profile</h3>
                        <p style={{ lineHeight: 1.6 }}>{cvData.personal.summary}</p>
                    </section>
                )}

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: theme.accentColor, borderBottom: `2px solid ${theme.accentColor}`, paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Experience</h3>
                    {cvData.experience.map(exp => (
                        <div key={exp.id} style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontWeight: 700 }}>
                                <div>{exp.jobTitle}</div>
                                <div>{exp.startDate} - {exp.endDate}</div>
                            </div>
                            <div style={{ color: '#666', marginBottom: '0.5rem', fontWeight: 600 }}>{exp.company}</div>
                            <p style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', lineHeight: 1.6 }}>{exp.description}</p>
                        </div>
                    ))}
                </section>

                <section>
                    <h3 style={{ color: theme.accentColor, borderBottom: `2px solid ${theme.accentColor}`, paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Education</h3>
                    {cvData.education.map(edu => (
                        <div key={edu.id} style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontWeight: 700 }}>
                                <div>{edu.degree}</div>
                                <div>{edu.year}</div>
                            </div>
                            <div>{edu.institution}</div>
                        </div>
                    ))}
                </section>

                {cvData.certifications && cvData.certifications.length > 0 && (
                    <section style={{ marginTop: '2rem' }}>
                        <h3 style={{ color: theme.accentColor, borderBottom: `2px solid ${theme.accentColor}`, paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Certifications</h3>
                        {cvData.certifications.map(cert => (
                            <div key={cert.id} style={{ marginBottom: '0.75rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                                    <div>{cert.name}</div>
                                    <div>{cert.year}</div>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>{cert.issuer}</div>
                            </div>
                        ))}
                    </section>
                )}

                {cvData.volunteer && cvData.volunteer.length > 0 && (
                    <section style={{ marginTop: '2rem' }}>
                        <h3 style={{ color: theme.accentColor, borderBottom: `2px solid ${theme.accentColor}`, paddingBottom: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Voluntary Experience</h3>
                        {cvData.volunteer.map(vol => (
                            <div key={vol.id} style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontWeight: 700 }}>
                                    <div>{vol.role}</div>
                                    <div>{vol.startDate} - {vol.endDate}</div>
                                </div>
                                <div style={{ color: '#666', marginBottom: '0.5rem', fontWeight: 600 }}>{vol.organization}</div>
                                <p style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', lineHeight: 1.6 }}>{vol.description}</p>
                            </div>
                        ))}
                    </section>
                )}
            </div>
        </div>
    );
};

export default ProfessionalLayout;
