import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 data-aos="flip-up">CONTACT INFO</h2>
      <div className="contact-details">
        <div className="contact-item" data-aos="fade-down-left" data-aos-easing="ease-out-back" data-aos-duration="1000">
          <span className="contact-label">PHONE</span>
          <span className="contact-value">+919346363880</span>
        </div>
        <div className="contact-item" data-aos="fade-down-right" data-aos-easing="ease-out-back" data-aos-duration="1000" data-aos-delay="100">
          <span className="contact-label">EMAIL</span>
          <span className="contact-value">yasirabrar0786@gmail.com</span>
        </div>
        <div className="contact-item" data-aos="fade-up-left" data-aos-easing="ease-out-back" data-aos-duration="1000" data-aos-delay="200">
          <span className="contact-label">LINKEDIN</span>
          <a href="https://www.linkedin.com/in/yasir-abrar-3a70062a7" target="_blank" rel="noopener noreferrer" className="contact-value">www.linkedin.com/in/yasir-abrar-3a70062a7</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;