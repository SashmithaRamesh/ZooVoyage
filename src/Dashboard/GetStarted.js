import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { keyframes } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from '../FirstPage/Login';
import Register from '../FirstPage/Register';
import './GetStarted.css';

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

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const handleSignUpClick = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const handleClosePopup = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="get-container">
        <header className="get-header"> 
          <div className="get-header-buttons">
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
                border: '1px solid white',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#B69E4A',
                  border: '1px solid #B69E4A',
                },
              }}
              onClick={handleSignUpClick}
            >
              Sign up
          </Button>
          </div>
        </header>
        <br></br>
        <main className="get-main">
          <div className="get-image-container">
            <p className='wel'>Welcome To ZooVoyage!</p>
            <button className="get-started-button">Get Started</button>
          </div>
        </main>
        <br></br>
        <footer className='get-footer'>
        <div className="social-media">
          <h5 className="x">FOLLOW &nbsp;US</h5>
        </div>
              <br></br>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="https://facebook.com" color="inherit" target="_blank" rel="noopener">
            <FacebookIcon sx={{ 
              color: '#363811',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
          <Link href="https://twitter.com" color="inherit" target="_blank" rel="noopener">
            <TwitterIcon sx={{ 
              color: '#363811',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
          <Link href="https://instagram.com" color="inherit" target="_blank" rel="noopener">
            <InstagramIcon sx={{ 
              color: '#363811',
              fontSize: 30,
              animation: `${glitter} 1.5s infinite`
            }}/>
          </Link>
        </div>
      </footer>

        {isLoginOpen && (
          <div className="get-popup-overlay">
            <Login onClose={handleClosePopup} onRegisterClick={handleSignUpClick} />
          </div>
        )}

        {isRegisterOpen && (
          <div className="get-popup-overlay">
            <Register onClose={handleClosePopup} onLoginClick={handleLoginClick} />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default GetStarted;
