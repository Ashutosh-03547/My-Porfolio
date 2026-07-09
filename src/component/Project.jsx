import React, { useState } from 'react';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      image: 'https://via.placeholder.com/300x200?text=E-Commerce',
      description: 'A full-stack e-commerce platform built with React and Node.js featuring product catalog, shopping cart, and payment integration.',
      technologies: 'React, Node.js, MongoDB, Stripe'
    },
    {
      id: 2,
      title: 'Task Management App',
      image: 'https://via.placeholder.com/300x200?text=Task+Manager',
      description: 'A collaborative task management application with real-time updates and user authentication.',
      technologies: 'React, Firebase, Tailwind CSS'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      image: 'https://via.placeholder.com/300x200?text=Weather+App',
      description: 'Interactive weather dashboard displaying real-time weather data with forecasts and location search.',
      technologies: 'React, OpenWeatherMap API, Chart.js'
    },
    {
      id: 4,
      title: 'Social Media Feed',
      image: 'https://via.placeholder.com/300x200?text=Social+Media',
      description: 'Social networking platform with post creation, comments, likes, and user profiles.',
      technologies: 'React, Express, PostgreSQL'
    },
    {
      id: 5,
      title: 'Blog Platform',
      image: 'https://via.placeholder.com/300x200?text=Blog',
      description: 'Content management system for creating and sharing blog posts with markdown support.',
      technologies: 'Next.js, GraphQL, MongoDB'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      image: 'https://via.placeholder.com/300x200?text=Fitness',
      description: 'Health and fitness tracking app with workout logging and progress analytics.',
      technologies: 'React Native, Firebase, D3.js'
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: '40px',
      color: '#333'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '20px'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid #e0e0e0'
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    cardContent: {
      padding: '20px'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#333'
    },
    cardText: {
      fontSize: '0.95rem',
      color: '#666',
      lineHeight: '1.4'
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    modal: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '30px',
      maxWidth: '600px',
      width: '90%',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      animation: 'slideIn 0.3s ease'
    },
    modalImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '20px'
    },
    modalTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      marginBottom: '12px',
      color: '#333'
    },
    modalDescription: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#555',
      marginBottom: '15px'
    },
    modalTech: {
      backgroundColor: '#f5f5f5',
      padding: '12px',
      borderRadius: '6px',
      marginBottom: '20px',
      fontSize: '0.95rem',
      color: '#444'
    },
    techLabel: {
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    closeButton: {
      backgroundColor: '#ff6b6b',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease'
    },
    closeButtonHover: {
      backgroundColor: '#ff5252'
    }
  };

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredClose, setHoveredClose] = useState(false);

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;
          }
        }
        @media (max-width: 480px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      
      <h1 style={styles.title}>My Projects</h1>
      
      <div style={styles.grid} className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              ...styles.card,
              ...(hoveredCard === project.id ? styles.cardHover : {})
            }}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <div style={styles.cardTitle}>{project.title}</div>
              <div style={styles.cardText}>{project.description.substring(0, 80)}...</div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.title} style={styles.modalImage} />
            <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
            <p style={styles.modalDescription}>{selectedProject.description}</p>
            <div style={styles.modalTech}>
              <div style={styles.techLabel}>Technologies:</div>
              <div>{selectedProject.technologies}</div>
            </div>
            <button
              style={{
                ...styles.closeButton,
                ...(hoveredClose ? styles.closeButtonHover : {})
              }}
              onMouseEnter={() => setHoveredClose(true)}
              onMouseLeave={() => setHoveredClose(false)}
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
