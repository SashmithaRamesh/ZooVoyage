import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
import './Login.css';

const Login = ({ onClose, onRegisterClick }) => { 
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
      navigate('/home');
    } else {
      alert('Account not found. Please register.');
      onClose();
      onRegisterClick();
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleRegisterClick = () => {
    onClose(); 
    onRegisterClick();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <span className="log-close-button" onClick={onClose}>&times;</span> 
        <br></br>
        <h2>LOGIN</h2>
        <div className="log-form-group">
          <input 
            placeholder='e-mail'
            type="email" 
            name='email'
            value={loginDetails.email} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="log-form-group">
          <input 
            placeholder='password'
            type="password" 
            name='password'
            value={loginDetails.password} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <br></br>
        <button type="submit" className="login-button">Login</button>
        <div className="register-link">
          <span className='z'>New User ? </span>
          <span onClick={handleRegisterClick} style={{cursor: 'pointer', color: '#B69E4A'}}>&nbsp;Register here</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
