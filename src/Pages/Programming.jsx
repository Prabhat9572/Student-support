import React, { useState } from 'react';
import '../Style/Programming.css';

const courses = [
  {
    name: 'JAVA',
    description: 'Learn the basics and advanced concepts of Java programming.',
    image: 'https://blog.pwskills.com/wp-content/uploads/2023/11/Java-Tutorial-For-Complete-Beginners.jpg',
    videoUrl: 'https://youtu.be/BGTx91t8q50?si=kjbiKim1c6tr4OZR', // Example YouTube link for Java
  },
  {
    name: 'PYTHON',
    description: 'Dive into Python for web development, data science, and AI.',
    image: 'https://www.fita.in/includes/assets/img/python/Python-banner.jpg',
    videoUrl: 'https://www.youtube.com/embed/yy4jV9cN68M', // Python example video link
  },
  {
    name: 'JAVASCRIPT',
    description: 'Master JavaScript for interactive web development.',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQGwFBk-2Q0b2g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657533146499?e=2147483647&v=beta&t=giDrxx1FAwmgtdOvJIOMywwIWqBIbYvCda3U-IYw4ak',
    videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk', // JavaScript example video link
  },
  {
    name: 'C',
    description: 'Understand the foundations of programming with C.',
    image: 'https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/08/C-Programming-Tutorial-1.jpg',
    videoUrl: 'https://www.youtube.com/embed/KJgsSFOSQv0', // C programming video link
  },
  {
    name: 'C++',
    description: 'Explore object-oriented programming with C++.',
    image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png',
    videoUrl: 'https://www.youtube.com/embed/1vW0zzF2gdY', // C++ example video link
  },
  {
    name: 'RUST',
    description: 'Learn Rust for memory-safe and high-performance programming.',
    image: 'https://i.ytimg.com/vi/T_KrYLW4jw8/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Mh-HXOTmf2o', // Rust example video link
  },
  {
    name: 'GO',
    description: 'Explore Go for building scalable and concurrent systems.',
    image: 'https://i.ytimg.com/vi/3iuoQkQOx2w/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD0Svdj9ygSRInXRO8wRivleFo11Q',
    videoUrl: 'https://www.youtube.com/embed/7qj57T6OGHo', // Go programming example video link
  },
  {
    name: 'RUBY',
    description: 'Get started with Ruby for web development and scripting.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CUoikjoL0LF27sjsgUp6d0hNZltx1Me1Z3u8oZi0ZSu2iMAKh5N0yZq84P3hslksOkc&usqp=CAU',
    videoUrl: 'https://www.youtube.com/embed/T4EfgGzjw1g', // Ruby example video link
  },
];

const Programming = () => {
  const [activeVideo, setActiveVideo] = useState(null); // State to manage active video

  const handlePlayClick = (videoUrl) => {
    setActiveVideo(videoUrl); // Set the video URL when "Play Video" is clicked
  };

  const handleCloseVideo = () => {
    setActiveVideo(null); // Close video when user clicks outside or wants to exit
  };

  return (
    <div className="programming-page">
      <h1>Programming Courses</h1>
      <p> <b>All good courses are available here for free.</b></p>
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

export default Programming;
