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
//import Logo from './Logo.png'; 
import Login from '../FirstPage/Login'; 
import Register from '../FirstPage/Register'; 
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

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

  const [isLoginOpen, setIsLoginOpen] = useState(false); 
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); 

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
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1.6;
    transform: scale(1.2);
  }
`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };

  const slides = [
    {
      image: "https://mysuruzoo.info/images/animals-hero/Hero%20Chimp.jpg",
      description: "WELCOME TO ZOO VOYAGE !",
      className: "welcome-to-zoovoyage"
    },
    {
      image: "https://images.pexels.com/photos/25823022/pexels-photo-25823022/free-photo-of-elephant-in-a-jungle.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Witness the Magnificent Elephants in the Heart of the Jungle",
      className: "ele"
    },
    {
      image: "https://images.pexels.com/photos/441222/pexels-photo-441222.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Discover the Wild Beauty by exploring our ZooVoyage",
      className: "beauty"
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className={`get-container ${isRegisterOpen || isLoginOpen ? 'modal-open' : ''}`}>
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
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index}>
                  <img src={slide.image} alt={`Slide ${index + 1}`} className="get-slide-image" />
                  <div className={slide.className}>
                    <h2>{slide.description}</h2>
                  </div>
                </div>
              ))}
            </Slider>
            <br></br>
            <br></br>
            <div className='get-btn-overlay'>
              <button className="get-started-button">Get Started</button>
            </div>
          </div>
        </main>
        <footer className='get-footer'>
          <br></br>
          <div className="social-media">
            <h5 className="xy">FOLLOW &nbsp;US</h5>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link href="https://facebook.com" color="inherit" target="_blank" rel="noopener">
              <FacebookIcon sx={{ 
                color: '#3b3e15',
                fontSize: 30,
                animation: `${glitter} 1.5s infinite`
              }}/>
            </Link>
            <Link href="https://twitter.com" color="inherit" target="_blank" rel="noopener">
              <TwitterIcon sx={{ 
                color: '#3b3e15',
                fontSize: 30,
                animation: `${glitter} 1.5s infinite`
              }}/>
            </Link>
            <Link href="https://instagram.com" color="inherit" target="_blank" rel="noopener">
              <InstagramIcon sx={{ 
                color: '#3b3e15',
                fontSize: 30,
                animation: `${glitter} 1.5s infinite`
              }}/>
            </Link>
          </div>
        </footer>

        {isLoginOpen && <Login onClose={handleCloseLogin} onRegisterClick={handleRegisterClick} />} 
        {isRegisterOpen && <Register onClose={handleCloseRegister} onLoginClick={handleLoginClick} />} 
      </div>
    </ThemeProvider>
  );
};

export default GetStarted;
