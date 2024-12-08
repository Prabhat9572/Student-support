import React, { useState } from 'react';
import MentorshipRegistration from './MentorshipRegistration';
import '../Style/Mentorship.css'; // Make sure to link the CSS file

const Mentorship = () => {
  const [studentName, setStudentName] = useState('');
  const [mentorName, setMentorName] = useState('');

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for registering, ${studentName}. You will be matched with a mentor soon.`);
  };

  const handleMentorSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for offering mentorship, ${mentorName}. We'll reach out soon.`);
  };

  return (
    <div className="mentorship-page">
      {/* Hero Section */}
      <section className="hero-section">
  <div className="hero-content">
    <h1>Join Our Mentorship Program</h1>
    <p>
      Connect with experienced mentors to guide you in your academic and professional journey. Whether you're a student seeking direction or a mentor offering guidance, we help you find the perfect match.
    </p>
    <button className="cta-btn">Join Now</button>
  </div>
</section>


      {/* Mentorship Benefits Section */}
      <section className="benefits-section">
        <h2>Why Join Our Mentorship Program?</h2>
        <div className="benefits-list">
          <div className="benefit-card">
            <img src="https://thumbs.dreamstime.com/b/customer-support-wooden-signpost-four-arrows-help-advice-guidance-sky-background-82273934.jpg" alt="Expert Guidance" className="benefit-image" />
            <h3>Expert Guidance</h3>
            <p>Get personalized career advice from industry professionals.</p>
          </div>
          <div className="benefit-card">
            <img src="https://www.collidu.com/media/catalog/product/img/8/8/88507f22fa0b00fb60b59f1457cd4923a89fb1cdf95045c9eb7e37e902851535/skill-enhancement-slide4.png" className="benefit-image" />
            <h3>Skill Enhancement</h3>
            <p>Develop valuable skills that will help you stand out in your field.</p>
          </div>
          <div className="benefit-card">
            <img src="https://proventainternational.com/wp-content/uploads/2023/08/eddieteo_Create_an_image_of_a_professional_networking_event_wit_74706d5e-ec96-4bea-baca-d15aa5a8f84f.png" className="benefit-image" />
            <h3>Networking Opportunities</h3>
            <p>Build a strong professional network and unlock new opportunities.</p>
          </div>
        </div>
      </section>
      
      {/* Mentorship Registration Section */}
      <MentorshipRegistration/>



    </div>
  );
};

export default Mentorship;
