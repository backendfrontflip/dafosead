import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Team = () => (
  <Box p={3}>
    <Typography variant="h4" color="error">Team</Typography>
    <Paper elevation={3} sx={{ padding: 2, mt: 2 }}>
      <Typography>List of team members will be displayed here.</Typography>
    </Paper>
  </Box>
);

export default Team;
