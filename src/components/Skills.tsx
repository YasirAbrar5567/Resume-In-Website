import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="creative-edge" className="skills-section">
      <h2 data-aos="zoom-in">CREATIVE EDGE</h2>
      <p className="skills-subtitle" data-aos="fade-down" data-aos-delay="100">I fuse technical innovation with artistic expression</p>

      <div className="main-skills-container">
        <div className="main-skill-card" data-aos="zoom-out-up">
          <h3>TECHNICAL SKILLS</h3>
          <div className="nested-cards-container">
            <div className="nested-card">
              <h4>Programming Languages</h4>
              <p>Java, SQL, basic Python</p>
            </div>
            <div className="nested-card">
              <h4>Platforms</h4>
              <p>ServiceNow</p>
            </div>
            <div className="nested-card">
              <h4>Web Technologies</h4>
              <p>HTML, CSS, JavaScript</p>
            </div>
            <div className="nested-card">
              <h4>Operating Systems & Databases</h4>
              <p>Windows, Linux</p>
            </div>
            <div className="nested-card">
              <h4>Tools</h4>
              <p>MS Excel, MS PowerPoint</p>
            </div>
          </div>
        </div>

        <div className="main-skill-card" data-aos="zoom-out-down" data-aos-delay="0">
          <h3>SOFT SKILLS</h3>
          <div className="nested-cards-container">
            <div className="nested-card">
              <h4>Teamwork</h4>
              <p>Collaborative and supportive</p>
            </div>
            <div className="nested-card">
              <h4>Leadership</h4>
              <p>Proactive and inspiring</p>
            </div>
            <div className="nested-card">
              <h4>Problem-solving</h4>
              <p>Analytical and creative</p>
            </div>
            <div className="nested-card">
              <h4>Adaptability</h4>
              <p>Flexible and resilient</p>
            </div>
            <div className="nested-card">
              <h4>Fast Learner</h4>
              <p>Quick to grasp new concepts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;