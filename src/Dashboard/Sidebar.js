import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Sidebar(props) {
  const {description, social, title } = props;

  return (
    <Grid item xs={1} md={13} >
      <Paper elevation={9} sx={{ p: { xs: 3, md: 6 }, bgcolor: '#fce0e5' }}>
        <Typography variant="h6" gutterBottom >
          Upload your Vlogs
        </Typography>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}
      {social.map((network) => (
        <Link
        display="block"
        variant="body1"
        href="#"
        key={network.name}
        sx={{ mb: 0.1 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
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