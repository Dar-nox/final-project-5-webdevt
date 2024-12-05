import React, { useState, useEffect } from "react";
import "./styles/home.css";
import RESTOPIC from './images/RESTOPIC3.jpeg';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      {/* Parallax Hero Section */}
      <div
        className="hero-image"
        style={{
          backgroundPositionY: `${scrollY * 0.5}px`, // Adjust the scroll speed
          backgroundImage: `url(${RESTOPIC})`,
        }}
      ></div>

      {/* Content Section */}
      <div className="home-content">
        <h1 className="welcome-text">KDA Fine Dining</h1>
        <button className="reserve-btn">Reserve</button>
        <h2 className="small-description">"An unforgettable dining experience crafted with excellence and elegance."</h2>
        <div className="footer-box">
          <div className="footer">
          <div className="details-container">
  <div className="contacts">
    <h1 className="footer-brand">KDA Fine Dining</h1>
    <p className="contacts-details">
    789 Luxury Lane, Culinary City, CC 12345<br />
    Phone: +1 (555) 987-6543<br />
    Email: <a href="mailto:reservations@kda-finedining.com">reservations@kda-finedining.com</a>
    </p>
  </div>
  <div className="social-medias">
    <p>
    <span className="follow">Follow us on:<br /></span>
    <a href="https://facebook.com/kdafinedining" target="_blank" rel="noopener noreferrer">Facebook</a><br />
    <a href="https://instagram.com/kdafinedining" target="_blank" rel="noopener noreferrer">Instagram</a><br />
    <a href="https://twitter.com/kdafinedining" target="_blank" rel="noopener noreferrer">Twitter</a>
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;