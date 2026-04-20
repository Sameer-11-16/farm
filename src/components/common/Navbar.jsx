import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const navLinks = ['About', 'Skills', 'Projects', 'Timeline', 'Services', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar flex-center glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex-between nav-container">
        <a href="#" className="logo gradient-text">React</a>
        
        <nav className={`nav-links ${isMenuOpen ? 'open glass' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="nav-actions flex-center">
          <button onClick={toggleTheme} className="theme-toggle flex-center">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="mobile-menu-btn flex-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <motion.div 
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
};

export default Navbar;
