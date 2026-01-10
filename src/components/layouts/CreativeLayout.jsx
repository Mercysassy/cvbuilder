import React from 'react';
import { WorkEntry, EducationEntry, CertificationEntry, VolunteerEntry, Section } from './Shared';

const CreativeLayout = ({ cvData, theme }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 300, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    {cvData.personal.firstName} {cvData.personal.lastName}
                </h1>
                <h2 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: theme.accentColor,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    display: 'inline-block',
                    borderBottom: `1px solid ${theme.accentColor}`,
                    paddingBottom: '0.5rem'
                }}>
                    {cvData.personal.title}
                </h2>

                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    fontSize: '0.9rem',
                    color: '#666'
                }}>
                    {cvData.personal.email && <span>{cvData.personal.email}</span>}
                    {cvData.personal.phone && <span>{cvData.personal.phone}</span>}
                    {cvData.personal.linkedin && <span>{cvData.personal.linkedin}</span>}
                    {cvData.personal.portfolio && <span>{cvData.personal.portfolio}</span>}
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', flexWrap: 'wrap' }}>
                    {cvData.personal.nationality && <span><strong>Nationality:</strong> {cvData.personal.nationality}</span>}
                    {cvData.personal.stateOfOrigin && <span><strong>State:</strong> {cvData.personal.stateOfOrigin}</span>}
                    {cvData.personal.address && <span><strong>Address:</strong> {cvData.personal.address}</span>}
                    {cvData.personal.age && <span><strong>Age:</strong> {cvData.personal.age}</span>}
                </div>
                {cvData.personal.linkedin && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: theme.accentColor }}>{cvData.personal.linkedin}</div>
                )}
            </div>

            {cvData.personal.summary && (
                <div style={{ maxWidth: '80%', margin: '0 auto 4rem auto', fontSize: '1.1rem', lineHeight: 1.8, fontStyle: 'italic', color: '#444' }}>
                    {cvData.personal.summary}
                </div>
            )}

            <div style={{ textAlign: 'left', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                <Section title="Experience" className="creative-section">
                    {cvData.experience.map(exp => (
                        <div key={exp.id} style={{ marginBottom: '2.5rem', position: 'relative', paddingLeft: '2rem' }}>
                            <div style={{ position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', background: theme.accentColor }}></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                <div style={{ fontSize: '1.25rem', fontWeight: 400 }}>{exp.jobTitle}</div>
                                <div style={{ fontStyle: 'italic', color: '#888' }}>{exp.startDate} — {exp.endDate}</div>
                            </div>
                            <div style={{ textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '0.75rem', color: theme.accentColor }}>
                                {exp.company}
                            </div>
                            <p style={{ lineHeight: 1.7, color: '#555' }}>{exp.description}</p>
                        </div>
                    ))}
                </Section>

                {cvData.volunteer && cvData.volunteer.length > 0 && (
                    <Section title="Voluntary Experience" className="creative-section">
                        {cvData.volunteer.map(vol => (
                            <div key={vol.id} style={{ marginBottom: '2rem', position: 'relative', paddingLeft: '2rem' }}>
                                <div style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', border: `1px solid ${theme.accentColor}` }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{vol.role}</div>
                                    <div style={{ fontStyle: 'italic', color: '#888', fontSize: '0.9rem' }}>{vol.startDate} — {vol.endDate}</div>
                                </div>
                                <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#555' }}>{vol.organization}</div>
                            </div>
                        ))}
                    </Section>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                    <Section title="Education">
                        {cvData.education.map(edu => (
                            <div key={edu.id} style={{ marginBottom: '1.5rem', borderLeft: `2px solid #eee`, paddingLeft: '1rem' }}>
                                <div style={{ fontWeight: 600 }}>{edu.degree}</div>
                                <div style={{ color: '#666' }}>{edu.institution}</div>
                                <div style={{ fontSize: '0.9rem', color: theme.accentColor }}>{edu.year}</div>
                            </div>
                        ))}
                    </Section>

                    <Section title="Skills">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {cvData.skills.split(',').map((skill, i) => (
                                <span key={i} style={{
                                    background: '#f3f4f6',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    color: '#374151'
                                }}>
                                    {skill.trim()}
                                </span>
                            ))}
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default CreativeLayout;
