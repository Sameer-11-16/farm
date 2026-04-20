import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Smartphone } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    icon: <Code size={36} />,
    title: 'Frontend Architecture',
    desc: 'Scalable, accessible, and performant user interfaces built with React & Next.js.'
  },
  {
    icon: <Server size={36} />,
    title: 'Backend Systems',
    desc: 'Robust REST and GraphQL APIs structured around microservices or monolithic architectures.'
  },
  {
    icon: <Database size={36} />,
    title: 'Database Design',
    desc: 'Optimized schema designs using PostgreSQL or MongoDB for high-throughput applications.'
  },
  {
    icon: <Smartphone size={36} />,
    title: 'Mobile-First Design',
    desc: 'Ensuring seamless experiences across all device sizes using modern responsive techniques.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title gradient-text">What I Do</h2>
        <p className="section-subtitle">
          Comprehensive technical solutions ready for enterprise and startup environments.
        </p>

        <div className="services-grid grid-cols-2">
          {servicesData.map((service, idx) => (
            <motion.div 
              className="service-card glass" 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="service-icon glass flex-center">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Services;
