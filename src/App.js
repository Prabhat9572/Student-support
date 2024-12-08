import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Header from './components/Header';
import About from './components/About';
import Schedule from './components/Schedule';
import Home from './components/Home';
import Speakers from './components/Speakers';
import Contact from './components/Contact'; // Ensure Contact component exists and path is correct
import Footer from './components/Footer';
import Internship from './components/internship'; // Use Product (singular) here
=======
import Header from './components/Header'; // Ensure the path is correct
import About from './components/About'; // Ensure the path is correct
import Schedule from './components/Schedule'; // Ensure the path is correct
import Home from './components/Home'; // Ensure the path is correct
import Speakers from './components/Speakers'; // Ensure the path is correct
import Contact from './components/Contact'; // Ensure the path is correct
import Footer from './components/Footer'; // Ensure the path is correct
import Product from './components/product'; // Note the lowercase 'p'
import Mentorship from './Pages/Mentorship'; // Ensure the path is correct
>>>>>>> 26dc27145fbc46343359acd16573c3a1106c41b5

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
<<<<<<< HEAD
          <Route path="/internship" element={<Internship />} /> Use Product here
=======
          <Route path="/product" element={<Product />} />
          <Route path="/mentorship" element={<Mentorship />} /> {/* Added Mentorship Route */}
>>>>>>> 26dc27145fbc46343359acd16573c3a1106c41b5
        </Routes>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
