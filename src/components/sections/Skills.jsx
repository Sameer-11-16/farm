import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Core Technologies',
    skills: [
      { name: 'React', progress: 95 },
      { name: 'Vite', progress: 90 },
      { name: 'Angular', progress: 75 },
      { name: 'JavaScript / ES6+', progress: 90 },
    ]
  },
  {
    title: 'Styling & Layout',
    skills: [
      { name: 'Bootstrap', progress: 95 },
      { name: 'Modern CSS', progress: 90 },
      { name: 'Framer Motion', progress: 85 },
      { name: 'Responsive Design', progress: 98 },
    ]
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js Basics', progress: 70 },
      { name: 'RESTful APIs', progress: 85 },
      { name: 'Git & GitHub', progress: 90 },
      { name: 'NPM / Yarn', progress: 85 },
    ]
  },
  {
    title: 'Core Competencies',
    skills: [
      { name: 'Component Architecture', progress: 95 },
      { name: 'Web Performance', progress: 85 },
      { name: 'UI / UX Principles', progress: 85 },
      { name: 'Problem Solving', progress: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title gradient-text">Technical Arsenal</h2>
        <p className="section-subtitle">
          A comprehensive dashboard of the technologies I employ to solve complex business challenges.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              className="skill-card glass" 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div className="skill-item" key={sIdx}>
                    <div className="skill-info flex-between">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.progress}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <motion.div 
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Skills;
