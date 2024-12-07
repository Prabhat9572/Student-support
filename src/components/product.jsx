import React from 'react';
import '../Style/product.css'; // Assuming you have a CSS file for stylin
const Product = () => {
    return (
        <div className="product-page">
            <header className="product-header">
                <h1>Explore Our Products</h1>
                <p>Find the tools and resources that suit your academic and professional needs.</p>
            </header>
            
            <section className="product-list">
                {/* Example Product Cards */}
                <div className="product-card">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Product 1" 
                        className="product-image"
                    />
                    <h2 className="product-title">Course Tracker</h2>
                    <p className="product-description">
                        Stay on top of your learning journey with personalized course tracking tools.
                    </p>
                    <button className="product-button">Learn More</button>
                </div>

                <div className="product-card">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Product 2" 
                        className="product-image"
                    />
                    <h2 className="product-title">Resource Library</h2>
                    <p className="product-description">
                        Access a vast collection of resources to enhance your academic experience.
                    </p>
                    <button className="product-button">Learn More</button>
                </div>

                <div className="product-card">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Product 3" 
                        className="product-image"
                    />
                    <h2 className="product-title">Student Support Dashboard</h2>
                    <p className="product-description">
                        Manage your academic goals and track progress in one place.
                    </p>
                    <button className="product-button">Learn More</button>
                </div>
            </section>
        </div>
    );
};

export default Product;
