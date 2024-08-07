import React, { useState } from 'react';
import { TextField, MenuItem, Button, Card, CardMedia, CardContent, Typography, Grid, Box } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Resort.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00695c',
    },
  },
});

const resorts = [
  {
    name: 'Beachside Resort',
    place: 'Maldives',
    image: 'https://example.com/beachside.jpg',
  },
  {
    name: 'Mountain Retreat',
    place: 'Swiss Alps',
    image: 'https://example.com/mountain.jpg',
  },
  {
    name: 'Desert Oasis',
    place: 'Dubai',
    image: 'https://example.com/desert.jpg',
  },
];

const Resort = () => {
  const [selectedResort, setSelectedResort] = useState('');
  const [numRooms, setNumRooms] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearch = () => {
    // Add search logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="resort-container">
        <header className="resort-header">
          <Typography variant="h4" color="white" align="center">Resort Booking</Typography>
        </header>

        <main className="resort-main">
          <Box className="resort-search">
            <TextField
              label="Select Resort"
              select
              fullWidth
              value={selectedResort}
              onChange={(e) => setSelectedResort(e.target.value)}
              variant="outlined"
              margin="normal"
              color="primary"
            >
              {resorts.map((resort) => (
                <MenuItem key={resort.name} value={resort.name}>
                  {resort.name} - {resort.place}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Number of Rooms"
              select
              fullWidth
              value={numRooms}
              onChange={(e) => setNumRooms(e.target.value)}
              variant="outlined"
              margin="normal"
              color="primary"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <MenuItem key={num} value={num}>
                  {num} {num === 1 ? 'Room' : 'Rooms'}
                </MenuItem>
              ))}
            </TextField>

            

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSearch}
              className="resort-search-button"
            >
              Search
            </Button>
          </Box>

          <Grid container spacing={3} className="resort-recommendations">
            {resorts.map((resort) => (
              <Grid item xs={12} md={4} key={resort.name}>
                <Card className="resort-card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={resort.image}
                    alt={resort.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{resort.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {resort.place}
                    </Typography>
                    <Button variant="outlined" color="primary" fullWidth className="resort-view-more">
                      View More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
      </Box>
    </ThemeProvider>
  );
};

export default Resort;
