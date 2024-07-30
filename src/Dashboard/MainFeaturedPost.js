import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
    sx={{
      position: 'relative',
      backgroundColor: 'grey.800',
      color: '#fff',
      mb: 4,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${post.image})`,
      '&:hover': {
        transform: 'scale(1.02)', 
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
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h5" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link to="/about"  sx={{
              backgroundColor: '#a53860',
              color: 'white',}}> 
            {post.linkText}
            </Link>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <br></br><br></br><br></br><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/booking">
            <Button size="medium"
            sx={{
              backgroundColor: '#a53860',
              color: 'white',
              '&:hover': {
                backgroundColor: '#ce4257',
                borderColor: '#DA627D'
              },
              }}>
                Buy Tickets
              </Button>
            </Link>
            <br></br><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button size="medium"
            sx={{
              backgroundColor: '#a53860',
              color: 'white',
              '&:hover': {
                backgroundColor: '#ce4257',
                borderColor: '#DA627D'
              },
            }}>
              Track Transactional Status
            </Button>
          </Box>
        </Grid>
      </Grid>
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
