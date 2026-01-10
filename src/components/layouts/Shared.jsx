import React from 'react';

export const Header = ({ personal }) => (
    <div className="preview-header">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1.5fr) 1fr', gap: '2rem', alignItems: 'start' }}>
            <div className="header-main">
                <h1 style={{ lineHeight: 1.1, marginBottom: '0.25rem' }}>{personal.firstName} {personal.lastName}</h1>
                <h2 style={{ fontSize: '1.25rem', color: 'var(--cv-accent)', opacity: 0.9 }}>{personal.title}</h2>
            </div>

            <div className="header-details" style={{ fontSize: '0.85rem', lineHeight: 1.5, borderLeft: '1px solid #ddd', paddingLeft: '1rem' }}>
                {personal.age && <div><strong>Age:</strong> {personal.age}</div>}
                {personal.nationality && <div><strong>Nationality:</strong> {personal.nationality}</div>}
                {personal.stateOfOrigin && <div><strong>State of Origin:</strong> {personal.stateOfOrigin}</div>}
                {personal.address && <div><strong>Address:</strong> {personal.address}</div>}
            </div>
        </div>

        <div className="contact-info" style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.linkedin && <span>LinkedIn: {personal.linkedin}</span>}
            {personal.portfolio && <span>Portfolio: {personal.portfolio}</span>}
        </div>
    </div>
);

export const Section = ({ title, children, className = '' }) => (
    <div className={`preview-section ${className}`}>
        <h3>{title}</h3>
        {children}
    </div>
);

export const WorkEntry = ({ entry }) => (
    <div className="entry">
        <div className="entry-header">
            <div className="entry-title">{entry.jobTitle}</div>
            <div className="entry-date">{entry.startDate} - {entry.endDate}</div>
        </div>
        <div className="entry-subtitle">{entry.company}</div>
        <div className="entry-description">{entry.description}</div>
    </div>
);

export const EducationEntry = ({ entry }) => (
    <div className="entry">
        <div className="entry-header">
            <div className="entry-title">{entry.degree}</div>
            <div className="entry-date">{entry.year}</div>
        </div>
        <div className="entry-subtitle">{entry.institution}</div>
    </div>
);

export const CertificationEntry = ({ entry }) => (
    <div className="entry" style={{ marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
            <div>{entry.name}</div>
            <div>{entry.year}</div>
        </div>
        <div style={{ fontSize: '0.9rem', color: '#666' }}>{entry.issuer}</div>
    </div>
);

export const VolunteerEntry = ({ entry }) => (
    <div className="entry">
        <div className="entry-header">
            <div className="entry-title">{entry.role}</div>
            <div className="entry-date">{entry.startDate} - {entry.endDate}</div>
        </div>
        <div className="entry-subtitle">{entry.organization}</div>
        <div className="entry-description">{entry.description}</div>
    </div>
);
