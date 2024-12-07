import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Schedule from './components/Schedule';
import Home from './components/Home';
import Speakers from './components/Speakers';
import Contact from './components/Contact'; // Import Contact component
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        {/* Rendering Header component */}
        <Header />

       
        
        {/* Defining Routes for different sections */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        {/* Include the Contact Section */}
        <Contact />

        {/* footer section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
