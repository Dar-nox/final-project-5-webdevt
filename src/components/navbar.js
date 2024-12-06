import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">KDA</div>
      <div className="navbar-links">
        <NavLink to="/" className="navbar-link" activeClassName="active">Home</NavLink>
        <NavLink to="/reservation" className="navbar-link" activeClassName="active">Reservation</NavLink>
        <NavLink to="/admin" className="navbar-link" activeClassName="active">Admin</NavLink> {/* Link to Admin page */}
      </div>
    </nav>
  );
};

export default Navbar;
