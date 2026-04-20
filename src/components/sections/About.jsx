import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Rocket } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title gradient-text">My Story</h2>
        <p className="section-subtitle">
          I build products that bridge the gap between elegant design and complex engineering.
        </p>

        <div className="about-content grid-cols-2">
          <div className="about-visual flex-center">
            <motion.div 
              className="profile-frame glass"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
               <div className="profile-image-container gradient-bg">
                 <img src="/profile.jpg" alt="Md Sameer Ansari" className="profile-image" />
               </div>
               <div className="floating-badge badge-1 glass flex-center"><Code2 size={20}/> React </div>
               <div className="floating-badge badge-2 glass flex-center"><Rocket size={20}/> UI/UX </div>
            </motion.div>
          </div>
          
          <div className="about-text">
            <div className="story-block glass">
               <h3>Crafting Digital Experiences</h3>
               <p>As a passionate Frontend Developer, my journey revolves around translating complex ideas into elegant, user-centric interfaces. I specialize in building robust, interactive web applications that feel fast and look stunning.</p>
            </div>
            
            <div className="story-block glass">
               <h3>Modern React Ecosystem</h3>
               <p>I thrive in the modern JavaScript landscape, heavily focusing on React, component-driven architecture, and responsive design. My expertise lies in designing scalable applications and writing clean, maintainable code.</p>
            </div>
            
            <div className="story-block glass">
               <h3>Performance & UI/UX</h3>
               <p>Great code is invisible to the user—they only feel the experience. I'm obsessed with bridging the gap between design and engineering by optimizing web vitals, crafting smooth animations, and ensuring pixel-perfect functionality.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default About;
