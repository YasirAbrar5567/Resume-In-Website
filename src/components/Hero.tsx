import React from 'react';
import '../styles/Hero.css';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
          // Removed whileHover prop
        >
          HELLO,
        </motion.p>
        <motion.p
          className="hero-intro-phrase"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          // Removed whileHover prop
        >
          WELCOME TO
        </motion.p>
        <motion.h1
          className="hero-main-name"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          SHAIK MOHAMMED YASIR ABRAR
        </motion.h1>
        <p className="hero-subtitle">Portfolio</p>
      </div>
    </section>
  );
};

export default Hero;
