import React from 'react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 data-aos="zoom-out-down">Experience</h2>
      <div className="experience-content" data-aos="flip-right">
        <h3>Codsoft Jan 2024 - Feb 2024</h3>
        <p>Software Engineer Intern Tirupathi, Andhra Pradesh</p>
        <ul>
          <li>Engineered and debugged 3+ Java-based applications, improving code efficiency by 15% through refined logic and clean,
efficient coding practices.</li>
          <li>Spearheaded 4 parallel projects, ensuring timely completion and minimal errors.</li>
          <li>Integrated new tools, including Gemini CLI, to significantly reduce task completion time by 10–12%.</li>
          <li>Led Agile practices, guided sprint planning, and drove daily stand-ups to ensure smooth project execution.</li>
          <li>Authored comprehensive technical reports, enhancing team alignment and enabling seamless knowledge transfer.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;