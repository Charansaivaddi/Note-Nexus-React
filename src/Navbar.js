import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <fieldset className="menu_bar">
        <h3>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/make-music">Make Music</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/tutorial">Tutorial</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/signup">Sign Up</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </h3>
      </fieldset>
    </div>
  );
};

export default Navbar;
