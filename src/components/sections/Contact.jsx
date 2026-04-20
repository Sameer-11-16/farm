import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <p className="section-subtitle">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="contact-grid grid-cols-2">
          <div className="contact-info glass">
            <h3>Let's build something amazing together.</h3>
            <p>Reach out directly at <strong>sameeransari000009@gmail.com</strong> for full-time frontend roles, hackathons, or freelance collaborations.</p>
            
            <a href="mailto:sameeransari000009@gmail.com" className="btn glass flex-center download-resume">
              <Send size={18} className="mr-2"/> Email Me Directly
            </a>
            
            <div className="contact-socials">
               <a href="https://github.com/Sameer-11-16" target="_blank" rel="noopener noreferrer" className="social-icon glass"><FaGithub size={20}/></a>
               <a href="https://www.linkedin.com/in/md-sameer-ansari-47273626b/" target="_blank" rel="noopener noreferrer" className="social-icon glass"><FaLinkedin size={20}/></a>
               <a href="#" className="social-icon glass"><FaTwitter size={20}/></a>
            </div>
          </div>

          <div className="contact-form-container glass">
            {isSubmitted ? (
              <motion.div 
                className="success-message flex-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                  <input 
                    type="text" 
                    id="name"
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <label htmlFor="name" className={formData.name ? 'active' : ''}>Name</label>
                </div>
                <div className="input-group">
                  <input 
                    type="email" 
                    id="email"
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <label htmlFor="email" className={formData.email ? 'active' : ''}>Email</label>
                </div>
                <div className="input-group">
                  <textarea 
                    id="message"
                    required 
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                  <label htmlFor="message" className={formData.message ? 'active' : ''}>Message</label>
                </div>
                <button type="submit" className="btn btn-primary flex-center w-100">
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Contact;
