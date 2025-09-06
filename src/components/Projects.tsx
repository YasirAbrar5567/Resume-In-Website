import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 data-aos="fade-down">RECENT PROJECTS</h2>
      <div className="projects-grid">
        <div className="project-card" data-aos="zoom-in-up">
          <h3>E-COMMERCE PLATFORM (SERVICE NOW SERVICE PORTAL)</h3>
          <p className="project-subtitle">TOOLS & TECHNOLOGIES USED</p>
          <p className="project-description">Built a customized e-commerce solution using ServiceNow Service Portal, supporting both single-item purchases and workshop bookings. Created a responsive and user-friendly interface with HTML, CSS, and JavaScript for smooth shopping experience. Configured Items and Order Guides to enable structured product selection and ordering processes. Automated backend operations like approvals, inventory validation, and payments using ServiceNow Workflow Engine. Ensured role-based access and secure data handling through well-defined Access Control Rules (ACLs).</p>
        </div>

        <div className="project-card" data-aos="zoom-in-up" data-aos-delay="200">
          <h3>AI & AUTOMATION PROJECTS</h3>
          <p className="project-subtitle">TOOLS & TECHNOLOGIES USED</p>
          <p className="project-description">Developed an AI-powered Linux installation command/tool for automated system setup.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
