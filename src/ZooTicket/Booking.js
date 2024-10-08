import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { keyframes } from '@mui/system';
import './Booking.css';
import { Typography, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" align="center" sx={{ color: 'white' }}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b3e15',
    },
  },
});

const Booking = () => {

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
  
  useEffect(() => {
    const ticketOptions = document.querySelectorAll('.ticket-option');
    ticketOptions.forEach((option, index) => {
      option.style.animationDelay = `${index * 0.5}s`;
      option.classList.add('roll-in');
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div className="home-page">
      <div className='choose slide-in'>
        <h2 className='choose-tic'><br />CHOOSE &nbsp;&nbsp;TICKETS <br /></h2>
      </div>
      <br />
      <div className="ticket-options">
        <Link to="/bookingform" className="ticket-option">
          <span className='tick'>ZOO&nbsp;&nbsp;&nbsp;or<br></br> SANCTUARY</span>
          <img className="ticket-option-zoo" src="https://media.istockphoto.com/id/1355516422/photo/entrance-to-the-oakland-zoo-on-a-sunny-day-with-animal-representations-and-plants-decorating.jpg?s=612x612&w=0&k=20&c=wVeCfcDBdalL0NNJaE5VX2tXkogIQDCfLiv-_eKFxjc=" alt="Zoo" />
        </Link>
        <Link to="/bookingform" className="ticket-option">
          <span className='tick'>BUTTERFLY PARK</span>
          <img className="ticket-option-butterfly" src="https://media2.thrillophilia.com/images/photos/000/259/453/original/1589360691_92ce9941ee06035f2e9277c0de872505fafd8366-tc-img-preview.jpg?width=975&height=600" alt="Butterfly Park" />
        </Link>
      </div>
      <br />
      <div className="ticket-options">
        <Link to="/bookingform" className="ticket-option">
          <span className='tick'>BUS&nbsp;&nbsp; SAFARI</span>
          <img className="ticket-option-bus-safari" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBR5mynzcN4QqlNDTCsEzLh-hhc52xSTbwQ&s" alt='safari' />
        </Link>
        <Link to="/bookingform" className="ticket-option">
          <span className='tick'>JEEP&nbsp;&nbsp; SAFARI</span>
          <img className="ticket-option-jeep-safari" src="data:image/jpeg;base64,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" alt="Jeep Safari" />
        </Link>
      </div>
      <br></br>
      <Box component="footer"  sx={{ py: 6, background: '#3b3e15' }}>
      <Container maxWidth="sm">
        
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
        <br />
        <Copyright />
      </Container>
    </Box>
    </div>
    </ThemeProvider>
  );
};

export default Booking;
