import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section" data-aos="slide-up">
      <p>&copy; {new Date().getFullYear()} SHAIK MOHAMMED YASIR ABRAR. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
