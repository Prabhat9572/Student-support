import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="studentsupport-header">
      <div className="header-container">
        <div className="logo">
          <span>Students Support</span>
        </div>
        <div className="toggle-button" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internship">internship</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/speakers">Speakers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </nav>
        
       
      </div>
    </header>
  );
};

export default Header;
