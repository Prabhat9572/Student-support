import React from 'react';
import '../Style/Speakers.css'; // Import the CSS file for styling

const speakersData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Career Expert',
    image: 'https://via.placeholder.com/150',
    bio: 'John has over 20 years of experience in career development and mentorship, helping students navigate the job market.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Academic Mentor',
    image: 'https://via.placeholder.com/150',
    bio: 'Jane is passionate about academic growth and helping students achieve their educational goals through personalized guidance.',
  },
  {
    id: 3,
    name: 'Dr. Emily Clark',
    designation: 'Mental Health Specialist',
    image: 'https://via.placeholder.com/150',
    bio: 'Dr. Emily works with students to ensure their mental well-being is prioritized during their academic journey.',
  },
];

const Speakers = () => {
  return (
    <div className="speakers-section">
      <h2 className="section-title">Meet Our Speakers</h2>
      <div className="speakers-cards">
        {speakersData.map((speaker) => (
          <div key={speaker.id} className="speaker-card">
            <img src={speaker.image} alt={speaker.name} className="speaker-image" />
            <div className="speaker-info">
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-designation">{speaker.designation}</p>
              <p className="speaker-bio">{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
