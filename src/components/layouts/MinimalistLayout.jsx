import React from 'react';
import { Header, Section, WorkEntry, EducationEntry, CertificationEntry, VolunteerEntry } from './Shared';

const MinimalistLayout = ({ cvData, theme }) => {
    return (
        <div style={{ color: theme.accentColor }}>
            <Header personal={cvData.personal} />

            {cvData.personal.summary && (
                <Section title="Personal Summary">
                    <div className="entry-description">
                        {cvData.personal.summary}
                    </div>
                </Section>
            )}

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
                <Section title="Voluntary Experience">
                    {cvData.volunteer.map(vol => (
                        <VolunteerEntry key={vol.id} entry={vol} />
                    ))}
                </Section>
            )}

            <Section title="Skills">
                <div className="entry-description">
                    {cvData.skills}
                </div>
            </Section>
        </div>
    );
};

export default MinimalistLayout;
