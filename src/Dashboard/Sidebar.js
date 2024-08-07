import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Sidebar(props) {
  const {description, title } = props;

  return (
    <Grid item xs={1} md={13} >
      <Paper elevation={9} sx={{ p: { xs: 3, md: 6 }, bgcolor: '#f5a142' }}>
        <Typography variant="h6" gutterBottom >
          Upload your Vlogs
        </Typography>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}
      
      </Typography>
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;