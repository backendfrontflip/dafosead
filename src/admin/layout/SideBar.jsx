// src/admin/layout/Sidebar.jsx
import React, { useState } from 'react';
import {
  Drawer, IconButton, Typography, Box, List, ListItem, ListItemIcon,
  ListItemText, Divider, Collapse, Avatar
} from '@mui/material';
import {
  Menu as MenuIcon, Home, Group, LocationCity, People, BarChart, PieChart,
  ShowChart, Map, ExpandLess, ExpandMore, AddCircle
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [dataOpen, setDataOpen] = useState(true);
  const [chartsOpen, setChartsOpen] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => setOpen(!open);
  const handleDataToggle = () => setDataOpen(!dataOpen);
  const handleChartsToggle = () => setChartsOpen(!chartsOpen);

  return (
    <Drawer variant="permanent" open={open}>
      <Box sx={{ bgcolor: 'red', height: '100vh', width: open ? 250 : 80, color: 'white', transition: '0.3s' }}>
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="space-between" px={2} py={2}>
          <Typography variant="h6" fontWeight="bold">ADMIN</Typography>
          <IconButton onClick={handleToggle} sx={{ color: 'white' }}><MenuIcon /></IconButton>
        </Box>

        {/* Profile */}
        {open && (
          <Box textAlign="center" mb={2}>
            <Avatar src="https://i.pravatar.cc/100" sx={{ width: 70, height: 70, mx: 'auto' }} />
            <Typography variant="h6">John Doe</Typography>
            <Typography variant="body2">Administrator</Typography>
          </Box>
        )}

        <Divider />

        {/* Dashboard */}
        <List>
          <ListItem button onClick={() => navigate("/")}>
            <ListItemIcon sx={{ color: 'white' }}><Home /></ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItem>

          {/* Data Section */}
          <ListItem button onClick={handleDataToggle}>
            <ListItemText primary="Data" />
            {dataOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dataOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => navigate("/team")} sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}><Group /></ListItemIcon>
                <ListItemText primary="Team" />
              </ListItem>
              <ListItem button onClick={() => navigate("/branches")} sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}><LocationCity /></ListItemIcon>
                <ListItemText primary="Branches" />
              </ListItem>
              <ListItem button onClick={() => navigate("/staffs")} sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}><People /></ListItemIcon>
                <ListItemText primary="Staffs" />
              </ListItem>
              <ListItem button onClick={() => navigate("/staff-form")} sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}><AddCircle /></ListItemIcon>
                <ListItemText primary="Staff Form" />
              </ListItem>
              <ListItem button onClick={() => navigate("/revenue")} sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}><BarChart /></ListItemIcon>
                <ListItemText primary="Revenue" />
              </ListItem>
            </List>
          </Collapse>

          {/* Charts Section */}
          <ListItem button onClick={handleChartsToggle}>
            <ListItemText primary="Charts" />
            {chartsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={chartsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => navigate("/charts/bar")} sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}><BarChart /></ListItemIcon>
                <ListItemText primary="Bar Chart" />
              </ListItem>
              <ListItem button onClick={() => navigate("/charts/pie")} sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}><PieChart /></ListItemIcon>
                <ListItemText primary="Pie Chart" />
              </ListItem>
              <ListItem button onClick={() => navigate("/charts/line")} sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}><ShowChart /></ListItemIcon>
                <ListItemText primary="Line Chart" />
              </ListItem>
              <ListItem button onClick={() => navigate("/charts/geo")} sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}><Map /></ListItemIcon>
                <ListItemText primary="Geography" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
