
import React from 'react';

const Hero = () => {
	return (
		<section style={styles.section} aria-label="Hero">
			<div style={styles.container}>
				<div style={styles.text}>
					<h1 style={styles.title}>Hi, I'm Ashutosh</h1>
					<p style={styles.subtitle}>
						A Frontend Developer building accessible, responsive web apps. I
						focus on performance, clean UI and delightful user experiences.
					</p>
					<div style={styles.actions}>
						<a href="#projects" style={{...styles.button, ...styles.primary}}>View Projects</a>
						<a href="#contact" style={{...styles.button, ...styles.ghost}}>Contact Me</a>
					</div>
					<div style={styles.social}>
						<a href="https://github.com/" aria-label="GitHub" style={styles.socialLink}>GitHub</a>
						<a href="https://www.linkedin.com/" aria-label="LinkedIn" style={styles.socialLink}>LinkedIn</a>
						<a href="mailto:you@example.com" aria-label="Email" style={styles.socialLink}>Email</a>
					</div>
				</div>

				<div style={styles.card} aria-hidden>
                    <div style={styles.avatar} />
                   
				</div>
			</div>
		</section>
	);
};

const styles = {
	section: {
		padding: '4rem 1rem',
		background: 'linear-gradient(180deg, #0f172a 0%, #071033 100%)',
        color: '#e6eef8',
        minHeight: 'min(100dvh, 100vh)',
        display: 'flex',
        alignItems: 'center',
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
	text: {
		flex: '1 1 420px',
	},
	title: {
		fontSize: 40,
		margin: '0 0 12px 0',
		lineHeight: 1.05,
	},
	subtitle: {
		margin: '0 0 20px 0',
		color: '#c7d2fe',
		maxWidth: 620,
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
		display: 'flex',
		gap: 12,
		marginTop: 6,
	},
	socialLink: {
		color: '#9ca3ff',
		textDecoration: 'none',
		fontSize: 14,
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

export default Hero;
