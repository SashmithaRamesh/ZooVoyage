import React from 'react';
import './Contact.css';
import facebookLogo from './assets/facebook-logo.png';
import twitterLogo from './assets/twitter-logo.png';
import instagramLogo from './assets/instagram-logo.png';

const ContactUs = () => {
  return (
  
    <div className="contact-container">
      <h1 className="z">Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          Name:
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          Email:
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          Message:
          <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="contact-button">Submit</button>
      </form>
      <div className="contact-info">
        <h2 className="z">Contact Information</h2>
        <p>Email: support@zootickets.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Zoo Lane, Animal City, World</p>
      </div>
      <div className="social-media">
        <h2 className="z">Follow Us</h2>
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

export default ContactUs;
