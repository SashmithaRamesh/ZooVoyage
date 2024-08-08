import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import './GetStarted.css';
import Logo from './Logo.png'; // Import the logo
import Login from '../FirstPage/Login'; // Import the Login component
import Register from '../FirstPage/Register'; // Import the Register component

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#B69E4A',
    },
    secondary: {
      main: '#fff',
    },
  },
});

const GetStarted = () => {

  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to manage login popup
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // State to manage register popup

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  const glitter = keyframes`
  0%, 100% {
    opacity: 12;
    transform: scale(1);
  }
  50% {
    opacity: 1.6;
    transform: scale(1.2);
  }
`;

  return (
    <ThemeProvider theme={theme}>
      <div className={`get-container ${isRegisterOpen || isLoginOpen ? 'modal-open' : ''}`}>
        <header className="get-header">
          <div className="get-header-buttons">
            <img src={Logo} alt="Zoo Voyage Logo" className="get-logo" />
            <Typography
              color="white"
              noWrap
              sx={{ flex: 1 }}
            >
              <p className='get-zoovoyage'> ZOO VOYAGE </p>
            </Typography>
            <Button
              sx={{
                color: 'white',
                height: '40px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#B69E4A',
                },
              }}
              onClick={handleLoginClick}
            >
              Login
            </Button>
            &nbsp;&nbsp;
            <Button
              sx={{
                color: 'white',
                height: '40px',
                border: '1px solid white',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#B69E4A',
                  border: '1px solid #B69E4A',
                },
              }}
              onClick={handleRegisterClick}
            >
              Sign up
            </Button>
          </div>
        </header>
        <main className="get-main">
          <div className="get-image-container">
            <p className='wel'>Welcome To ZooVoyage!</p>
            <button className="get-started-button">Get Started</button>
          </div>
        </main>
        <footer className='get-footer'>
          <div className="social-media">
            <h5 className="x">FOLLOW &nbsp;US</h5>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="https://facebook.com" color="inherit" target="_blank" rel="noopener">
            <FacebookIcon sx={{ 
              color: 'white',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
          <Link href="https://twitter.com" color="inherit" target="_blank" rel="noopener">
            <TwitterIcon sx={{ 
              color: 'white',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
          <Link href="https://instagram.com" color="inherit" target="_blank" rel="noopener">
            <InstagramIcon sx={{ 
              color: 'white',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
        </div>
        </footer>

        {isLoginOpen && <Login onClose={handleCloseLogin} />} {/* Conditionally render the Login component */}
        {isRegisterOpen && <Register onClose={handleCloseRegister} />} {/* Conditionally render the Register component */}
      </div>
    </ThemeProvider>
  );
};

export default GetStarted;
