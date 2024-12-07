import React from "react";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Student Support</h3>
        <p className="footer-description">
          Empowering students to achieve their goals through mentorship, guidance, and resources.
        </p>
        <div className="footer-links">
          <a href="/about" className="footer-link">
            About Us
          </a>
          <a href="/contact" className="footer-link">
            Contact
          </a>
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Student Support. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
