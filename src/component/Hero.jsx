
import React from 'react';

const Hero = () => {
	return (
		<section style={styles.section} aria-label="Hero">
			<div className=" "style={styles.container}>
				<div style={styles.text}>
					<h1 style={styles.title}>Hi, I'm Ashutosh</h1>
					<h3 style={styles.title2}>Fullstack Devloper</h3>
					<p style={styles.subtitle}>
						I build fast, responsive, and scalable full-stack web applications using React, Node.js, Express, and MongoDB. I enjoy creating clean user experiences and solving real-world problems.
					</p>
					<div style={styles.actions}>
						<a href="#projects" style={{...styles.button, ...styles.primary}}>View Projects</a>
						<a href="#contact" style={{...styles.button, ...styles.ghost}}>Contact Me</a>
					</div>
					
				</div>
				<div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 p-4" style={styles.social}>
					<a href="https://linkedin.com" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors">
						<i className="bx bxl-linkedin text-2xl"></i>
					</a>
					<a href="https://twitter.com" target="_blank" className="text-gray-700 hover:text-gray-900 transition-colors">
						<i className="bx bxl-twitter text-2xl"></i>
					</a>
					<a href="https://youtube.com" target="_blank" className="text-gray-700 hover:text-red-600 transition-colors">
						<i className="bx bxl-youtube text-2xl"></i>
					</a>
					<a href="https://github.com" target="_blank" className="text-gray-700 hover:text-black transition-colors">
						<i className="bx bxl-github text-2xl"></i>
					</a>
				</div>

				<div style={styles.card} aria-hidden>
                    <div style={styles.avatar} />
					<img style={styles.heropng}
						src="src/assets/heroprofile-removebg-preview.png"
						alt="Profile"
						className="rounded-2xl w-full h-auto shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

const styles = {
	section: {
		padding: '14rem 4rem 1rem 1rem',
		background: 'linear-gradient(180deg, #0f172a 0%, #071033 100%)',
        color: '#e6eef8',
        minHeight: 'min(100dvh, 100vh)',
        display: 'flex',
		alignItems: 'flex-start',
        justifyContent: 'center',
	},
	container: {
		maxWidth: 1100,
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: 32,
		flexWrap: 'wrap',
	},
	
	title: {
		
		fontSize: 40,
		margin: '0 0 0.5rem 0',
		lineHeight: 1.05,
	},
	title2: {

		fontSize: 24,
		margin: '0 0 1rem 0',
		lineHeight: 2,
	},
	subtitle: {
		margin: '0 0 2rem 0',
		color: '#c7d2fe',
		maxWidth: 600,
	},
	actions: {
		display: 'flex',
		gap: 12,
		marginBottom: 18,
	},
	button: {
		padding: '10px 16px',
		borderRadius: 8,
		textDecoration: 'none',
		fontWeight: 600,
	},
	primary: {
		background: '#4f46e5',
		color: 'white',
	},
	ghost: {
		background: 'transparent',
		color: '#c7d2fe',
		border: '1px solid rgba(199,210,254,0.12)',
	},
	social: {
		backgroundColor: 'white',       
		border: '1px solid #e5e7eb',      
		boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', 
		padding: '10px',                 
		borderRadius: '8px'
	},
	heropng: {
		width: 300,
		height: 300,
		borderRadius: '50%',
		background: 'linear-gradient(135deg, #1c5ba8, #691eeb)',
		boxShadow: '0 8px 30px rgba(2,6,23,0.6)',
	},
	
	/*card: {
		width: 250,
		height: 250,
		borderRadius: 16,
		background: 'linear-gradient(135deg, rgba(79,70,229,0.18), rgba(16,185,129,0.08))',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '0 0 220px',
	},*/
	/*avatar: {
		width: 160,
		height: 160,
		borderRadius: '50%',
		background: 'linear-gradient(135deg, #60a5fa, #7c3aed)',
		boxShadow: '0 8px 30px rgba(2,6,23,0.6)'
	}*/
};

export default Hero;
