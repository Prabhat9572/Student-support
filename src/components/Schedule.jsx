import React from 'react';
import '../Style/Schedule.css';

const Schedule = () => {
  const scheduleData = [
    { day: 'Monday', event: 'Math Tutoring - 10:00 AM' },
    { day: 'Tuesday', event: 'Science Workshop - 12:00 PM' },
    { day: 'Wednesday', event: 'Career Guidance - 2:00 PM' },
    { day: 'Thursday', event: 'Project Mentorship - 11:00 AM' },
    { day: 'Friday', event: 'Guest Lecture - 3:00 PM' },
  ];

  return (
    <section className="schedule">
      <div className="schedule-header">
        <h2>Weekly Schedule</h2>
        <p>Stay updated with our support activities and sessions.</p>
      </div>
      <div className="schedule-container">
        {scheduleData.map((item, index) => (
          <div key={index} className="schedule-item">
            <h3>{item.day}</h3>
            <p>{item.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
