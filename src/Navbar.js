import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/profile" className="nav-link">
          <img src="/path/to/profile-icon.png" alt="Profile" className="profile-icon" />
        </a>
      </div>
      <div className="navbar-center">
        <h1 className="app-name">ZOO VOYAGE</h1>
      </div>
      <div className="navbar-right">
        <a href="/signin" className="nav-link">Sign In</a>
        <a href="/signup" className="nav-link">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
