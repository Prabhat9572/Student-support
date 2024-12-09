import React, { useState } from 'react';
import '../Style/Networking.css';

const courses = [
  {
    name: 'Computer Networks',
    description: 'Learn the fundamentals of computer networks including protocols and models.',
    image: 'https://media.licdn.com/dms/image/C4E12AQFHVqnFatlGQA/article-cover_image-shrink_720_1280/0/1625627946736?e=2147483647&v=beta&t=gJTA5snVdb_2X8nggj9PnEsoz-Hcep5eJJBoQITlIYo',
    videoUrl: 'https://www.youtube.com/embed/7pKL16x9dlw', // Example video for Computer Networks
  },
  {
    name: 'Network Security',
    description: 'Explore the principles and techniques of securing computer networks.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230216140137/Cyber-security-tutorial-banner.jpg',
    videoUrl: 'https://www.youtube.com/embed/TL8V7ZGH1t4', // Network Security example video link
  },
  {
    name: 'Wireless Networks',
    description: 'Understand the architecture and protocols of wireless communication.',
    image: 'https://i.ytimg.com/vi/zYOjNwLVmyc/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/JzF0-Jk0gIc', // Wireless Networks example video link
  },
  {
    name: 'Routing and Switching',
    description: 'Get hands-on knowledge about routing and switching in computer networks.',
    image: 'https://images.javatpoint.com/tutorial/computer-network/images/switch-vs-router.png',
    videoUrl: 'https://www.youtube.com/embed/Wt2d0cq1cTY', // Routing and Switching example video link
  },
  {
    name: 'Network Protocols',
    description: 'Dive deep into various network protocols like TCP/IP, UDP, and more.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHOofJekmoIGTL3kDLQWaHJxHfOPdq-aGmQ&s',
    videoUrl: 'https://www.youtube.com/embed/OUzzvgs03RE', // Network Protocols example video link
  },
  {
    name: 'Internet of Things (IoT)',
    description: 'Explore IoT technology and its application in modern networks.',
    image: 'https://images.javatpoint.com/tutorial/iot/images/what-is-an-internet-of-things.png',
    videoUrl: 'https://www.youtube.com/embed/TK2yg7p6xa4', // IoT example video link
  },
  {
    name: 'Cloud Networking',
    description: 'Learn about networking in the cloud and how it differs from traditional networks.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230419121924/Cloud-Computing.webp',
    videoUrl: 'https://www.youtube.com/embed/CtEIzgjndOk', // Cloud Networking example video link
  },
  {
    name: 'Network Automation',
    description: 'Master the tools and techniques for automating network management.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20220825161400/NetworkAutomation1.png',
    videoUrl: 'https://www.youtube.com/embed/YzL_o9dfc7s', // Network Automation example video link
  },
];

const Networking = () => {
  const [activeVideo, setActiveVideo] = useState(null); // State to manage active video

  const handlePlayClick = (videoUrl) => {
    setActiveVideo(videoUrl); // Set the video URL when "Play Video" is clicked
  };

  const handleCloseVideo = () => {
    setActiveVideo(null); // Close video when user clicks outside or wants to exit
  };

  return (
    <div className="programming-page">
      <h1>Networking Courses</h1>
      <p><b>All good Networking courses are available here for free.</b></p>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <button onClick={() => handlePlayClick(course.videoUrl)}>Play Video</button>
          </div>
        ))}
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
};

export default Networking;
