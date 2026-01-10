import React from 'react';
import { WorkEntry, EducationEntry, CertificationEntry, VolunteerEntry, Section } from './Shared';

const ModernLayout = ({ cvData, theme }) => {
    return (
        <div>
            {/* Banner Header */}
            {/* Banner Header */}
            <div className="modern-banner">
                <h1 style={{ fontSize: '3rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, marginBottom: '0.5rem' }}>{cvData.personal.firstName} {cvData.personal.lastName}</h1>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 300, opacity: 0.9 }}>{cvData.personal.title}</h2>
            </div>

            {/* Contact Bar */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                borderBottom: `1px solid ${theme.accentColor}`,
                paddingBottom: '1.5rem',
                marginBottom: '2rem',
                color: '#555'
            }}>
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
                <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f9fafb', borderRadius: '8px', borderLeft: `4px solid ${theme.accentColor}` }}>
                    <p style={{ fontSize: '1rem', lineHeight: 1.6, fontStyle: 'italic', color: '#4b5563' }}>
                        "{cvData.personal.summary}"
                    </p>
                </div>
            )}

            <div className="modern-grid">
                <div className="main-col">
                    <Section title="Experience">
                        {cvData.experience.map(exp => (
                            <WorkEntry key={exp.id} entry={exp} />
                        ))}
                    </Section>

                    <Section title="Education">
                        {cvData.education.map(edu => (
                            <EducationEntry key={edu.id} entry={edu} />
                        ))}
                    </Section>

                    {cvData.certifications && cvData.certifications.length > 0 && (
                        <Section title="Certifications">
                            {cvData.certifications.map(cert => (
                                <CertificationEntry key={cert.id} entry={cert} />
                            ))}
                        </Section>
                    )}

                    {cvData.volunteer && cvData.volunteer.length > 0 && (
                        <Section title="Voluntary Work">
                            {cvData.volunteer.map(vol => (
                                <VolunteerEntry key={vol.id} entry={vol} />
                            ))}
                        </Section>
                    )}
                </div>

                <div className="side-col">
                    <Section title="Skills">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {cvData.skills.split(',').map((skill, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: theme.accentColor }}></div>
                                    <span>{skill.trim()}</span>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default ModernLayout;
