import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoard.css';

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Zoo Ticket Booking</h1>
        <nav>
          <ul className="main-nav">
            <li><Link to="/">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/events">Zoo Events</Link></li>
            <li><Link to="/adopt">Animal Adoptions</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="intro-section">
          <h2>Welcome to Zoo Ticket Booking</h2>
          <p>Book your tickets easily and enjoy a wonderful day at the zoo!</p>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
