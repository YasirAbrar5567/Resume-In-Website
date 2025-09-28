import React from 'react';
import '../styles/Achievements.css';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 data-aos="flip-down">Achievements</h2>
      <div className="achievements-content" data-aos="flip-left">
        <ul>
          <li>Secured 1st place in RBI 90th Quiz (College Zone) and qualified for the State-Level Round.</li>
          <li>And also got selected in top 100 from all over Andhra Pradesh (State Level) Round.</li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;