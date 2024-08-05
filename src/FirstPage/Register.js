import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
import './Register.css';

const Register = ({ onLoginClick }) => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState('');
  const [signupDetails, setSignupDetails] = useState({
    username: '',
    contact: '',
    email: '',
    password: '',
  });
  const { setUser } = useContext(UserContext);

  const checkUserExists = async (username) => {
    const response = await axios.get('http://localhost:8080/get');
    return response.data.some((user) => user.username === username);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const userExists = await checkUserExists(signupDetails.username);
    if (userExists) {
      console.log('User already exists. Redirecting to login...');
      onLoginClick(); // Call the function to switch to the Login component
      return;
    }

    if (confirm !== signupDetails.password) {
      alert('Password and Confirm Password are not the same...');
      return;
    }

    axios
      .post('http://localhost:8080/insert', signupDetails)
      .then((response) => {
        console.log('Signup successful:', response.data);
        setUser(response.data); // Set user details in context
        navigate('/'); // Redirect to profile page after successful registration
      })
      .catch((error) => {
        console.error('Signup error:', error);
      });
  };

  const handleInputChange = (e) => {
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
            placeholder="username"
            type="text"
            name="username"
            value={signupDetails.username}
            onChange={handleInputChange}
            pattern="[a-zA-Z]*"
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="mobile number"
            type="tel"
            name="contact"
            value={signupDetails.contact}
            onChange={handleInputChange}
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="e-mail"
            type="email"
            name="email"
            value={signupDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="password"
            type="password"
            name="password"
            value={signupDetails.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="confirm password"
            type="password"
            name="confirmPassword"
            value={confirm}
            onChange={handleConfirmPassword}
            required
          />
        </div>
        <h6><button type="submit" className="register-button">
          Register
        </button></h6>
        <div className="login-link">
          <h6 className='z'><b>Already have an account? </b><span onClick={onLoginClick} style={{cursor: 'pointer', color: 'blue'}}>Login here</span></h6>
        </div>
      </form>
    </div>
  );
};

export default Register;
