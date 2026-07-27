import React from 'react';
import { useState } from "react";
import aboutpic from "../assets/aboutpic.png";

const About = () => {
    return (
        <section  id="about" style={styles.aboutsection}>
            <div className="max-w-5xl mx-auto text-center md:text-left" style={styles.container}>
                <h2 className="text-3xl top-0 font-bold " style={styles.title}>About Me</h2>
                <p className=" mb-10" style={styles.title2}>My introduction</p>

                <div className="flex flex-col md:flex-row items-center   gap-25">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/3">
                        <img style={styles.profilepic}
                            src={aboutpic}
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
                                { title: "TechStack", desc: "MERN",icon: "bx bx-user" },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-md flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                                >
                                    {item.icon && (
                                        <i className={`${item.icon} text-3xl text-gray-800 mb-2`} aria-hidden="true" />
                                    )}
                                    <div className="font-bold text-gray-800 ">{item.title}</div>
                                    <div className="text-sm text-gray-500">{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            I am a Computer Science student and Full-Stack Developer passionate about building modern web applications using React, Node.js, Express, and MongoDB. I enjoy learning new technologies and solving real-world problems through clean and efficient code.
                        </p>

                        <a
                            href="/Ashutosh-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.button}
                           
                        >
                            Download CV 📄
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );//#0c058f 
};



const styles = {
    aboutsection: {
        color: 'linear- gradient(180deg, #0f172a 0 %, #071033 100 %)',
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
        color: '#000723',
        display: 'flex',
        justifyContent: 'center',
    },
    title2: {
        color:'#0c058f',
        display: 'flex',
        justifyContent: 'center',
    },
    subtitle: {
        margin: '0 0 20px 0',
        color: '#c7d2fe',
        maxWidth: 620,
    },
    profilepic:{
        background:'linear-gradient(135deg, #1c5ba8, #691eeb)',
    },
    button: {
        padding: '10px 16px',
        borderRadius: 8,
        textDecoration: 'none',
        fontWeight: 600,
        color:'white',
        background:'#4f46e5'
    },
    
 
};



export default About;
