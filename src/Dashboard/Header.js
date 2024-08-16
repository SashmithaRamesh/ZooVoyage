import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { UserContext } from '../FirstPage/UserContext';
import './Blog.css';

function Header(props) {
  const { sections} = props;
  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#3b3e15' }}>
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
        <Link to='/profile'>
        <Button
          sx={{
            fontWeight: 'bolder',
            color: 'white',
            border: '1.5px solid white',
            borderRadius: '50%',
            width: '40px',  
            height: '40px', 
            minWidth: '40px', 
            '&:hover': {
              color: 'white',
              backgroundColor: '#B69E4A',
              border: '1px solid #B69E4A',
            },
          }}
        >
          {/*{user.username.charAt(0)}*/}
        </Button>
        </Link>
        
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto', backgroundColor: '#B69E4A' }}
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
  )//.isRequired,
  //onProfileClick: PropTypes.func.isRequired, // Add prop type for onProfileClick
};

export default Header;
