import React from "react";

const Hero = () => {
	return (
		<section
			id="home"
			style={styles.section}
			className="px-5 lg:px-10"
		>
			<div
				className="max-w-6xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16"
			>
				{/* Text */}
				<div className="flex-1 text-center lg:text-left">
					<h1 style={styles.title}>Hi, I'm Ashutosh</h1>

					<h3 style={styles.title2}>Fullstack Developer</h3>

					<p style={styles.subtitle}>
						I build fast, responsive, and scalable full-stack web
						applications using React, Node.js, Express, and MongoDB.
						I enjoy creating clean user experiences and solving
						real-world problems.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
						<a
							href="#projects"
							style={{ ...styles.button, ...styles.primary }}
						>
							View Projects
						</a>

						<a
							href="#contact"
							style={{ ...styles.button, ...styles.ghost }}
						>
							Contact Me
						</a>
					</div>
				</div>

				{/* Image */}
				<div className="flex justify-center flex-1">
					<img
						src="src/assets/heroprofile-removebg-preview.png"
						alt="Profile"
						style={styles.heropng}
					/>
				</div>

				{/* Social Icons */}
				<div
					className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 flex-col gap-5"
					style={styles.social}
				>
					<a href="https://linkedin.com" target="_blank">
						<i className="bx bxl-linkedin text-2xl text-gray-700 hover:text-blue-600"></i>
					</a>

					<a href="https://twitter.com" target="_blank">
						<i className="bx bxl-twitter text-2xl text-gray-700 hover:text-sky-500"></i>
					</a>

					<a href="https://youtube.com" target="_blank">
						<i className="bx bxl-youtube text-2xl text-gray-700 hover:text-red-600"></i>
					</a>

					<a href="https://github.com" target="_blank">
						<i className="bx bxl-github text-2xl text-gray-700 hover:text-black"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

const styles = {
	section: {
		padding: "8rem 0 4rem",
		background: "linear-gradient(180deg,#0f172a 0%,#071033 100%)",
		color: "#e6eef8",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
	},

	title: {
		fontSize: "clamp(2.2rem,5vw,3.5rem)",
		marginBottom: "0.5rem",
		lineHeight: 1.1,
		fontWeight: "700",
	},

	title2: {
		fontSize: "clamp(1.3rem,3vw,2rem)",
		marginBottom: "1rem",
		color: "#fff",
	},

	subtitle: {
		maxWidth: "600px",
		color: "#c7d2fe",
		marginBottom: "2rem",
		lineHeight: 1.8,
	},

	button: {
		padding: "12px 24px",
		borderRadius: "10px",
		textDecoration: "none",
		fontWeight: "600",
		transition: ".3s",
	},

	primary: {
		background: "#4f46e5",
		color: "#fff",
	},

	ghost: {
		border: "1px solid rgba(255,255,255,.2)",
		color: "#fff",
	},

	social: {
		background: "#fff",
		padding: "13px",
		borderRadius: "10px",
		boxShadow: "0 4px 15px rgba(0,0,0,.15)",
		zIndex: 10,
	},

	heropng: {
		width: "100%",
		maxWidth: "370px",
		aspectRatio: "1 / 1",
		borderRadius: "50%",
		background: "linear-gradient(135deg,#1c5ba8,#691eeb)",
		boxShadow: "0 8px 30px rgba(2,6,23,.6)",
	},
};

export default Hero;