import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="studentsupport-header">
      <div className="header-container">
        <div className="logo">
          <span>Students Support</span>
        </div>

        {/* Toggle button for mobile view */}
        <div className="toggle-button" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
<<<<<<< HEAD
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/schedule" onClick={closeMenu}>Schedule</Link></li>
            <li><Link to="/speakers" onClick={closeMenu}>Speakers</Link></li>
            <li><Link to="#contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
=======
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/speakers">Speakers</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
        
        <div className="cta-button">
          <a href="#register" className="btn-register">Sign In</a>
        </div>
>>>>>>> e0efc1009f81626e209d2709f0cba6c07748d2e9
      </div>
    </header>
  );
};

export default Header;
