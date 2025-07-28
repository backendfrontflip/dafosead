import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { NotificationsNone, Settings, Person } from '@mui/icons-material';

const Topbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      sx={{
        backgroundColor: '#b71c1c',
        color: 'white',
      }}
    >
      {/* Title */}
      <Typography fontSize="18px" fontWeight="bold">
        Welcome to Admin Panel
      </Typography>

      {/* Icons */}
      <Box display="flex">
        <IconButton sx={{ color: 'white' }}>
          <NotificationsNone />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <Settings />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <Person />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
