import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  const handleDownload = async () => {
    try {
      // Create a direct link to download the PDF
      const pdfUrl = process.env.PUBLIC_URL + '/yasir_java_web_resume.pdf';
      
      // Fetch with proper headers for PDF
      const response = await fetch(pdfUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      
      // Ensure the blob is treated as a PDF
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(pdfBlob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Yasir_Java_Web_Dev_Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: direct link approach
      const fallbackLink = document.createElement('a');
      fallbackLink.href = process.env.PUBLIC_URL + '/yasir_java_web_resume.pdf';
      fallbackLink.download = 'Yasir_Java_Web_Dev_Resume.pdf';
      fallbackLink.target = '_blank';
      fallbackLink.style.display = 'none';
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    }
  };

  return (
    <section id="about" className="about-section">
      <h2 data-aos="fade-down">ABOUT ME</h2>
      <p className="about-subtitle" data-aos="fade-down" data-aos-delay="100">I fuse technical innovation with artistic expression</p>
      
      {/* Moved image card here */}
      <div className="about-image-card-standalone" data-aos="zoom-in" data-aos-delay="300" data-aos-offset="200"> 
        <img src={process.env.PUBLIC_URL + '/YASIR__ABRAR.jpg?v=1.1'} alt="Yasir Abrar" className="about-pic" /> {/* Changed image source */} 
      </div>

      <div className="about-content">
        <div className="about-block" data-aos="zoom-in" data-aos-offset="200"> 
          <h3>Professional Summary</h3>
          <p>Dynamic CSE professional specializing in ServiceNow and experienced in web technologies. Highly skilled in Java with a strong foundation in OOPS along with core concepts and also expert in SQL.</p>
        </div>

        <div className="about-details-grid">
          <div className="about-block" data-aos="flip-left" data-aos-offset="200"> 
            <h3>Education</h3>
            <ul>
              <li><strong>Mohan Babu University - Tirupati</strong> | Bachelor of Technology, Computer Science and Engineering | 11/2022 - 05/2026 | 8.44 CGPA</li>
              <li><strong>Aakash Institute - Kurnool</strong> | Intermediate, MPC (Mathematics, Physics, Chemistry) | 05/2022 | Final Grade: 91.5%</li>
              <li><strong>St Jospeh's English School - Kurnool</strong> | High School Diploma, School Education, CBSE | 03/2020 | Grade: 392/500 Marks</li>
            </ul>
          </div>

          <div className="about-block" data-aos="flip-right" data-aos-offset="200"> 
            <h3>Personal Details</h3>
            <ul>
              <li><strong>Strengths:</strong> Adaptability to Technology, Strong communication, Competitive, Persistence and never gives up easily.</li>
              <li><strong>Hobbies:</strong> Gaming, Running, Travelling, Reading Books, Doing Challenges.</li>
              <li><strong>Languages:</strong> English, Hindi, Telugu, Urdu.</li>
            </ul>
          </div>
        </div>
        <a href="#" onClick={handleDownload} className="btn-download-resume" data-aos="zoom-in" data-aos-delay="400" data-aos-offset="200">Download Resume</a>
      </div>
    </section>
  );
};

export default About;