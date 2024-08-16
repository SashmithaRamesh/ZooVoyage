import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, MenuItem, Button, Typography, Grid, Box, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './ResortBook.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b3e15',
    },
  },
});

const ResortBook = () => {
  const [numRooms, setNumRooms] = useState(1);
  const [numPersons, setNumPersons] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const carouselImages = [
    'https://lh5.googleusercontent.com/p/AF1QipM3gDxA2SwkwQCYaXpEqoJKeiTM7qrUZTVRyvpJ=w253-h337-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipOMy0wkyfWQG317-jJO9cRvv6IdlhCYUrKQIPKN=w253-h168-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipOPFMOLjs8CqYLejZPU11UK0oIyjKTJUOGsIGZb=w253-h352-k-no'
  ];

  // Example room cost and availability
  const roomCost = 4000;
  const roomAvailable = true;

  return (
    <ThemeProvider theme={theme}>
      <Container className="resort-book-container">
        <Box className="resort-book-header">
          <Typography variant="h5" gutterBottom>
            BOOK YOUR STAY
          </Typography>

          <Box my={4} className="resort-book-details">
            <Typography variant="h6" gutterBottom>
            The River Tern Lodge
            </Typography>
            <Typography variant="body1">
            Behind Ranganathaswamy Temple, Karnataka. The Bhadra Tiger Reserve is about 4 km from the Lodge
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <br></br>
            <Grid item xs={12} md={4}>
              <TextField
                select
                label="Number of Rooms"
                value={numRooms}
                onChange={(e) => setNumRooms(e.target.value)}
                fullWidth
                variant="outlined"
                className="resort-book-textfield"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            &nbsp;&nbsp;
            <Grid item xs={12} md={4} className="resort-book-persons-container">
              <TextField
                select
                label="Total Number of Persons"
                value={numPersons}
                onChange={(e) => setNumPersons(e.target.value)}
                fullWidth
                variant="outlined"
                className="resort-book-textfield"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Grid>  
              <br></br>
              <Box>
                <Typography variant="body2" className={`resort-book-availability ${roomAvailable ? 'available' : 'not-available'}`}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{roomAvailable ? 'Room Available' : 'Room Not Available'}
                </Typography>
              </Box>
              <Box className="resort-book-info">
                <Typography variant="body2" className="resort-book-cost">
                  Rs. {roomCost}/room
                </Typography>
              </Box>
            </Grid>

          </Grid>

          <Grid container spacing={2} my={4}>
            <Grid item xs={12} md={6}>
              <Carousel className="resort-book-carousel">
                {carouselImages.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`resort image ${index + 1}`} 
                    className="resort-book-carousel-image" 
                  />
                ))}
              </Carousel>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box mb={2}>
                <label htmlFor="check-in-date">Check-In Date</label>
                <input
                  type="date"
                  id="check-in-date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="resort-book-input"
                />
              </Box>
              <Box mb={2}>
                <label htmlFor="check-out-date">Check-Out Date</label>
                <input
                  type="date"
                  id="check-out-date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="resort-book-input"
                />
              </Box>
              <Link to='/payment'>
              <Button variant="contained" color="primary" className="resort-book-button">
                Book Now
              </Button>
              </Link>
            </Grid>
          </Grid>


        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ResortBook;
