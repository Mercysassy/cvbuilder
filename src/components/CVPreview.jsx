import { forwardRef } from 'react';
import MinimalistLayout from './layouts/MinimalistLayout';
import ProfessionalLayout from './layouts/ProfessionalLayout';
import ModernLayout from './layouts/ModernLayout';
import BoldLayout from './layouts/BoldLayout';
import CreativeLayout from './layouts/CreativeLayout';

// Remove old local components since we now use shared/layouts

const CVPreview = forwardRef(({ cvData, theme }, ref) => {
    // Determine which layout to render
    const renderLayout = () => {
        switch (theme.template) {
            case 'professional':
                return <ProfessionalLayout cvData={cvData} theme={theme} />;
            case 'modern':
                return <ModernLayout cvData={cvData} theme={theme} />;
            case 'bold':
                return <BoldLayout cvData={cvData} theme={theme} />;
            case 'creative':
                return <CreativeLayout cvData={cvData} theme={theme} />;
            case 'minimalist':
            default:
                return <MinimalistLayout cvData={cvData} theme={theme} />;
        }
    };

    return (
        <div className="cv-preview-container">
            <div
                className="cv-page"
                ref={ref}
                style={{
                    backgroundColor: theme.backgroundColor,
                    // We can also pass CSS vars if we want to rely on classes more
                    '--cv-accent': theme.accentColor,
                    '--cv-bg': theme.backgroundColor
                }}
            >
                {renderLayout()}
            </div>
        </div>
    );
});

CVPreview.displayName = 'CVPreview';

export default CVPreview;
