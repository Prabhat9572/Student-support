import React from 'react';
import '../Style/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* About Section */}
      <div className="right-section">
        <h1>About <span>Student Support</span></h1>
        <p>
          Empowering students to achieve their academic and personal goals by providing mentorship, 
          study resources, and career guidance. Together, we help you reach new heights.
        </p>
      </div>

      {/* Features Section */}
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
          <div className="card">
            <h3>Home Projects</h3>
            <p>We are providing lots of projects to build your knowledge with us.</p>
          </div>

         
        </div>
             </section>
      
    {/* </div> */}
 {/* Additional Section with Welcome */}
 

{/* New Section with Images Left and Text Right */}
<section className="new-section-images-text">
 {/* Images on the Left */}
 <div className="image-gallery">
   <img src="https://th.bing.com/th/id/OIP.QkSquGElm-MC8lsSco9d0AHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.8&pid=1.7" alt="Image 1" />
   <img src="https://www.onatlas.com/wp-content/uploads/2019/03/education-students-people-knowledge-concept-P6MBQ5W.jpg" alt="Image 2" />
   <img src="https://th.bing.com/th/id/OIP.NqJwU0M4qU1UQEjP_sMRzgHaEK?w=231&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7" alt="Image 3" />
   <img src="https://th.bing.com/th/id/OIP.87ts_dsRCPkMb8GD6Ue6wQHaE7?w=287&h=192&c=7&r=0&o=5&dpr=1.8&pid=1.7" alt="Image 4" />
 </div>

 {/* Text on the Right */}
 <div className="text-section">
   <h2>Enhance Your Learning</h2>
   <p>
     Explore a diverse range of resources designed to help you excel academically and professionally. 
     With our curated materials and expert guidance, you’ll be equipped to overcome any challenges 
     in your journey.
   </p>
 </div>
</section>
</div>
);
};

export default About;
