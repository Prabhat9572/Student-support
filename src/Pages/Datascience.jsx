import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "../Style/Datascience.css";

const Datascience = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const subjects = [
    {
      title: "Machine Learning",
      description: "Learn the basics of machine learning, including supervised and unsupervised learning.",
      image: "https://via.placeholder.com/100",
      videoLink: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      title: "Data Visualization",
      description: "Study various visualization techniques to display complex data in an understandable manner.",
      image: "https://via.placeholder.com/100",
      videoLink: "https://www.youtube.com/embed/sGTxHOqfPLc",
    },
    {
      title: "Big Data Analytics",
      description: "Learn how to process and analyze large datasets using Big Data technologies.",
      image: "https://via.placeholder.com/100",
      videoLink: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      title: "Deep Learning",
      description: "Dive into neural networks and deep learning algorithms for complex problem-solving.",
      image: "https://via.placeholder.com/100",
      videoLink: "https://www.youtube.com/embed/sGTxHOqfPLc",
    },
    {
      title: "Statistical Analysis",
      description: "Study statistical methods used to analyze data and make informed decisions.",
      image: "https://via.placeholder.com/100",
      videoLink: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      title: "Natural Language Processing",
      description: "Explore how computers understand and process human language.",
      image: "https://via.placeholder.com/100",
      videoLink: "https://www.youtube.com/embed/sGTxHOqfPLc",
    },
  ];

  const handlePlayButtonClick = (videoLink) => {
    setCurrentVideo(videoLink);
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
    setCurrentVideo("");
  };

  const handleGoBack = () => {
    navigate("/");  // Navigate to the homepage (or any route you wish)
  };

  return (
    <div className="datascience-container">
      <h1 className="section-heading">Data Science Subjects</h1>

      {/* Go Back Button */}
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>

      <div className="subject-list">
        {subjects.map((subject, index) => (
          <div key={index} className="subject-card">
            <img src={subject.image} alt={subject.title} className="subject-image" />
            <h3>{subject.title}</h3>
            <p>{subject.description}</p>
            <button
              className="play-button"
              onClick={() => handlePlayButtonClick(subject.videoLink)}
            >
              Play Video
            </button>
          </div>
        ))}
      </div>

      {isPlaying && (
        <div className="video-overlay">
          <div className="video-player">
            <button className="close-button" onClick={handleCloseVideo}>
              X
            </button>
            <iframe
              width="100%"
              height="100%"
              src={currentVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Datascience;
