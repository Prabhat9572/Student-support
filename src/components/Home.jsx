import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import Courses from '../Pages/Courses'; // Update the path if necessary
import Mentorship from '../Pages/Mentorship';

import '../Style/Home.css';

const Home = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const images = [
    'https://cdn-blog.novoresume.com/articles/student-services-specialist/bg.png',
    'https://cmsv2-assets.apptegy.net/uploads/2799/file/1680619/b8e19e3c-760b-41c9-8d3d-336f53a12b56.png',
    'https://fsb.ac.uk/wp-content/uploads/2017/03/9142427_1467128977.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Switch image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
  };

  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
              Empowering students with resources for jobs, internships, resume building, interview preparation, mentorship, and career guidance.
            </p>
            <button className="cta-button" onClick={() => scrollToSection('courses-container')}>
              Explore Our Programs
            </button>
          </div>
          <div className="image-slider">
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`} // Fixed the alt text syntax
            />
            <div className="slider-controls">
              <button onClick={prevImage}>❮</button>
              <button onClick={nextImage}>❯</button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses-container" className="courses-container">
        <h2 className="section-heading">
          <center>Our Popular Subjects</center>
        </h2>
        <div className="subjects-list">
          <div className="subject-card">
            <img
              className="subject-image"
              src="https://static.vecteezy.com/system/resources/thumbnails/025/399/762/small/programming-coding-icon-logo-design-template-vector.jpg"
              alt="Programming"
            />
            <h3>Programming</h3>
            {/* <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
            </ul> */}
            <button
              className="subject-button"
              onClick={() => handleNavigate('/Programming')}
            >
              Explore Programming
            </button>
          </div>
          <div className="subject-card">
            <img
              className="subject-image"
              src="https://img.icons8.com/ios-filled/100/000000/network.png"
              alt="Networking"
            />
            <h3>Networking</h3>
            {/* <ul>
              <li>TCP/IP</li>
              <li>Routing</li>
              <li>Security</li>
            </ul> */}
            <button
              className="subject-button"
              onClick={() => handleNavigate('/Networking')}
            >
              Explore Networking
            </button>
          </div>

          <div className="subject-card">
            <img
              className="subject-image"
              src="https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329542.jpg?semt=ais_hybrid"
              alt="Data Science"
            />
            <h3>Robotics</h3>
            {/* <ul>
              <li>Robot Design</li>
              <li>Human-Robot Interaction</li>
              <li>Industrial Robotics</li>
            </ul> */}
            <button
              className="subject-button"
              onClick={() => handleNavigate('/robotics')}
            >
              Explore Robotics
            </button>
          </div>

          <div className="subject-card">
            <img
              className="subject-image"
              src="https://cdn-icons-png.flaticon.com/512/4824/4824797.png"
              alt="Data Science"
            />
            <h3>Data Science</h3>
            {/* <ul>
              <li>Machine Learning</li>
              <li>Data Analysis</li>
              <li>Data Visualization</li>
            </ul> */}
           <button
  className="explore-button"
  onClick={() => handleNavigate('/Datascience')} // Navigate to Datascience page
>
  Explore Data Science
</button>
          </div>
        </div>
      </section>

        {/* You may not need to render Courses here unless you specifically need it */}
        {Courses && <Courses />}

      {/* Mentorship Section */}
      <section id="mentorship-container" className="mentorship-container">
        <div className="mentorship-content">
          <div className="mentorship-image">
            {/* Replace the image URL with your own image path */}
            <img
              src="https://media.istockphoto.com/id/533241382/vector/mentoring-chart-with-keywords-and-icons-sketch.jpg?s=612x612&w=0&k=20&c=jrmrfgr8bVFD54ORCkgzt5GpldwHVxvQiwl8g1tOUGA="
              alt="Mentorship"
            />
          </div>
          <div className="mentorship-text">
            <h2>Join Our Mentorship Program</h2>
            <p>Get personalized guidance from industry experts to boost your career. Our mentorship program offers valuable insights, support, and networking opportunities.</p>
            <button
              className="explore-button"
              onClick={() => handleNavigate('/mentorship')} // Navigate to Mentorship page
            >
              Explore Now
            </button>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Home;
