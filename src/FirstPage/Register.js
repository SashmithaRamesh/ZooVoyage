import React, { useState, useContext } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserContext } from './UserContext';
import './Register.css';

const Register = () => {

  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(null);
  const [signupDetails, setSignupDetails] = useState({ 
    username: "",
    contact: "",
    email: "",
    password: "",
   });
   
   const { setUser } = useContext(UserContext); 

  const checkUserExists = async (username) => {
      const response = await axios.get('');
      return response.data.some(user => user.username === username);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const userExists = await checkUserExists(signupDetails.username);
    if (userExists) {
      console.log('User already exists. Redirecting to login...');
      navigate('/login');
      return;
    }

    if (confirm !== signupDetails.password){
      alert('Password and Confirm Password are not same...')
      return;
    }

    axios.post('', signupDetails)
      .then(response => {
        console.log('Signup successful:', response.data);
        setUser(response.data);
        navigate('/profile');
      })
      .catch(error => {
        console.error('Signup error:', error);
      });
  };

  const handleInputChange = (e) => {
    // alert(e.target.name);
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>REGISTER</h2>
        <div className="form-group">
          <input 
            placeholder='username'
            type="text"
            name='username' 
            value={signupDetails.username} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            placeholder='mobile number'
            type="tel" 
            name='contact'
            value={signupDetails.contact} 
            onChange={handleInputChange} 
            pattern="[0-9]{10}"
            required 
          />
        </div>
        <div className="form-group">
          <input 
            placeholder='e-mail'
            type="email" 
            name='email'
            value={signupDetails.email} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            placeholder='password'
            type="password" 
            name='password'
            value={signupDetails.password} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            placeholder='confirm password'
            type="password" 
            name="confirmPassword"
            value={confirm} 
            onChange={handleConfirmPassword} 
            required 
          />
        </div>
        <button type="submit" className="register-button">Register</button>
        <br></br>
        <div className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
