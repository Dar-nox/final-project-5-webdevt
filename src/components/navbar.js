import React from "react";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">KDA</div>
      <div className="navbar-links">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#reservation" className="navbar-link">Reservation</a>
        <a href="#menu" className="navbar-link">Menu</a>
      </div>
    </nav>
  );
};

export default Navbar;
