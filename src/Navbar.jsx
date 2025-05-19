import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          MorrisCode
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/events">Upcoming Events</a></li>
          <li><a href="mailto:morriscodeteam@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="donate-btn">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
