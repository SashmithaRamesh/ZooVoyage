import * as React from 'react';
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
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small" sx={{ color: '#4A0A1A' }}>Profile</Button>
        <Typography
          component="h2"
          variant="h5"
          color="#4A0A1A"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          ZOO VOYAGE
        </Typography>

        <IconButton>
          <SearchIcon sx={{ color: '#4A0A1A' }}/>
        </IconButton>

        <Link to='/login'>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{
            borderColor: '#4A0A1A', 
            color: '#BF1D1A',
            '&:hover': {
            borderColor: '#F77D00',
            backgroundColor: 'rgba(215, 35, 21, 0.04)'
          }}}>
          Login
          </Button>
        </Link> 

        &nbsp;&nbsp;

        <Link to='/register'>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{
            borderColor: '#4A0A1A', 
            color: '#BF1D1A',
            '&:hover': {
            borderColor: '#F77D00',
            backgroundColor: 'rgba(215, 35, 21, 0.04)'
          }}}>
          Sign up
          </Button>
        </Link>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            to={section.url}
            sx={{ p: 1, flexShrink: 0 }}
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
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;