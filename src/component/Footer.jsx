const Footer = () => {
    return (
        <footer style={styles.footer}>
            <h2 style={styles.logo}>PORTFOLIO</h2>

            <div style={styles.links}>
                <a href="#home" style={styles.link}>Home</a>
                <a href="#about" style={styles.link}>About</a>
                <a href="#skills" style={styles.link}>Skills</a>
                <a href="#projects" style={styles.link}>Projects</a>
                <a href="#contact" style={styles.link}>Contact</a>
            </div>

            <div style={styles.socials}>
                <a
                    href="https://linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.icon}
                >
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.icon}
                >
                    <i className="bx bxl-github"></i>
                </a>

                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.icon}
                >
                    <i className="bx bxl-youtube"></i>
                </a>

                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.icon}
                >
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>

            <p style={styles.copy}>
                © {new Date().getFullYear()} Ashutosh Pathy. All rights reserved.
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        background: "linear-gradient(180deg, #0f172a 0%, #071033 100%)",
        color: "#fff",
        padding: "4rem 1rem 2rem",
        textAlign: "center",
        position: "relative",
        zIndex: "9999",
    },

    logo: {
        fontSize: "2rem",
        fontWeight: "700",
        letterSpacing: "2px",
        marginBottom: "2rem",
    },

    links: {
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
        marginBottom: "2rem",
    },

    link: {
        color: "#d1d5db",
        textDecoration: "none",
        fontSize: "1rem",
        transition: ".3s",
    },

    socials: {
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        marginBottom: "2rem",
    },

    icon: {
        width: "50px",
        height: "50px",
        background: "#1f2937",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "1.5rem",
        textDecoration: "none",
        transition: ".3s",
    },

    copy: {
        color: "#9ca3af",
        fontSize: ".95rem",
    },
};

export default Footer;