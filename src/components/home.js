import React, { useState, useEffect } from "react";
import "./styles/home.css";
import RESTOPIC from './images/RESTOPIC3.jpeg';
import FBlogo from './images/FB.png';
import instalogo from './images/insta.png';
import Xlogo from './images/X.png';
import { NavLink } from "react-router-dom";

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

      <div
        className="hero-image"
        style={{
          backgroundPositionY: `${scrollY * 0.5}px`, // Adjust scroll speed
          backgroundImage: `url(${RESTOPIC})`,
        }}
      ></div>

      <div className="home-content">
        <h1 className="welcome-text">KDA Fine Dining</h1>
        <NavLink to="/reservation" className="navbar-link" activeClassName="active"><button className="reserve-btn">Reserve</button></NavLink>
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
    <div className="fb-container">
    <a href="https://facebook.com/kdafinedining" target="_blank" rel="noopener noreferrer"><div className="fb-logo-container">
    <img src={FBlogo} alt="Placeholder" className="fb-logo" />
    </div>Facebook</a><br />
    </div>
    <div className="insta-container">
    <a href="https://instagram.com/kdafinedining" target="_blank" rel="noopener noreferrer"><div className="insta-logo-container">
    <img src={instalogo} alt="Placeholder" className="insta-logo" />
    </div>Instagram</a><br />
    </div>
    <div className="x-container">
    <a href="https://twitter.com/kdafinedining" target="_blank" rel="noopener noreferrer"><div className="insta-logo-container">
    <img src={Xlogo} alt="Placeholder" className="x-logo" />
    </div>X</a><br />
    </div>
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