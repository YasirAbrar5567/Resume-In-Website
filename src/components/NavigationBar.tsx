import React from 'react';
import '../styles/NavigationBar.css';

const NavigationBar: React.FC = () => {
  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'CREATIVE EDGE', href: '#creative-edge' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">SHAIK MOHAMMED YASIR ABRAR</div>
      <ul className="navbar-nav">
        {navLinks.map((link, index) => (
          <li
            key={link.name}
            className="nav-item"
            style={{
              animation: `fadeInSlideDown 0.8s ease-out ${0.1 * (index + 1)}s forwards`,
              opacity: 0, // Start invisible
            }}
          >
            <a href={link.href} className="nav-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;