import React, { useState } from 'react';
import '../Style/MentorshipRegistration.css'; // Ensure to link the CSS file

const MentorshipRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.course) {
      alert(`Registration Successful! Welcome, ${formData.name}`);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="registration-container">
      <div className="container">
        <div className="left-text">
          <h1>Welcome to the Mentorship Program</h1>
          <p>Register now to connect with experienced mentors and enhance your learning journey!</p>
          <p>Our mentors are here to guide you through every challenge. Gain valuable insights, tips, and support tailored to your course and branch.</p>
        </div>

        <div className="form-container">
          <div className="form-section">
            <h2 className="form-title">Fill Out Your Details Below</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="course">Course/Branch</label>
                <input
                  id="course"
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="Enter your course or branch"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">Register Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipRegistration;
