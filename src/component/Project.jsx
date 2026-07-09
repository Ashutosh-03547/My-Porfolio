import React from 'react';
import { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";


const projects = [
  {
    id: 1,
    image: project1,
    title: "MERN Chat Application",
    category: "App",
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app.vercel.app",
  },

  {
    id: 2,
    image: project2,
    title: "Portfolio Website",
    category: "Web",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio.vercel.app",
  },

  {
    id: 3,
    image: project3,
    title: "Weather App",
    category: "App",
    github: "#",
    demo: "#",
  },

  {
    id: 4,
    image: project4,
    title: "Dashboard UI",
    category: "Design",
    github: "#",
    demo: "#",
  },
];


const filters = ["All", "Web", "App", "Design"];

const Project = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section id="projects" style={styles.projectSection}>
      <h2 style={styles.title}>Portfolio</h2>
      <span style={styles.subtitle}>Most Recent Work</span>

      {/* Filter Buttons */}
      <div style={styles.filterContainer}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            style={{
              ...styles.filterButton,
              ...(active === filter ? styles.activeFilter : {}),
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div style={styles.container}>
        {filtered.map((project) => (
          <div
            key={project.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 15px 35px rgba(0,0,0,.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 5px 15px rgba(0,0,0,.08)";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={styles.image}
            />

            <h3 style={styles.projectTitle}>{project.title}</h3>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              style={styles.demoButton}
            >
              Demo
              <i
                className="bx bx-right-arrow-alt"
                style={{ marginLeft: "6px", fontSize: "20px" }}
              ></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  projectSection: {
    padding: "5rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
  },

  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
    color: "#222",
  },

  subtitle: {
    color: "#777",
    marginBottom: "3rem",
    fontSize: "1rem",
  },

  filterContainer: {
    display: "flex",
    gap: "1rem",
    marginBottom: "3rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  filterButton: {
    padding: "10px 20px",
    border: "none",
    background: "white",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "0.3s",
  },

  activeFilter: {
    background: "#0c058f",
    color: "#fff",
  },

  container: {
    width: "100%",
    maxWidth: "1100px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "2rem",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "20px",
    padding: "1.2rem",
    transition: "0.3s",
    boxShadow: "0 5px 15px rgba(0,0,0,.08)",
    background: "#fff",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "18px",
  },

  projectTitle: {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "1.35rem",
    fontWeight: "600",
    color: "#222",
  },

  demoButton: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#555",
    fontWeight: "500",
    fontSize: "16px",
  },
};
export default Project;