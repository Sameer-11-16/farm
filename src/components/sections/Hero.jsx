import React, { useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { MousePointer2, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section id="hero" className="hero-section flex-center">
      {init && (
        <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#8b5cf6" },
            links: { color: "#8b5cf6", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, direction: "none", random: false, straight: false, outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="particles-background"
      />
      )}

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-main-content"
        >
          <div className="hero-portrait-container">
             <div className="hero-portrait-image-wrapper">
               <img src="/profile-hero.jpg" alt="Md Sameer Ansari" className="hero-portrait-image" />
             </div>
             <div className="portrait-glow"></div>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Md Sameer Ansari</span>
          </h1>
          <h2 className="hero-subtitle">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'React Specialist',
                2000,
                'Web Developer',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="typing-text"
            />
          </h2>

          <p className="hero-description">
            Building premium, scalable, and responsive digital experiences.
            Transforming ideas into high-performance web applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary flex-center">
              View Work <MousePointer2 size={18} className="ml-2" />
            </a>
            <div className="social-links">
               <a href="https://github.com/Sameer-11-16" target="_blank" rel="noopener noreferrer" className="social-icon glass"><FaGithub size={20}/></a>
               <a href="https://www.linkedin.com/in/md-sameer-ansari-47273626b/" target="_blank" rel="noopener noreferrer" className="social-icon glass"><FaLinkedin size={20}/></a>
               <a href="#" className="social-icon glass"><FaTwitter size={20}/></a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={30} />
      </motion.a>
    </section>
  );
};

export default Hero;
