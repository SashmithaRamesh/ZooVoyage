import React from 'react';
import './Report.css';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';

const Report = () => {
  return (
    <div className="contact-container">

      <header className='head'>
        <h4 className="Z">REPORT</h4>
        <br />
        <div className="email-form-group">
          TO EMAIL:
          <input className='toemail' type="email" name="to email" placeholder="to email" required />
        </div>
        <br></br>
        <form className="contact-form">
          <div className="report-form-group">
          NAME:
            <input type="text" name="name" placeholder="name" required />
          </div>
          <div className="report-form-group">
          EMAIL:
            <input type="email" name="email" placeholder="email" required />
          </div>
          <div className="report-form-group">
          ZOO NAME:
            <input type="text" name="zoo name" placeholder="name of the zoo" required />
          </div>
          <div className="report-form-group">
            MESSAGE:
            <textarea name="message" rows="4" placeholder="your message" required></textarea>
          </div>
          <button type="submit" className="contact-button">SUBMIT</button>
        </form>
      </header>

      <br></br>
      
      <main className="contact-info">
        <h5 className="Z">CONTACT INFORMATION</h5>
        <p>Email: support@zoovoyage.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Zoo Lane, Animal City, World</p>
      </main>

      <footer className='f'>
        <div className="social-media">
          <h5 className="Z">FOLLOW US</h5>
        </div>
        <div className="m">
          <table>
            <tr>
              <td>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                  <img src={facebook} alt="Facebook" />
                </a>
              </td>
              <td>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                  <img src={twitter} alt="Twitter" />
                </a>
              </td>
              <td>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                  <img src={instagram} alt="Instagram" />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </footer>
    </div>
  );
};

export default Report;