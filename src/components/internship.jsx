import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Style/internship.css'; // CSS for styling

const Internship = () => {
    return (
        <div className="internship">
            <header className="product-header">
                <div className="header-content">
                    {/* Add content here if needed */}
                </div>
            </header>

            <section className="internship-list">
                <h2>INTERNSHIPS WE OFFER</h2>
                <div className="internship-cards">
                    {/* Data Science Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.iimtindia.net/Blog/wp-content/uploads/2021/06/Data-Science.jpg" 
                            alt="Data Science" 
                            width={250} 
                            height={200}
                            className="internship-image"
                        />
                        <h3 className="internship-title">Data Science</h3>
                        <p className="internship-description">
                            The Data Science Internship offers practical experience in data analysis, machine learning, and using tools like Python to gain insights from data.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Web Development Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/web_ilY3NoA.jpeg" 
                            alt="Web Development" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Web Development</h3>
                        <p className="internship-description">
                            The Web Development Internship offers practical experience in building websites using front-end and back-end technologies.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Cyber Security Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.commtech.com/wp-content/uploads/2024/06/Depositphotos_174652098_XL-900x600.jpg" 
                            alt="Cyber Security" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Cyber Security</h3>
                        <p className="internship-description">
                            The Cyber Security Internship offers practical experience in protecting digital assets and networks from threats, preparing interns for a career in cyber security.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Data Analytics Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP._9VpHNE8qRmtV4W9HOw_xwHaE8?rs=1&pid=ImgDetMain" 
                            alt="Data Analytics" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Data Analytics</h3>
                        <p className="internship-description">
                            The Data Analytics Internship focuses on statistical analysis, data visualization, and deriving actionable insights from datasets.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* AI & Machine Learning Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP.EZeP9vSGOADD1MSdiDctcgHaE7?rs=1&pid=ImgDetMain" 
                            alt="AI & Machine Learning" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">AI & Machine Learning</h3>
                        <p className="internship-description">
                            The AI & Machine Learning Internship covers building intelligent models using algorithms, neural networks, and predictive analytics.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Cloud Computing Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP.beekNXRA04cwREBq7hGyLAHaDy?rs=1&pid=ImgDetMain" 
                            alt="Cloud Computing" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Cloud Computing</h3>
                        <p className="internship-description">
                            The Cloud Computing Internship provides exposure to cloud platforms like AWS, Azure, and GCP for scalable and efficient computing solutions.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Blockchain Development Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP.pZ3fR5VW1VmgGy0C9-gqxgHaEC?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
                            alt="Blockchain Development" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Blockchain Development</h3>
                        <p className="internship-description">
                            The Blockchain Development Internship includes hands-on experience in developing decentralized applications and blockchain architecture.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Additional Internship Cards */}
                    {/* Mobile App Development Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.netrootstech.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-05-at-3.27.45-PM.jpeg" 
                            alt="Mobile App Development" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Mobile App Development</h3>
                        <p className="internship-description">
                            Gain experience in building mobile applications using platforms like Android, iOS, and Flutter.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* UI/UX Design Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP.doYHfVKgVncrGIL5jmSOMgHaE8?rs=1&pid=ImgDetMain" 
                            alt="UI/UX Design" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">UI/UX Design</h3>
                        <p className="internship-description">
                            Explore user-centric design principles, prototyping tools, and best practices for creating intuitive interfaces.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* DevOps Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/R.8d67bb983beaad634a8591fe0a79f859?rik=vuWSxMiT9Fxyxw&riu=http%3a%2f%2ftivasys.com%2fwp-content%2fuploads%2f2017%2f05%2fdevops-digram-1.png&ehk=hDy%2fchdwuEYDoNILp15XLM691%2f%2fx2uhTO%2fRXiEJu6s8%3d&risl=&pid=ImgRaw&r=0" 
                            alt="DevOps" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">DevOps</h3>
                        <p className="internship-description">
                            Learn continuous integration, deployment, and operations using tools like Docker, Jenkins, and Kubernetes.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Digital Marketing Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP.QcASAa4wJISuJXH1LT2T5wHaE8?rs=1&pid=ImgDetMain" 
                            alt="Digital Marketing" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Digital Marketing</h3>
                        <p className="internship-description">
                            Get hands-on experience in SEO, social media marketing, and performance analytics.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Game Development Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://bagogames-com.s3.amazonaws.com/wp-content/uploads/2021/08/03165341/unnamed.jpg" 
                            alt="Game Development" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Game Development</h3>
                        <p className="internship-description">
                            Dive into creating engaging games using engines like Unity, Unreal Engine, and Godot.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Robotics Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.tuas.com.tr/UserImages/BlogImages/robotics-engineer/robotics-engineer-f90ed2f1-4064-460f-9feb-13327403bcd3.jpg" 
                            alt="Robotics" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Robotics</h3>
                        <p className="internship-description">
                            Engage in designing and programming robotic systems for automation and problem-solving.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>
                </div>
            </section>

           
    <section className="certificate-section">
      <h2>Your Internship Certificate</h2>
      <div className="certificate-container">
        <img
          src="SSC.png"
          alt="Internship Certificate"
          className="certificate-image"
        />
        <div className="certificate-text">
          <p>
            Upon successful completion of your internship, you will receive a
            professional certificate that recognizes your dedication, skills,
            and contributions to the program.
          </p>
          <p>
            This certificate will be a valuable addition to your portfolio and
            help you showcase your expertise to future employers.
          </p>
        </div>
      </div>
    </section>
  );

         

        </div>
        
    );
};

export default Internship;
