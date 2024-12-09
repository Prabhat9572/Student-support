import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Ensure the path is correct
import About from './components/About'; // Ensure the path is correct
import Schedule from './components/Schedule'; // Ensure the path is correct
import Home from './components/Home'; // Ensure the path is correct
import Speakers from './components/Speakers'; // Ensure the path is correct
import Contact from './components/Contact'; // Ensure the path is correct
import Footer from './components/Footer'; // Ensure the path is correct
import Internship from './components/internship'; // Ensure capitalization is correct
import Mentorship from './Pages/Mentorship'; // Ensure the path is correct
<<<<<<< HEAD
import FormPage from './Pages/Formpage';
=======
import Programming from './Pages/Programming'; // Ensure the path is correct
import Networking from './Pages/Networking'; // Ensure the path is correct
import CoursesSubjects from './Pages/CoursesSubjects'; // Ensure the path is correct
import Robotics from './Pages/Robotics';
import Datascience from './Pages/Datascience';
>>>>>>> 848608f16a5059939353ed4427fb8fb372481b11

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
          <Route path="/internship" element={<Internship />} />
<<<<<<< HEAD
          <Route path="/mentorship" element={<Mentorship />} /> {/* Added Mentorship Route */}
          <Route path="/formpage" element={<FormPage />} /> {/* Added Mentorship Route */}

=======
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/courses-subjects" element={<CoursesSubjects />} />
          {/* Updated the path t
          o match the component naming */}
          <Route path="/robotics" element={<Robotics />} />
          <Route path="/Datascience" element={<Datascience />} />
>>>>>>> 848608f16a5059939353ed4427fb8fb372481b11
        </Routes>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
