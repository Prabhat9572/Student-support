import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Using functional update for better state management
  };

  const closeMenu = () => {
    setMenuOpen(false); // Closes menu when a link is clicked
  };

  return (
    <header className="studentsupport-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">Students Support</Link> {/* Made logo a clickable link to Home */}
        </div>

        {/* Toggle Button for Mobile Menu */}
        <div className="toggle-button" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/internship" onClick={closeMenu}>Internship</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/schedule" onClick={closeMenu}>Schedule</Link>
            </li>
            <li>
              <Link to="/speakers" onClick={closeMenu}>Speakers</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
            <li>
              <Link to="/support" onClick={closeMenu}>Support</Link>
            </li>
            <li>
              <Link to="/userprofile" onClick={closeMenu}>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
