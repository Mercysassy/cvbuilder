import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import { initialCVData } from './data/initialState';
import ThemeEditor from './components/ThemeEditor';
import './index.css';

function App() {
    const [cvData, setCvData] = useState(initialCVData);
    const [theme, setTheme] = useState({
        template: 'minimalist',
        accentColor: '#000000',
        backgroundColor: '#ffffff'
    });
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${cvData.personal.firstName}_${cvData.personal.lastName}_CV`,
        pageStyle: `
            @page {
                size: auto;
                margin: 0.5in;
            }
        `
    });

    const handleChange = (section, field, value, index = null) => {
        setCvData(prev => {
            // Handle simple fields (skills)
            if (section === 'skills') {
                return { ...prev, skills: value };
            }

            // Handle nested objects (personal)
            if (section === 'personal') {
                return {
                    ...prev,
                    personal: {
                        ...prev.personal,
                        [field]: value
                    }
                };
            }

            // Handle arrays (experience, education)
            if (Array.isArray(prev[section]) && index !== null) {
                const newArray = [...prev[section]];
                newArray[index] = { ...newArray[index], [field]: value };
                return { ...prev, [section]: newArray };
            }

            return prev;
        });
    };

    const addExperience = () => {
        setCvData(prev => ({
            ...prev,
            experience: [
                ...prev.experience,
                {
                    id: Date.now(),
                    jobTitle: 'New Position',
                    company: 'Company Name',
                    startDate: '2023',
                    endDate: 'Present',
                    description: 'Description of your role...'
                }
            ]
        }));
    };

    const removeExperience = (id) => {
        setCvData(prev => ({
            ...prev,
            experience: prev.experience.filter(item => item.id !== id)
        }));
    };

    const addEducation = () => {
        setCvData(prev => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    id: Date.now(),
                    degree: 'Degree',
                    institution: 'Institution',
                    year: '2023'
                }
            ]
        }));
    };

    const removeEducation = (id) => {
        setCvData(prev => ({
            ...prev,
            education: prev.education.filter(item => item.id !== id)
        }));
    };

    const addCertification = () => {
        setCvData(prev => ({
            ...prev,
            certifications: [
                ...prev.certifications || [],
                {
                    id: Date.now(),
                    name: 'Certification Name',
                    issuer: 'Issuer',
                    year: '2023'
                }
            ]
        }));
    };

    const removeCertification = (id) => {
        setCvData(prev => ({
            ...prev,
            certifications: (prev.certifications || []).filter(item => item.id !== id)
        }));
    };

    const addVolunteer = () => {
        setCvData(prev => ({
            ...prev,
            volunteer: [
                ...prev.volunteer || [],
                {
                    id: Date.now(),
                    role: 'Volunteer Role',
                    organization: 'Organization',
                    startDate: '2022',
                    endDate: 'Present',
                    description: 'Description of activity...'
                }
            ]
        }));
    };

    const removeVolunteer = (id) => {
        setCvData(prev => ({
            ...prev,
            volunteer: (prev.volunteer || []).filter(item => item.id !== id)
        }));
    };

    return (
        <div className="app-container">
            <header className="header">
                <h1>CV Builder</h1>
                <button className="btn-primary" onClick={handlePrint}>
                    Download PDF
                </button>
            </header>

            <main className="main-content">
                <div className="left-column">
                    <ThemeEditor theme={theme} setTheme={setTheme} />
                    <CVForm
                        cvData={cvData}
                        onChange={handleChange}
                        onAddExperience={addExperience}
                        onRemoveExperience={removeExperience}
                        onAddEducation={addEducation}
                        onRemoveEducation={removeEducation}
                    />
                </div>
                <CVPreview
                    ref={componentRef}
                    cvData={cvData}
                    theme={theme}
                />
            </main>
        </div>
    );
}

export default App;
