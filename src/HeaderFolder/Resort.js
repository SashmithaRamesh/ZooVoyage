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

const wildlifeSanctuaries = [
  'Bhadra Wildlife Sanctuary, Karnataka',
  'Tadoba Andhari Tiger Reserve, Maharashtra',
  'Chinnar Wildlife Sanctuary, Kerala',
  'Dandeli Wildlife Sanctuary, Karnataka',
  'Bhagwan Mahavir Wildlife Sanctuary, Goa',
  'Interview Island Wildlife Sanctuary, Andaman',
  'Kutch Desert Wildlife Sanctuary, Gujarat',
  'Karakoram Wildlife Sanctuary, Jammu And Kashmir',
  'Indian Wild Ass Sanctuary, Gujarat',
  'Dibang Wildlife Sanctuary, Arunachal Pradesh',
  'Rollapadu Wildlife Sanctuary, Andhra Pradesh',
  'Grizzled Squirrel Wildlife Sanctuary, Tamil Nadu',
  'Eaglenest Wildlife Sanctuary, Arunachal Pradesh',
  'Koyna Wildlife Sanctuary, Maharashtra',
  'Tamor Pingla Wildlife Sanctuary, Chhattisgarh',
  'Senchal Wildlife Sanctuary, West Bengal',
  'Periyar Wildlife Sanctuary, Kerala',
  'Govind Wildlife Sanctuary, Uttarakhand',
  'Chilka Wildlife Sanctuary, Odisha',
  'Nauradehi Wildlife Sanctuary, Madhya Pradesh',
  'Manas Wildlife Sanctuary, Assam',
  'Mundanthurai Wildlife Sanctuary, Tamil Nadu',
  'Indira Gandhi Wildlife Sanctuary, Tamil Nadu',
  'Landfall Island Wildlife Sanctuary, Andaman',
  'Eturnagaram Wildlife Sanctuary, Telangana',
];

const resorts = [
  {
    name: 'Beachside Resort',
    place: 'Maldives',
    image: 'https://tse1.mm.bing.net/th?id=OIP.TkTO0X-Fykaa1X0DqrfUiwHaEX&pid=Api&P=0&h=180',
  },
  {
    name: 'Mountain Retreat',
    place: 'Swiss Alps',
    image: 'https://tse4.mm.bing.net/th?id=OIP.su2YDWFfNuw_9QOKMdLETAHaEK&pid=Api&P=0&h=180',
  },
  {
    name: 'Desert Oasis',
    place: 'Dubai',
    image: 'https://tse1.mm.bing.net/th?id=OIP.zlxU5NFOwbKtP8mRdiJ3RwHaEK&pid=Api&P=0&h=180',
  },
];

const Resort = () => {
  const [selectedSanctuary, setSelectedSanctuary] = useState('');
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
          <Typography variant="h5" color="white" align="center">RESORT&nbsp;&nbsp; BOOKING</Typography>
        </header>

        <main className="resort-main">
          <Box className="resort-search">
            <TextField
              label="Select Wildlife Sanctuary"
              select
              fullWidth
              value={selectedSanctuary}
              onChange={(e) => setSelectedSanctuary(e.target.value)}
              variant="outlined"
              margin="normal"
              color="primary"
            >
              {wildlifeSanctuaries.map((sanctuary) => (
                <MenuItem key={sanctuary} value={sanctuary}>
                  {sanctuary}
                </MenuItem>
              ))}
            </TextField>

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
