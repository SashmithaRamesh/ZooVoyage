import React from 'react';
import './Report.css';
import facebookLogo from './assets/facebook-logo.png';
import twitterLogo from './assets/twitter-logo.png';
import instagramLogo from './assets/instagram-logo.png';

const Report = () => {
  return (
  
    <div className="contact-container">
      <h4 className="Z">REPORT</h4>
      <br></br>
      <form className="contact-form">
        <div className="form-group">
          NAME:
          <input type="text" name="name" placeholder="name" required />
        </div>
        <div className="form-group">
          EMAIL:
          <input type="email" name="email" placeholder="email" required />
        </div>
        <div className="form-group">
          MESSAGE:
          <textarea name="message" rows="4" placeholder="your message" required></textarea>
        </div>
        <button type="submit" className="contact-button">SUBMIT</button>
      </form>
      <div className="contact-info">
        <h4 className="Z">CONTACT INFORMATION</h4>
        <p>Email: support@zoovoyage.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Zoo Lane, Animal City, World</p>
      </div>
      <div className="social-media">
        <h5 className="Z">FOLLOW US</h5>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" />
        </a>
      </div>
    </div>
   
  );
};

export default Report;
