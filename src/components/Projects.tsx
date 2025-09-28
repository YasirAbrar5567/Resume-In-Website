import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 data-aos="fade-down">RECENT PROJECTS</h2>
      <div className="projects-grid">
        <div className="project-card" data-aos="zoom-in-up">
          <h3>Multithreaded Group Chat Application in Java</h3>
          <p className="project-subtitle">Java, MulticastSocket API, Multithreading, Exception Handling</p>
          <p className="project-description">• Collaborated with cross-functional teams across design, development, and testing to implement a new feature, improving user workflow efficiency by 20%.<br/>• Optimized message delivery latency by 20%, supporting smoother interactions for up to 50 simultaneous users.</p>
        </div>

        <div className="project-card" data-aos="zoom-in-up" data-aos-delay="200">
          <h3>Event Webpage</h3>
          <p className="project-subtitle">HTML5, CSS3, JavaScript (DOM Manipulation, Form Validation, Countdown Timer), Responsive Design</p>
          <p className="project-description">• Designed a fully responsive and user-friendly event webpage with interactive features, boosting user engagement by 35% and ensuring seamless accessibility across 5+ device resolutions.<br/>• Devised interactive content and countdown features that increased event registrations by 25% and overall participation.</p>
        </div>

        <div className="project-card" data-aos="zoom-in-up" data-aos-delay="400">
          <h3>E-Commerce Platform</h3>
          <p className="project-subtitle">ServiceNow Service Portal, HTML, CSS, JavaScript, ServiceNow Workflow Engine, ACLs</p>
          <p className="project-description">• Built a custom shopping portal automating orders and payments, reducing manual effort by 40% and improving checkout efficiency by 30%.<br/>• Managed 500+ product listings and user transactions with secure access controls, enhancing platform reliability.</p>
        </div>

        <div className="project-card" data-aos="zoom-in-up" data-aos-delay="600">
          <h3>7-Day Weather Forecast App</h3>
          <p className="project-subtitle">React, OpenWeatherMap API, LocalStorage, Environment-secured API keys</p>
          <p className="project-description">• Developed a weather app delivering forecasts for 1,000+ cities with 98% uptime, featuring geolocation, unit toggles, and responsive UI.<br/>• Served over 5,000 users monthly, with enhanced data fetching and caching strategies, reducing API calls by 15%.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
