import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
import './Login.css';

const Login = ({ onRegisterClick }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get('http://localhost:8080/get')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(user => user.email === loginDetails.email && user.password === loginDetails.password);

    if (foundUser) {
      setUser(foundUser);
      navigate('/');
    } else {
      alert('Account not found. Please register.');
      onRegisterClick(); // Call the function to switch to the Register component
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <video autoPlay muted loop id="background-video">
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form onSubmit={handleLogin} className="login-form">
        <br></br>
        <h2>LOGIN</h2>
        <div className="form-group">
          <input 
            placeholder='e-mail'
            type="email" 
            name='email'
            value={loginDetails.email} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            placeholder='password'
            type="password" 
            name='password'
            value={loginDetails.password} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <h6><button type="submit" className="login-button">Login</button></h6>
        
        <div className="register-link">
          <h6 className='z'><b>New User? </b><span onClick={onRegisterClick} style={{cursor: 'pointer', color: 'blue'}}>Register here</span></h6>
        </div>
      </form>
    </div>
  );
};

export default Login;
