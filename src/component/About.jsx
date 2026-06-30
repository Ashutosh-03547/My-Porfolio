import React from 'react';



const About = () => {
    return (
        <section  id="about" style={styles.aboutsection}>
            <div className="max-w-5xl mx-auto text-center md:text-left" style={styles.container}>
                <h2 className="text-3xl top-0 font-bold text-gray-800" style={styles.title}>About Me</h2>
                <p className="text-gray-500 mb-10" style={styles.title}>My introduction</p>

                <div className="flex flex-col md:flex-row items-center   gap-25">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/3">
                        <img
                            src="src/assets/Gemini_Generated_Image_ohbjvaohbjvaohbj.png"
                            alt="Profile"
                            className="rounded-2xl w-full h-auto shadow-lg"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-2/3" items-center style={styles.aboutcontent}>
                        <div className="grid grid-cols-3 gap-5 mb-6 ">
                            {[
                                { title: "Experience", desc: "Fresher", icon: "bx bx-award" },
                                { title: "Completed", desc: "8 + Projects", icon: "bx bx-folder-open" },
                                { title: "Contact", desc: "Online 24/7",icon: "bx bx-user" },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-md flex flex-col items-center justify-center text-center  ">
                                    {item.icon && (
                                        <i className={`${item.icon} text-3xl text-gray-800 mb-2`} aria-hidden="true" />
                                    )}
                                    <div className="font-bold text-gray-800 ">{item.title}</div>
                                    <div className="text-sm text-gray-500">{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Frontend developer, I create web pages with UI / UX user interface,
                            I have years of experience and many clients are happy with the
                            projects carried out.
                        </p>

                        <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                            Download CV 📄
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};



const styles = {
    aboutsection: {
        padding: '4rem 1rem',
        background: 'white',
        minHeight: 'min(100dvh, 100vh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    aboutcontent: {
        
    },
    text: {
        flex: '1 1 420px',
    },
    title: {
        display: 'flex',
       
        justifyContent: 'center',
    },
    subtitle: {
        margin: '0 0 20px 0',
        color: '#c7d2fe',
        maxWidth: 620,
    },
   
    button: {
        padding: '10px 16px',
        borderRadius: 8,
        textDecoration: 'none',
        fontWeight: 600,
    },
    
 
    card: {
        width: 220,
        height: 220,
        borderRadius: 16,
        background: 'linear-gradient(135deg, rgba(79,70,229,0.18), rgba(16,185,129,0.08))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 220px',
    },
    avatar: {
        width: 160,
        height: 160,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #60a5fa, #7c3aed)',
        boxShadow: '0 8px 30px rgba(2,6,23,0.6)'
    }
};



export default About;
