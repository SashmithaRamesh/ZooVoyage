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
        <Link to="/profile" style={{ textDecoration: 'none', color: '#4A0A1A' }}>
          <Button
            size="small"
            sx={{
              backgroundColor: '#450920',
              color: 'white',
              '&:hover': {
                backgroundColor: '#a53860',
              },
            }}
          >
            Profile
          </Button>
        </Link>
        <Typography
          component="h2"
          variant="h5"
          color="#450920"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          ZOO VOYAGE
        </Typography>
        <IconButton>
          <SearchIcon sx={{ color: '#4A0A1A' }} />
        </IconButton>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <Button
            size="small"
            sx={{
              backgroundColor: '#450920',
              color: 'white',
              '&:hover': {
              backgroundColor: '#a53860',
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
              backgroundColor: '#450920',
              color: 'white',
              '&:hover': {
              backgroundColor: '#a53860',
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
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            key={section.title}
            to={section.url}
            style={{ color: '#450920', textDecoration: 'none', padding: '8px', flexShrink: 0 }}
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
