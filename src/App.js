import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Ensure the path is correct
import About from './components/About'; // Ensure the path is correct
import Schedule from './components/Schedule'; // Ensure the path is correct
import Home from './components/Home'; // Ensure the path is correct
import Speakers from './components/Speakers'; // Ensure the path is correct
import Contact from './components/Contact'; // Ensure the path is correct
import Footer from './components/Footer'; // Ensure the path is correct
import Internship from './components/internship'; // Note the lowercase 'p'
import Mentorship from './Pages/Mentorship'; // Ensure the path is correct
import FormPage from './Pages/Formpage';

import UserProfile from './Pages/Userprofile';
import Datascience from './Pages/Datascience';
import Robotics from './Pages/Robotics';
import Programming from './Pages/Programming';
import Networking from './Pages/Networking';
import CoursesSubjects from './Pages/CoursesSubjects';



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
          <Route path="/mentorship" element={<Mentorship />} /> {/* Added Mentorship Route */}
          <Route path="/formpage" element={<FormPage />} /> 
          <Route path="/datascience" element={<Datascience />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/robotics" element={<Robotics />} /> {/* Added Robotics Route */}
          <Route path="/programming" element={<Programming />} /> {/* Added Programming Route */}
          <Route path="/networking" element={<Networking />} /> {/* Added Networking Route */}
          <Route path="/courses-subjects" element={<CoursesSubjects />} /> {/* Added Courses Subjects Route */}
         
           

          

        </Routes>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
