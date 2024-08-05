import * as React from 'react';
import './Blog.css';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Header(props) {
  const { sections} = props;

  return (
    <React.Fragment>
      <Toolbar  sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#3b3e15'}}>
      <Link to='/profile' style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              color: 'white',
              '&:hover': {
                color: 'white',
                backgroundColor: '#B69E4A',
              },
            }}
          >
            Profile
          </Button>
        </Link>
        <Typography
          component="h2"
          variant="h5"
          color="white"
          textAlign="center"
          noWrap
          sx={{ flex: 1 }}
        >
        <p className='zoovoyage'> ZOO VOYAGE </p>
        </Typography>
        <IconButton>
          <SearchIcon sx={{ color: 'white' }} />
        </IconButton>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              color: 'white',
              '&:hover': {
                color: 'white',
                backgroundColor: '#B69E4A',
              },
            }}
          >
            Login
          </Button>
        </Link>
        &nbsp;&nbsp;
        <Link to='/register' style={{ textDecoration: 'none' }}>
          <Button
            size="small"
            sx={{
              color: 'white',
              border: '1px solid white',
              '&:hover': {
                color: 'white',
                backgroundColor: '#B69E4A',
                border: '#B69E4A'
              },
            }}
          >
            Sign up
          </Button>
        </Link>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto',backgroundColor: '#B69E4A'  }}
      >
        {sections.map((section) => (
          <Link
            key={section.title}
            to={section.url}
            style={{ color: 'white', textDecoration: 'none', padding: '8px', flexShrink: 0 }}
            variant="body2"
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;