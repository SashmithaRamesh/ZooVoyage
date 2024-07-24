import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
import './Login.css';

const Login = () => {
  
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: ''
  });
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get('')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(user => user.username === loginDetails.username && user.password===loginDetails.password);
    
    // console.log(foundUsers);

    if (foundUsers.length > 0) {
      setUser(foundUsers[0]);
      navigate('/profile')
    } else {
      alert('Account not found please register')
      navigate('/reg')
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };


  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>LOGIN</h2>
        <div className="form-group">
          
          <input 
            placeholder='e-mail'
            type="email" 
            value={loginDetails.email} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          
          <input 
            placeholder='password'
            type="password" 
            value={loginDetails.password} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <br></br>
        <div className="register-link">
         <p className='z'> New User?&nbsp;&nbsp;<Link to="/register">Register here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
