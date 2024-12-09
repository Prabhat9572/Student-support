import React, { useState } from 'react';
import '../Style/Robotics.css'; // Import the CSS file for styling

const Robotics = () => {
  const [activeVideo, setActiveVideo] = useState(null); // State to manage active video

  const handlePlayClick = (videoUrl) => {
    setActiveVideo(videoUrl); // Set the video URL when "Play Video" is clicked
  };

  const handleCloseVideo = () => {
    setActiveVideo(null); // Close video when user clicks outside or wants to exit
  };

  return (
    <div className="courses-subjects-container">
      <h2 className="section-heading">Robotics</h2>

      <div className="subject-list">
        {/* Subject Card 1 */}
        <div className="subject-card">
          <img src="robotics_fundamentals.jpg" alt="Robotics Fundamentals" className="subject-image" />
          <h3>Robotics Fundamentals</h3>
          <ul>
            <li>Introduction to Robotics</li>
            <li>Types of Robots</li>
            <li>Basic Components</li>
            <li>Robotic Sensors</li>
          </ul>
          <button onClick={() => handlePlayClick('https://www.youtube.com/embed/dQw4w9WgXcQ')}>Play Video</button> {/* Example Video URL */}
        </div>

        {/* Subject Card 2 */}
        <div className="subject-card">
          <img src="kinematics.jpg" alt="Kinematics" className="subject-image" />
          <h3>Kinematics</h3>
          <ul>
            <li>Forward and Inverse Kinematics</li>
            <li>Transformation Matrices</li>
            <li>Robotic Arm Modeling</li>
          </ul>
          <button onClick={() => handlePlayClick('https://www.youtube.com/embed/dQw4w9WgXcQ')}>Play Video</button> {/* Example Video URL */}
        </div>

        {/* Subject Card 3 */}
        <div className="subject-card">
          <img src="control_systems.jpg" alt="Control Systems" className="subject-image" />
          <h3>Control Systems</h3>
          <ul>
            <li>PID Control</li>
            <li>System Stability</li>
            <li>Feedback Control in Robotics</li>
          </ul>
          <button onClick={() => handlePlayClick('https://www.youtube.com/embed/dQw4w9WgXcQ')}>Play Video</button> {/* Example Video URL */}
        </div>

        {/* More Subject Cards */}
        {/* You can repeat this structure for other robotics subjects */}
      </div>

      {/* Show the active video in an iframe if available */}
      {activeVideo && (
        <div className="video-modal">
          <div className="video-overlay" onClick={handleCloseVideo}></div>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={activeVideo}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={handleCloseVideo}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Robotics;
