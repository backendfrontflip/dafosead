import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Staffs = () => (
  <Box p={3}>
    <Typography variant="h4" color="error">Staffs</Typography>
    <Paper elevation={3} sx={{ padding: 2, mt: 2 }}>
      <Typography>All staff records shown here.</Typography>
    </Paper>
  </Box>
);

export default Staffs;
