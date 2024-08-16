import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../FirstPage/UserContext';
import './ZooDonation.css';

const zoos = [
  'Safari Zoo', 'Wildlife Park', 'Aqua Zoo', 'Mountain Zoo', 'City Zoo', 
  'Rainforest Zoo', 'Desert Zoo', 'Arctic Zoo', 'Jungle Safari Zoo', 
  'River Zoo', 'Savannah Zoo', 'Forest Zoo', 'Adventure Zoo', 'Exotic Zoo', 
  'Wild West Zoo', 'Tropical Zoo', 'Ocean Zoo', 'Bird Sanctuary Zoo', 
  'Reptile Park', 'Asian Wildlife Zoo', 'European Wildlife Park'
];

const ZooDonationion = () => {
  const { user } = useContext(UserContext);

  const [zoo, setZoo] = useState('');
  const [purpose, setPurpose] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { zoo, purpose, name, email, contact } });
  };

  return (
    
    <div className="donation-page">
      <div>
        <br></br>
        <h5 className='don'>MAKE A DONATION</h5>
      </div>
      <div>
        <br></br>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="don-form-group">
         Select Zoo:
          <select id="zoo" value={zoo} onChange={(e) => setZoo(e.target.value)} required className='don-select'>
            <option value="" disabled>Select a zoo</option>
            {zoos.map((zooName, index) => (
              <option key={index} value={zooName}>{zooName}</option>
            ))}
          </select>
        </div>

        <div className="don-form-group">
          Purpose of Donation:<br></br>
          <textarea
            className='don-textarea'
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
            placeholder="Enter the purpose of your donation"
            ></textarea>
        </div>

        <div className="don-form-group">
          Donator's Name:<br></br>
          <input
            className='don-input'
            type="text"
            id="name"
            value={user ? user.username : ''}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            />
        </div>

        <div className="don-form-group">
         Email:
         <br></br>
          <input
            className='don-input'
            type="email"
            id="email"
            value={user ? user.email : ''}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            />
        </div>

        <div className="don-form-group">
          Phone Number:<br></br>
          <input
            className='don-input'
            type="tel"
            id="contact"
            value={user ? user.contact : ''}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Enter your phone number"
            />
        </div>

        <button type="submit" className="submit-button">Proceed to Payment</button>
      </form>
      </div>
    </div>
  );
};

export default ZooDonationion;
