import React from 'react';

const Header = ({ personal }) => (
    <div className="preview-header">
        <h1>{personal.fullName}</h1>
        <h2>{personal.title}</h2>
        <div className="contact-info">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.location && <span>{personal.location}</span>}
            {personal.linkedin && <span>{personal.linkedin}</span>}
        </div>
    </div>
);

const Section = ({ title, children }) => (
    <div className="preview-section">
        <h3>{title}</h3>
        {children}
    </div>
);

const WorkEntry = ({ entry }) => (
    <div className="entry">
        <div className="entry-header">
            <div className="entry-title">{entry.jobTitle}</div>
            <div className="entry-date">{entry.startDate} - {entry.endDate}</div>
        </div>
        <div className="entry-subtitle">{entry.company}</div>
        <div className="entry-description">{entry.description}</div>
    </div>
);

const EducationEntry = ({ entry }) => (
    <div className="entry">
        <div className="entry-header">
            <div className="entry-title">{entry.degree}</div>
            <div className="entry-date">{entry.year}</div>
        </div>
        <div className="entry-subtitle">{entry.institution}</div>
    </div>
);

const CVPreview = React.forwardRef(({ cvData }, ref) => {
    return (
        <div className="cv-preview-container">
            <div className="cv-page" ref={ref}>
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

                <Section title="Skills">
                    <div className="entry-description">
                        {cvData.skills}
                    </div>
                </Section>
            </div>
        </div>
    );
});

CVPreview.displayName = 'CVPreview';

export default CVPreview;
