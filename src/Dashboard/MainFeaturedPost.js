import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import TicketPopup from '../ZooTicket/TicketPopup';

function MainFeaturedPost(props) {
  const { post } = props;
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 3,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
        backgroundImage: `url(${post.image})`,
        '&:hover': {
          transform: 'scale(1.01)', 
        },
      }}
    >
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={25}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 13 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h4" color="white" gutterBottom sx={{ fontWeight: 'bold' }}>
              {post.title}
            </Typography>
            <br></br>
             <Button 
              size="medium"
              sx={{
                width: '115px',
                height: '45px',
                borderRadius: '20px',
                backgroundColor:"#3b3e15",
                color: 'white',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#B69E4A',
                },
              }}
              onClick={handleOpenPopup}
            >
              Buy Ticket
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br></br><br></br>
             <Link to='/whatsapp'>
            <Button 
              size="medium"
              sx={{
                width: '175px', 
                height: '45px',
                borderRadius: '20px',
                backgroundColor:"#3b3e15",
                color: 'white',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#B69E4A',
                },
              }}
            >
              Whats App Booking
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
          </Box>
        </Grid>
      </Grid>
      {isPopupOpen && <TicketPopup onClose={handleClosePopup} />}
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
