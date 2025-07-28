import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Revenue = () => (
  <Box p={3}>
    <Typography variant="h4" color="error">Revenue</Typography>
    <Paper elevation={3} sx={{ padding: 2, mt: 2 }}>
      <Typography>Revenue details and summaries go here.</Typography>
    </Paper>
  </Box>
);

export default Revenue;
