const Contact = () => {
    return (
        <section id="contact" style={styles.section}>
            <h2 style={styles.title}>Contact Me</h2>
            <span style={styles.subtitle}>Get in touch</span>

            <div style={styles.container}>
                {/* Left Side */}
                <div style={styles.left}>
                    <h3 style={styles.heading}>Talk to me</h3>

                    {/* Email */}
                    <div style={styles.card}>
                        <i className="bx bx-mail-send" style={styles.icon}></i>

                        <h4 style={styles.cardTitle}>Email</h4>
                        <p style={styles.cardText}>ashutoshpathy@email.com</p>

                        <a
                            href="mailto:ashutoshpathy@email.com"
                            style={styles.link}
                        >
                            Write me
                            <i className="bx bx-right-arrow-alt"></i>
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div style={styles.card}>
                        <i className="bx bxl-whatsapp" style={styles.icon}></i>

                        <h4 style={styles.cardTitle}>WhatsApp</h4>
                        <p style={styles.cardText}>+91 9876543210</p>

                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noreferrer"
                            style={styles.link}
                        >
                            Write me
                            <i className="bx bx-right-arrow-alt"></i>
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div style={styles.card}>
                        <i className="bx bxl-linkedin-square" style={styles.icon}></i>

                        <h4 style={styles.cardTitle}>LinkedIn</h4>
                        <p style={styles.cardText}>Ashutosh Pathy</p>

                        <a
                            href="https://linkedin.com/in/your-linkedin"
                            target="_blank"
                            rel="noreferrer"
                            style={styles.link}
                        >
                            Connect with me
                            <i className="bx bx-right-arrow-alt"></i>
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div style={styles.right}>
                    <h3 style={styles.heading}>Write me your project</h3>

                    <form style={styles.form}>
                        <input
                            type="text"
                            placeholder="Insert your name"
                            style={styles.input}
                        />

                        <input
                            type="email"
                            placeholder="Insert your email"
                            style={styles.input}
                        />

                        <textarea
                            rows="7"
                            placeholder="Write your project"
                            style={styles.textarea}
                        ></textarea>

                        <button type="submit" style={styles.button}>
                            Send Message
                            <i
                                className="bx bx-send"
                                style={{ marginLeft: "8px", fontSize: "20px" }}
                            ></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: "5rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#fff",
    },

    title: {
        fontSize: "3rem",
        fontWeight: "700",
        marginBottom: ".5rem",
    },

    subtitle: {
        color: "#777",
        marginBottom: "4rem",
    },

    container: {
        width: "100%",
        maxWidth: "1100px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
        gap: "4rem",
    },

    left: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    },

    right: {
        display: "flex",
        flexDirection: "column",
    },

    heading: {
        textAlign: "center",
        marginBottom: "2rem",
        fontSize: "1.6rem",
        fontWeight: "600",
    },

    card: {
        border: "1px solid #ddd",
        borderRadius: "20px",
        padding: "2rem",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,.05)",
    },

    icon: {
        fontSize: "2rem",
        marginBottom: ".8rem",
    },

    cardTitle: {
        fontSize: "1.3rem",
        marginBottom: ".4rem",
    },

    cardText: {
        color: "#666",
        marginBottom: "1rem",
    },

    link: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        textDecoration: "none",
        color: "#444",
        fontWeight: "500",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    },

    input: {
        padding: "1rem",
        borderRadius: "15px",
        border: "1px solid #bbb",
        fontSize: "1rem",
        outline: "none",
    },

    textarea: {
        padding: "1rem",
        borderRadius: "15px",
        border: "1px solid #bbb",
        fontSize: "1rem",
        resize: "none",
        outline: "none",
    },

    button: {
        width: "220px",
        padding: "1rem",
        border: "none",
        borderRadius: "15px",
        background: "#222",
        color: "#fff",
        fontSize: "1rem",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

export default Contact;