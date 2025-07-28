import React from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

const StaffForm = () => (
  <Box p={3}>
    <Typography variant="h4" color="error" gutterBottom>Add New Staff</Typography>
    <Paper elevation={3} sx={{ padding: 3 }}>
      <form>
        <TextField label="Full Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Position" fullWidth margin="normal" />
        <TextField label="Phone Number" fullWidth margin="normal" />
        <Button variant="contained" color="error" type="submit" sx={{ mt: 2 }}>Submit</Button>
      </form>
    </Paper>
  </Box>
);

export default StaffForm;
