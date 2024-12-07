import React, { useState, useEffect } from 'react';
import '../Style/Home.css';

const Home = () => {
  const images = [
    'https://cdn-blog.novoresume.com/articles/student-services-specialist/bg.png',
    'https://cmsv2-assets.apptegy.net/uploads/2799/file/1680619/b8e19e3c-760b-41c9-8d3d-336f53a12b56.png',
    'https://fsb.ac.uk/wp-content/uploads/2017/03/9142427_1467128977.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Welcome to <span>Student Support</span>
            </h1>
            <p>
              Empowering students to succeed with Jobs, Internships, Resume
              Building, Interview Preparation, mentorship, resources, and career
              guidance.
            </p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="image-slider">
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
            />
            <div className="slider-controls">
              <button onClick={prevImage}>❮</button>
              <button onClick={nextImage}>❯</button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <h2 className="section-heading">Why Choose Us?</h2>
        <div className="program-highlight">
          <div className="program-info">
            <h3>Expert Mentorship</h3>
            <p>Gain insights from professionals who have excelled in their fields.</p>
          </div>
          <div className="program-details">
            <h3>Comprehensive Resources</h3>
            <p>Access top-notch study material, interview resources, and job prep.</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-container">
        <h2 className="section-heading">Our Popular Subjects</h2>
        <div className="subjects-list">
          <div className="subject-card">
            <img
              className="subject-image"
              src="https://img.icons8.com/ios-filled/100/000000/programming-language.png"
              alt="Programming"
            />
            <h3>Programming</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="subject-card">
            <img
              className="subject-image"
              src="https://img.icons8.com/ios-filled/100/000000/network.png"
              alt="Networking"
            />
            <h3>Networking</h3>
            <ul>
              <li>TCP/IP</li>
              <li>Routing</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="subject-card">
            <img
              className="subject-image"
              src="https://img.icons8.com/ios-filled/100/000000/data-storage.png"
              alt="Data Science"
            />
            <h3>Data Science</h3>
            <ul>
              <li>Machine Learning</li>
              <li>Data Analysis</li>
              <li>Data Visualization</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
