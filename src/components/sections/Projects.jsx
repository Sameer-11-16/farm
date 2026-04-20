import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Online Leave Management System',
    description: 'A comprehensive leave tracking dashboard with automated request workflows.',
    longDescription: 'Developed a responsive leave management system to streamline time-off requests. Features include role-based access control, realtime status updates, and interactive calendars to maintain organizational efficiency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Vite', 'Bootstrap', 'Node.js'],
    github: 'https://github.com/Sameer-11-16',
    demo: 'https://leave-management-taupe-xi.vercel.app/login',
  },
  {
    id: 2,
    title: 'Crop Disease Detection System',
    description: 'An agricultural platform that assists farmers in identifying crop diseases.',
    longDescription: 'An interactive system designed to modernize agricultural management. It includes dynamic dashboards and tools to diagnose plant health, track weather conditions, and visualize historical data to boost crop yield.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Angular', 'Frontend Integration'],
    github: 'https://github.com/Sameer-11-16',
    demo: 'https://cropdection.netlify.app/',
  },
  {
    id: 3,
    title: 'BloodLink',
    description: 'A real-time campus blood donor web application for critical emergencies.',
    longDescription: 'Architected a streamlined web app specifically tailored for university campuses. Enables users to instantly find and contact available blood donors within seconds, featuring real-time alerts and availability toggles for high-speed responsiveness.',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'WebSockets', 'Responsive UI'],
    github: 'https://github.com/Sameer-11-16',
    demo: '#',
  },
  {
    id: 4,
    title: 'Campus Quest',
    description: 'A comprehensive quiz management system designed for academic environments.',
    longDescription: 'Developed a robust quiz management platform allowing educators to create, manage, and evaluate quizzes seamlessly. Features include real-time scoring, intuitive user interfaces, and detailed performance analytics tailored for campus use.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Sameer-11-16',
    demo: 'https://mohd-faizan.onrender.com/login',
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section-padding container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title gradient-text">Featured Work</h2>
        <p className="section-subtitle">
          A showcase of products I've crafted from ground up, demonstrating architecture, UI/UX, and performance.
        </p>

        <div className="projects-grid">
          {projectData.map((project) => (
            <Tilt 
              key={project.id}
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
              transitionSpeed={250}
            >
              <div className="project-card glass" onClick={() => openModal(project)}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="view-details">Click for details</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content glass"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closeModal}>
                <X size={24} />
              </button>
              
              <div className="modal-header">
                 <img src={selectedProject.image} alt={selectedProject.title} className="modal-image"/>
              </div>
              <div className="modal-body">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <div className="project-tech mb-4">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
                <p className="modal-desc">{selectedProject.longDescription}</p>
                
                <div className="modal-actions">
                  <a href={selectedProject.github} className="btn glass flex-center">
                    <FaGithub size={18} className="mr-2" /> Code
                  </a>
                  <a href={selectedProject.demo} className="btn btn-primary flex-center">
                    <ExternalLink size={18} className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Projects;
