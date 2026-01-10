

const CVForm = ({
    cvData,
    onChange,
    onAddExperience,
    onRemoveExperience,
    onAddEducation,
    onRemoveEducation,
    onAddCertification,
    onRemoveCertification,
    onAddVolunteer,
    onRemoveVolunteer
}) => {
    return (
        <div className="cv-form">
            <div className="form-section">
                <h2>Personal Summary</h2>
                <div className="input-group">
                    <label>Summary Statement</label>
                    <textarea
                        value={cvData.personal.summary}
                        onChange={(e) => onChange('personal', 'summary', e.target.value)}
                        placeholder="Brief summary of your professional background and goals..."
                        style={{ minHeight: '100px' }}
                    />
                </div>
            </div>

            <div className="form-section">
                <h2>Personal Details</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="input-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            value={cvData.personal.firstName || ''}
                            onChange={(e) => onChange('personal', 'firstName', e.target.value)}
                            placeholder="Jane"
                        />
                    </div>
                    <div className="input-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={cvData.personal.lastName || ''}
                            onChange={(e) => onChange('personal', 'lastName', e.target.value)}
                            placeholder="Doe"
                        />
                    </div>
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

                {/* New Personal Details */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="input-group">
                        <label>Age</label>
                        <input
                            type="text"
                            value={cvData.personal.age || ''}
                            onChange={(e) => onChange('personal', 'age', e.target.value)}
                            placeholder="e.g. 28"
                        />
                    </div>
                    <div className="input-group">
                        <label>Nationality</label>
                        <input
                            type="text"
                            value={cvData.personal.nationality || ''}
                            onChange={(e) => onChange('personal', 'nationality', e.target.value)}
                            placeholder="e.g. American"
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="input-group">
                        <label>State of Origin</label>
                        <input
                            type="text"
                            value={cvData.personal.stateOfOrigin || ''}
                            onChange={(e) => onChange('personal', 'stateOfOrigin', e.target.value)}
                            placeholder="e.g. California"
                        />
                    </div>
                    <div className="input-group">
                        <label>Address</label>
                        <input
                            type="text"
                            value={cvData.personal.address || ''}
                            onChange={(e) => onChange('personal', 'address', e.target.value)}
                            placeholder="e.g. 123 Tech Lane"
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={cvData.personal.email}
                            onChange={(e) => onChange('personal', 'email', e.target.value)}
                            placeholder="jane@example.com"
                        />
                    </div>
                    <div className="input-group">
                        <label>Phone</label>
                        <input
                            type="text"
                            value={cvData.personal.phone}
                            onChange={(e) => onChange('personal', 'phone', e.target.value)}
                            placeholder="+1 555-0123"
                        />
                    </div>
                </div>

                <div className="input-group">
                    <label>LinkedIn URL</label>
                    <input
                        type="text"
                        value={cvData.personal.linkedin}
                        onChange={(e) => onChange('personal', 'linkedin', e.target.value)}
                        placeholder="linkedin.com/in/janedoe"
                    />
                </div>
                <div className="input-group">
                    <label>Portfolio URL</label>
                    <input
                        type="text"
                        value={cvData.personal.portfolio || ''}
                        onChange={(e) => onChange('personal', 'portfolio', e.target.value)}
                        placeholder="janedoe.dev"
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
                <h2>Certifications</h2>
                {(cvData.certifications || []).map((cert, index) => (
                    <div key={cert.id} style={{ marginBottom: '1.5rem', borderLeft: '3px solid #e5e7eb', paddingLeft: '1rem' }}>
                        <div className="input-group">
                            <label>Certification Name</label>
                            <input
                                type="text"
                                value={cert.name}
                                onChange={(e) => onChange('certifications', 'name', e.target.value, index)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Issuer</label>
                            <input
                                type="text"
                                value={cert.issuer}
                                onChange={(e) => onChange('certifications', 'issuer', e.target.value, index)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Year</label>
                            <input
                                type="text"
                                value={cert.year}
                                onChange={(e) => onChange('certifications', 'year', e.target.value, index)}
                            />
                        </div>
                        <button className="btn-remove" onClick={() => onRemoveCertification(cert.id)}>Remove</button>
                    </div>
                ))}
                <button className="btn-add" onClick={onAddCertification}>+ Add Certification</button>
            </div>

            <div className="form-section">
                <h2>Voluntary Experience</h2>
                {(cvData.volunteer || []).map((vol, index) => (
                    <div key={vol.id} style={{ marginBottom: '1.5rem', borderLeft: '3px solid #e5e7eb', paddingLeft: '1rem' }}>
                        <div className="input-group">
                            <label>Role</label>
                            <input
                                type="text"
                                value={vol.role}
                                onChange={(e) => onChange('volunteer', 'role', e.target.value, index)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Organization</label>
                            <input
                                type="text"
                                value={vol.organization}
                                onChange={(e) => onChange('volunteer', 'organization', e.target.value, index)}
                            />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="input-group">
                                <label>Start Date</label>
                                <input
                                    type="text"
                                    value={vol.startDate}
                                    onChange={(e) => onChange('volunteer', 'startDate', e.target.value, index)}
                                />
                            </div>
                            <div className="input-group">
                                <label>End Date</label>
                                <input
                                    type="text"
                                    value={vol.endDate}
                                    onChange={(e) => onChange('volunteer', 'endDate', e.target.value, index)}
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Description</label>
                            <textarea
                                value={vol.description}
                                onChange={(e) => onChange('volunteer', 'description', e.target.value, index)}
                            />
                        </div>
                        <button className="btn-remove" onClick={() => onRemoveVolunteer(vol.id)}>Remove</button>
                    </div>
                ))}
                <button className="btn-add" onClick={onAddVolunteer}>+ Add Voluntary Exp.</button>
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
