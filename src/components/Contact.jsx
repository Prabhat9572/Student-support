import React, { useState } from 'react';
import '../Style/Contact.css'; // Ensure this path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API or email service)
    console.log(formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have any questions? We'd love to hear from you! Reach out to us and we'll get back to you as soon as possible.</p>

       

        <div className="contact-form">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
