import React from 'react';
import '../Style/Courses.css';

const Courses = () => {
  const subjects = [
    {
      name: 'Computer Science',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
      courses: [
        'Data Structures & Algorithms',
        'Web Development',
        'Machine Learning',
        'Cybersecurity',
      ],
    },
    {
      name: 'Business & Management',
      image: 'https://cdn-icons-png.flaticon.com/512/2834/2834892.png',
      courses: [
        'Business Analytics',
        'Marketing Strategies',
        'Project Management',
        'Entrepreneurship',
      ],
    },
    {
      name: 'Engineering',
      image: 'https://cdn-icons-png.flaticon.com/512/141/141372.png',
      courses: [
        'Thermodynamics',
        'Control Systems',
        'Embedded Systems',
        'Material Science',
        'Robotics',
        'Civil Engineering Basics',
        'Electrical Circuits and Devices',
        'Structural Engineering',
        'Environmental Engineering',
      ],
    },
    {
      name: 'Arts & Humanities',
      image: 'https://cdn-icons-png.flaticon.com/512/616/616491.png',
      courses: [
        'Creative Writing',
        'Art History',
        'Philosophy',
        'Photography',
        'Music Theory',
        'Film Studies',
      ],
    },
  ];

  return (
    <div className="courses-container">
      <h2 className="section-heading">Courses Based on Subjects</h2>
      <div className="subjects-list">
        {subjects.map((subject, index) => (
          <div key={index} className="subject-card">
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
    </div>
  );
};

export default Courses;
