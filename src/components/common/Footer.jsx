import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content flex-center">
        <p>© {new Date().getFullYear()} My Portfolio. Built with React & Vite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
