import React from 'react';
import '../styles/Certifications.css';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 data-aos="zoom-out">Certifications</h2>
      <div className="certifications-content" data-aos="zoom-out-down">
        <ul>
          <li>ServiceNow CSA</li>
          <li>ServiceNow CAD</li>
          <li>MEPRO Certification - Pearson (2023)</li>
        </ul>
      </div>
    </section>
  );
};

export default Certifications;