import React from 'react';
import '../Style/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>About <span>Student Support</span></h1>
          <p>
            Empowering students to achieve their academic and personal goals by providing mentorship, 
            study resources, and career guidance. Together, we help you reach new heights.
          </p>
        </div>
      </section>

      <section className="features">
        <h2>What We Offer</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Mentorship</h3>
            <p>Connect with experienced mentors to guide your academic and career journey.</p>
          </div>
          <div className="card">
            <h3>Study Resources</h3>
            <p>Access a vast library of notes, tutorials, and sample papers tailored for your needs.</p>
          </div>
          <div className="card">
            <h3>Career Guidance</h3>
            <p>Get personalized advice to excel in interviews, placements, and beyond.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
