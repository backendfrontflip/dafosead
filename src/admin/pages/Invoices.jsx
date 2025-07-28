import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Invoices = () => (
  <Box p={3}>
    <Typography variant="h4" color="error">Invoices</Typography>
    <Paper elevation={3} sx={{ padding: 2, mt: 2 }}>
      <Typography>All invoice records will be displayed here.</Typography>
    </Paper>
  </Box>
);
export default Invoices;