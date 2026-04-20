import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Timeline.css';

const timelineData = [
  {
    year: '2024 - Present',
    title: 'Frontend Development Specialization',
    org: 'Self-Taught & Projects',
    description: 'Deep diving into React.js and the modern frontend ecosystem. Actively building responsive UIs, mastering state management, and crafting interactive applications.',
    icon: <Briefcase size={20} />
  },
  {
    year: '2023 - 2026',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Integral University',
    description: 'Building a strong foundation in software engineering and computer science principles, with a heavy extracurricular focus on web technologies.',
    icon: <GraduationCap size={20} />
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="section-padding container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title gradient-text">My Journey</h2>
        <p className="section-subtitle">
          The path of my academic and professional growth.
        </p>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineData.map((item, idx) => (
            <div className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
              <motion.div 
                className="timeline-content glass"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="timeline-icon flex-center glass">
                  {item.icon}
                </div>
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-org">{item.org}</h4>
                <p className="timeline-desc">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Timeline;
