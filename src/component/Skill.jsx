import React from 'react';

const frontendSkills = [
    { name: "HTML", level: "Basic", icon: "bx bx-code-alt"  },
    { name: "CSS", level: "Advanced", icon: "bx bx-hash" },
    { name: "JavaScript", level: "Intermediate", icon: "bx bxl-javascript" },
    { name: "Bootstrap", level: "Intermediate", icon: "bx bxl-bootstrap" },
    { name: "Git", level: "Intermediate", icon: "bx bxl-git" },
    { name: "React", level: "Intermediate", icon: "bx bxl-react" },
];

const backendSkills = [
    { name: "PHP", level: "Intermediate", icon: "bx bxl-php" },
    { name: "Node JS", level: "Basic", icon: "bx bxl-nodejs" },
    { name: "Python", level: "Intermediate", icon: "bx bxl-python" },
    { name: "MySQL", level: "Intermediate", icon: "bx bx-data" },
    { name: "Firebase", level: "Intermediate", icon: "bx bx-server" },
    { name: "SQL", level: "Intermediate", icon: "bx bx-data" },
];

const Skill = () => {
    return (
        <section id="skills" style={styles.skillssection}>
            <div style={styles.container}>
                <h2 style={styles.title}>Skills</h2>
                <span style={styles.subtitle}>My technical level</span>

                <div className="flex flex-col md:flex-row items-center   gap-25" style={styles.skillscontainer}>
                    <div style={styles.skillcard}>
                        <h3 style={styles.cardtitle}>Frontend Developer</h3>

                        <div style={styles.skillsgrid}>
                            {frontendSkills.map((skill, index) => (
                                <div style={styles.skill} key={index}>
                                    {skill.icon && (
                                        <i className={`${skill.icon} text-3xl text-gray-800 mb-2`} aria-hidden="true" />
                                    )}
                                   
                                    <div>
                                        <h4 style={styles.skillname}>{skill.name}</h4>
                                        <span style={styles.skilllevel}>{skill.level}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={styles.skillcard}>
                        <h3 style={styles.cardtitle}>Backend Developer</h3>

                        <div style={styles.skillsgrid}>
                            {backendSkills.map((skill, index) => (
                                <div style={styles.skill} key={index}>
                                    {skill.icon && (
                                        <i className={`${skill.icon} text-3xl text-gray-800 mb-2`} aria-hidden="true" />
                                    )}
                                    <div>
                                        <h4 style={styles.skillname}>{skill.name}</h4>
                                        <span style={styles.skilllevel}>{skill.level}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    skillssection: {
        color: '#1f2937',
        padding: '4rem 1rem',
        background: 'white',
        minHeight: 'min(100dvh, 100vh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    title: {
        color: '#000723',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '3rem',
        fontWeight: 700,
        margin: '0',
    },
    subtitle: {
        display: 'flex',
        justifyContent: 'center',
        color: '#6b7280',
        marginTop: '.4rem',
        marginBottom: '3rem',
        fontSize: '1rem',
    },
    /*skillscontainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '2rem',
    },*/
    skillcard: {
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '25px',
        padding: '2.5rem',
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    },
    cardtitle: {
        textAlign: 'center',
        margin: '0 0 2rem',
        fontSize: '1.6rem',
        fontWeight: 600,
        color: '#1f2937',
    },
    skillsgrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '1.8rem',
    },
    skill: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
    },
    skillicon: {
        color: '#2563eb',
        fontSize: '18px',
        marginTop: '4px',
        flexShrink: 0,
    },
    skillname: {
        fontSize: '1.1rem',
        fontWeight: 600,
        margin: '0',
        color: '#1f2937',
    },
    skilllevel: {
        color: '#6b7280',
        fontSize: '0.9rem',
    },
};


    
export default Skill;
