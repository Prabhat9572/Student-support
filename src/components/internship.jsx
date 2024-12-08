import React from 'react';
import '../Style/internship.css'; // CSS for styling

const Internship = () => {
    return (
        <div className="internship">
            <header className="product-header">
                <div className="header-content">
                    {/* <h1>Internship Programs</h1> */}
                    <p>
                        Our internship program equips you with real-world skills and opportunities 
                        to grow in a professional environment.
                    </p>
                    {/* <a href="#apply" className="apply-button">Apply Now</a> */}
                </div>
            </header>

            <section className="internship-list">
                <h2>Departments</h2>
                <div className="internship-cards">
                    {/* Data Science Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.iimtindia.net/Blog/wp-content/uploads/2021/06/Data-Science.jpg" 
                            alt="This is an image" width={250} height={250}
                            className="internship-image"
                        />
                        <h3 className="internship-title">Data Science</h3>
                        <p className="internship-description">
                        The Data Science Internship offers practical experience in data analysis, machine learning, and using tools like Python to gain insights from data.
                        </p>
                        <a href="#apply" className="apply-button">Apply Now</a>
                    </div>

                    {/* Web Development Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/web_ilY3NoA.jpeg" 
                            alt="This ia an image" width={200} height={200}
                            className="product-image"
                        />
                        <h3 className="internchip-title">Web Development</h3>
                        <p className="internship-description">
                        The Web Development Internship offers practical experience in building websites using front-end and back-end technologies. 
                        </p>
                        <a href="#apply" className="apply-button">Apply Now</a>
                    </div>

                    {/* Cyber Security Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.commtech.com/wp-content/uploads/2024/06/Depositphotos_174652098_XL-900x600.jpg" 
                            alt="This ia an image" width={200} height={200}
                            className="product-image"
                        />
                        <h3 className="internchip-title">Cyber Security</h3>
                        <p className="internship-description">
                        The Cyber Security Internship offers practical experience in protecting digital assets and networks from threats, preparing interns for a career in cyber security.
                        </p>
                        <a href="#apply" className="apply-button">Apply Now</a>
                    </div>

                    {/* Data Analytics Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://img.freepik.com/premium-photo/graphical-chart-analysis_93675-43498.jpg" 
                            alt="This iam an image" width={250} height={300}
                            className="product-image"
                        />
                        <h3 className="product-title">Data Analytics</h3>
                        <p className="product-description">
                        Data Analytics Internship offers an exciting opportunity for aspiring data professionals to dive into the world of data analysis, interpretation, and decision-making
                        </p>
                        <a href="#apply" className="apply-button">Apply Now</a>
                    </div>

                    {/* AI & Machine Learning Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://wallpaperaccess.com/full/1398494.jpg" 
                            alt="This is an image" width={250} height={250}
                            className="internship-image"
                        />
                        <h3 className="internship">AI & Machine Learning</h3>
                        <p className="internship-description">
                            Dive deep into machine learning algorithms and artificial intelligence techniques.
                        </p>
                        <a href="#apply" className="apply-button">Apply Now</a>
                    </div>

                    {/* Digital Marketing Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://learn.ideaboxtechnology.com/wp-content/uploads/2023/05/career-in-digital-marketing.png" 
                            alt="This is an image" width={250} height={250}
                            className="product-image"
                        />
                        <h3 className="product-title">Digital Marketing</h3>
                        <p className="product-description">
                            Gain hands-on experience with SEO, social media, and online marketing strategies.
                        </p>
                        <a href="#apply" className="apply-button">Apply Now</a>
                    </div>

                    {/* Business Analysis Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.mindsmapped.com/wp-content/uploads/2014/09/What-is-Business-Analysis.jpg" 
                            alt="Business Analysis" width={250} height={300}
                            className="product-image"
                        />
                        <h3 className="product-title">Business Analysis</h3>
                        <p className="product-description">
                            Understand business problems and find effective solutions using data analytics.
                        </p>
                        <a href="#apply" className="apply-button">Apply Now</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Internship;
