export const initialCVData = {
    personal: {
        fullName: "Jane Doe",
        title: "React Developer",
        email: "jane.doe@example.com",
        phone: "+1 555-CV-BUILD",
        linkedin: "linkedin.com/in/janedoe",
        location: "San Francisco, CA"
    },
    experience: [
        {
            id: 1,
            jobTitle: "Senior Frontend Engineer",
            company: "Innovatech Solutions",
            startDate: "2022-01",
            endDate: "Present",
            description: "• Led a team of 4 engineers in developing a new user-facing dashboard.\n• Increased page load performance by 30% using React.memo and code splitting."
        },
        {
            id: 2,
            jobTitle: "Frontend Developer",
            company: "WebCorp Inc.",
            startDate: "2019-06",
            endDate: "2021-12",
            description: "• Developed responsive web applications using React and Redux.\n• Collaborated with UX designers to implement new features."
        }
    ],
    education: [
        {
            id: 1,
            degree: "B.S. Computer Science",
            institution: "State University",
            year: "2018-2022"
        }
    ],
    skills: "React, JavaScript, HTML, CSS, Git, Node.js, TypeScript, Tailwind CSS"
};
