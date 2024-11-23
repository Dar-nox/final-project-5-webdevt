import React from "react";
import "./styles/home.css";
import RESTOPIC from './images/RESTOPIC.jpeg';

const Home = () => {
  return (
    <div className="home">
      {/* Featured Image Section */}
      <div className="hero-image">
        <img src={RESTOPIC} alt="Fine Dining Restaurant" className="hero-pic" />
      </div>

      {/* Content Section */}
      <div className="home-content">
        {/* Introduction */}
        <h1 className="welcome-text">Welcome to KDA Fine Dining</h1>
        <p className="intro-text">
          Indulge in an exceptional culinary journey where flavor meets elegance.
        </p>

        {/* Dining Options */}
        <div className="dining-options">
          {/* Regular Fine Dining */}
          <div className="dining-option">
            <h2>Regular Fine Dining</h2>
            <p>
              Experience carefully curated courses featuring the finest seasonal ingredients, crafted to perfection for a memorable meal.
            </p>
          </div>

          {/* Luxurious VIP Courses */}
          <div className="dining-option">
            <h2>Luxurious VIP Courses</h2>
            <p>
              Enjoy an exclusive dining experience tailored for the discerning palate, with premium ingredients like truffles, caviar, and wagyu beef, served in an intimate setting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
