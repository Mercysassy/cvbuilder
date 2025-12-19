import React from 'react';

const CVForm = ({ cvData, onChange, onAddExperience, onRemoveExperience, onAddEducation, onRemoveEducation }) => {
    return (
        <div className="cv-form">
            <div className="form-section">
                <h2>Personal Details</h2>
                <div className="input-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={cvData.personal.fullName}
                        onChange={(e) => onChange('personal', 'fullName', e.target.value)}
                        placeholder="e.g. Jane Doe"
                    />
                </div>
                <div className="input-group">
                    <label>Job Title</label>
                    <input
                        type="text"
                        value={cvData.personal.title}
                        onChange={(e) => onChange('personal', 'title', e.target.value)}
                        placeholder="e.g. React Developer"
                    />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={cvData.personal.email}
                        onChange={(e) => onChange('personal', 'email', e.target.value)}
                        placeholder="e.g. jane@example.com"
                    />
                </div>
                <div className="input-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        value={cvData.personal.phone}
                        onChange={(e) => onChange('personal', 'phone', e.target.value)}
                        placeholder="e.g. +1 555-0123"
                    />
                </div>
                <div className="input-group">
                    <label>Location</label>
                    <input
                        type="text"
                        value={cvData.personal.location}
                        onChange={(e) => onChange('personal', 'location', e.target.value)}
                        placeholder="e.g. San Francisco, CA"
                    />
                </div>
                <div className="input-group">
                    <label>LinkedIn / Portfolio</label>
                    <input
                        type="text"
                        value={cvData.personal.linkedin}
                        onChange={(e) => onChange('personal', 'linkedin', e.target.value)}
                        placeholder="e.g. linkedin.com/in/janedoe"
                    />
                </div>
            </div>

            <div className="form-section">
                <h2>Experience</h2>
                {cvData.experience.map((exp, index) => (
                    <div key={exp.id} style={{ marginBottom: '1.5rem', borderLeft: '3px solid #e5e7eb', paddingLeft: '1rem' }}>
                        <div className="input-group">
                            <label>Job Title</label>
                            <input
                                type="text"
                                value={exp.jobTitle}
                                onChange={(e) => onChange('experience', 'jobTitle', e.target.value, index)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Company</label>
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => onChange('experience', 'company', e.target.value, index)}
                            />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="input-group">
                                <label>Start Date</label>
                                <input
                                    type="text"
                                    value={exp.startDate}
                                    onChange={(e) => onChange('experience', 'startDate', e.target.value, index)}
                                />
                            </div>
                            <div className="input-group">
                                <label>End Date</label>
                                <input
                                    type="text"
                                    value={exp.endDate}
                                    onChange={(e) => onChange('experience', 'endDate', e.target.value, index)}
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Description</label>
                            <textarea
                                value={exp.description}
                                onChange={(e) => onChange('experience', 'description', e.target.value, index)}
                            />
                        </div>
                        <button className="btn-remove" onClick={() => onRemoveExperience(exp.id)}>Remove</button>
                    </div>
                ))}
                <button className="btn-add" onClick={onAddExperience}>+ Add Experience</button>
            </div>

            <div className="form-section">
                <h2>Education</h2>
                {cvData.education.map((edu, index) => (
                    <div key={edu.id} style={{ marginBottom: '1.5rem', borderLeft: '3px solid #e5e7eb', paddingLeft: '1rem' }}>
                        <div className="input-group">
                            <label>Degree</label>
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => onChange('education', 'degree', e.target.value, index)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Institution</label>
                            <input
                                type="text"
                                value={edu.institution}
                                onChange={(e) => onChange('education', 'institution', e.target.value, index)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Year</label>
                            <input
                                type="text"
                                value={edu.year}
                                onChange={(e) => onChange('education', 'year', e.target.value, index)}
                            />
                        </div>
                        <button className="btn-remove" onClick={() => onRemoveEducation(edu.id)}>Remove</button>
                    </div>
                ))}
                <button className="btn-add" onClick={onAddEducation}>+ Add Education</button>
            </div>

            <div className="form-section">
                <h2>Skills</h2>
                <div className="input-group">
                    <label>Skills (comma separated)</label>
                    <textarea
                        value={cvData.skills}
                        onChange={(e) => onChange('skills', null, e.target.value)}
                        placeholder="React, JavaScript, CSS..."
                        style={{ minHeight: '80px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CVForm;
