import React, { useContext } from 'react';
import emailjs from 'emailjs-com';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { keyframes } from '@mui/system';
import './Report.css';
import { UserContext } from '../FirstPage/UserContext';

const Report = () => {
  const { user } = useContext(UserContext); 

  const glitter = keyframes`
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 1.6;
      transform: scale(1.2);
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = 'service_phidlmu';
    const TEMPLATE_ID = 'template_mli653f';
    const USER_ID = 'jwjWfj_bQStIvEkpo';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contact-container" onSubmit={handleSubmit}>
      <header className='head'>
        <h4 className="Z">REPORT</h4>
        <div className="email-form-group">
          <label htmlFor="toemail">TO EMAIL:</label>
          <input 
            id="toemail"
            className='toemail' 
            type="email" 
            name="email" 
            placeholder="to email" 
            required 
          />
        </div>
        <br />

        <form className="contact-form">
          <div className="report-form-group">
            <div><label htmlFor="name">NAME:</label></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <input 
                className='in-name'
                id="name"
                type="text" 
                name="name" 
                placeholder="name" 
                value={user ? user.username : ''} 
                required 
              />
            </div>
          </div>

          <div className="report-form-group">
            <label htmlFor="from-email">EMAIL:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input 
              id="email"
              type="email" 
              name="fromemail" 
              placeholder="from email" 
              value={user ? user.email : ''}
              required 
            />
          </div>

          <div className="report-form-group">
            <label htmlFor="zoo-name">ZOO NAME:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input 
              id="zoo-name"
              type="text" 
              name="zoo-name" 
              placeholder="name of the zoo" 
              required 
            />
          </div>

          <div className="report-form-group">
            <label htmlFor="message">MESSAGE:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              placeholder="your message" 
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-button">SUBMIT</button>
        </form>  
      </header>
      <br />
      <main className="contact-info">
        <h4 className="x">CONTACT &nbsp;INFORMATION</h4>
        <p>Email: support@zoovoyage.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Zoo Lane, Animal City, World</p>
      </main>

      <footer className='f'>
        <div className="social-media">
          <h4 className="x">FOLLOW &nbsp;US</h4>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="https://facebook.com" color="inherit" target="_blank" rel="noopener">
            <FacebookIcon sx={{ 
              color: '#9b863c',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
          <Link href="https://twitter.com" color="inherit" target="_blank" rel="noopener">
            <TwitterIcon sx={{ 
              color: '#9b863c',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
          <Link href="https://instagram.com" color="inherit" target="_blank" rel="noopener">
            <InstagramIcon sx={{ 
              color: '#9b863c',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Report;
