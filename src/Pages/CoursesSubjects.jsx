import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/CoursesSubjects.css'; // Correctly import your CSS file

const CoursesSubjects = () => {
  const subjects = [
    {
      name: 'Computer Science',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
      route: '/computer-science',
    },
    {
      name: 'Business & Management',
      image: 'https://cdn-icons-png.flaticon.com/512/2834/2834892.png',
      route: '/business-management',
    },
    {
      name: 'Engineering',
      image: 'https://cdn-icons-png.flaticon.com/512/141/141372.png',
      route: '/engineering',
    },
    {
      name: 'Arts & Humanities',
      image: 'https://cdn-icons-png.flaticon.com/512/616/616491.png',
      route: '/arts-humanities',
    },
    {
      name: 'Human Resources & Soft Skills', // Added HR subject
      image: 'https://cdn-icons-png.flaticon.com/512/2398/2398685.png',
      route: '/hr-soft-skills',
    },
    {
      name: 'Health & Wellness',
      image: 'https://cdn-icons-png.flaticon.com/512/2255/2255312.png',
      route: '/health-wellness',
    },
    {
      name: 'Marketing',
      image: 'https://cdn-icons-png.flaticon.com/512/2329/2329920.png',
      route: '/marketing',
    },
    {
      name: 'Finance & Accounting',
      image: 'https://cdn-icons-png.flaticon.com/512/2146/2146311.png',
      route: '/finance-accounting',
    },
    {
      name: 'Data Science',
      image: 'https://cdn-icons-png.flaticon.com/512/3139/3139026.png',
      route: '/data-science',
    },
    {
      name: 'Artificial Intelligence',
      image: 'https://cdn-icons-png.flaticon.com/512/2885/2885082.png',
      route: '/artificial-intelligence',
    },
    {
      name: 'Design & Creativity',
      image: 'https://cdn-icons-png.flaticon.com/512/2912/2912139.png',
      route: '/design-creativity',
    },
    {
      name: 'Law & Legal Studies',
      image: 'https://cdn-icons-png.flaticon.com/512/2058/2058776.png',
      route: '/law-legal-studies',
    },
    {
      name: 'Psychology',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186345.png',
      route: '/psychology',
    },
    {
      name: 'Physics',
      image: 'https://cdn-icons-png.flaticon.com/512/2907/2907851.png',
      route: '/physics',
    },
    {
      name: 'Chemistry',
      image: 'https://cdn-icons-png.flaticon.com/512/1024/1024714.png',
      route: '/chemistry',
    },
  ];

  return (
    <div className="courses-subjects-container">
      <h2 className="section-heading">Explore More Courses</h2>
      <div className="subject-list">
        {subjects.map((subject, index) => (
          <div className="subject-card" key={index}>
            <img src={subject.image} alt={subject.name} className="subject-image" />
            <h3>{subject.name}</h3>
            <Link to={subject.route} className="explore-link">Explore More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSubjects;
