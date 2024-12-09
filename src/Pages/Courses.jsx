import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Courses.css';

const Courses = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      name: 'Computer Science',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
      courses: [
        // 'Data Structures & Algorithms',
        // 'Web Development',
        // 'Machine Learning',
        // 'Cybersecurity',
      ],
      route: '/computer-science',
    },
    {
      name: 'Business & Management',
      image: 'https://cdn-icons-png.flaticon.com/512/2834/2834892.png',
      courses: [
        // 'Business Analytics',
        // 'Marketing Strategies',
        // 'Project Management',
        // 'Entrepreneurship',
      ],
      route: '/business-management',
    },
    {
      name: 'Engineering',
      image: 'https://cdn-icons-png.flaticon.com/512/141/141372.png',
      courses: [
        // 'Embedded Systems',
        // 'Robotics',
        // 'Civil Engineering Basics',
        // 'Electrical Circuits and Devices',
        // 'Environmental Engineering',
      ],
      route: '/engineering',
    },
    {
      name: 'Arts & Humanities',
      image: 'https://cdn-icons-png.flaticon.com/512/616/616491.png',
      courses: [
        // 'Creative Writing',
        // 'Art History',
        // 'Photography',
        // 'Music Theory',
        // 'Film Studies',
      ],
      route: '/arts-humanities',
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  const handleExploreNowClick = () => {
    navigate('/courses-subjects');
  };

  return (
    <div className="courses-container">
      <h2 className="section-heading">Courses Based on Subjects</h2>
      <div className="subjects-list">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="subject-card"
            onClick={() => handleCardClick(subject.route)}
            style={{ cursor: 'pointer' }}
          >
            <img src={subject.image} alt={subject.name} className="subject-image" />
            <h3>{subject.name}</h3>
            <ul>
              {subject.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="explore-now-container">
        <button
          className="explore-now-btn"
          onClick={handleExploreNowClick}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Courses;
