import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Branches = () => (
  <Box p={3}>
    <Typography variant="h4" color="error">Branches</Typography>
    <Paper elevation={3} sx={{ padding: 2, mt: 2 }}>
      <Typography>Branch details go here.</Typography>
    </Paper>
  </Box>
);

export default Branches;
