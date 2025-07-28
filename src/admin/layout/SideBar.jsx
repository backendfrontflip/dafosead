// src/admin/layout/SideBar.jsx
import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  HomeOutlined, PeopleOutlined, ContactsOutlined, ReceiptOutlined,
  PersonAddOutlined, CalendarTodayOutlined, HelpOutline, BarChartOutlined,
  PieChartOutline, TimelineOutlined, MapOutlined, MenuOutlined,
  PinDropOutlined
} from '@mui/icons-material';

const Item = ({ title, to, icon, selected, setSelected }) => (
  <MenuItem
    active={selected === title}
    icon={icon}
    style={{
      color: 'white',
      backgroundColor: selected === title ? '#700a0aff' : 'transparent',
    }}
    onClick={() => setSelected(title)}
  >
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography fontSize="16px">{title}</Typography>
    </Link>
  </MenuItem>
);

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        height: '100vh',
        '& .pro-sidebar-inner': {
          background: '#b71c1c !important', // red background
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 20px !important',
          color: 'white !important',
        },
        '& .pro-inner-item:hover': {
          background: '#424242 !important', // gray hover
        },
        '& .pro-menu-item.active': {
          background: '#700a0aff !important', // deep red active
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Collapse Toggle */}
          <MenuItem
            icon={<MenuOutlined />}
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{ marginBottom: 20 }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontSize="20px" fontWeight="bold" color="white">
                  ADMIN
                </Typography>
                <IconButton sx={{ color: 'white' }}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* Profile */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  src={`/assets/user.png`}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center" mt={1}>
                <Typography fontSize="16px" fontWeight="bold" color="white">
                  Silas Bello
                </Typography>
                <Typography fontSize="14px" color="white">
                  COO DAFOSEAD
                </Typography>
              </Box>
            </Box>
          )}

          {/* Navigation */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item title="Dashboard" to="/admin" icon={<HomeOutlined />} selected={selected} setSelected={setSelected} />

            <Typography sx={{ m: '15px 0 5px 20px', color: 'white', fontSize: '14px' }}>Data</Typography>
            <Item title="Team" to="/admin/team" icon={<PeopleOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Staffs" to="/admin/staffs" icon={<ContactsOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Invoices Balances" to="/admin/revenue" icon={<ReceiptOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Branches" to="/admin/branches" icon={<PinDropOutlined />} selected={selected} setSelected={setSelected} />

            <Typography sx={{ m: '15px 0 5px 20px', color: 'white', fontSize: '14px' }}>Pages</Typography>
            <Item title="Staff Form" to="/admin/staff-form" icon={<PersonAddOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Calendar" to="/admin/calendar" icon={<CalendarTodayOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="FAQ Page" to="/admin/faq" icon={<HelpOutline />} selected={selected} setSelected={setSelected} />

            <Typography sx={{ m: '15px 0 5px 20px', color: 'white', fontSize: '14px' }}>Charts</Typography>
            <SubMenu title="Charts" icon={<BarChartOutlined />} style={{ color: 'white' }}>
              <Item title="Bar Chart" to="/admin/charts/bar" icon={<BarChartOutlined />} selected={selected} setSelected={setSelected} />
              <Item title="Pie Chart" to="/admin/charts/pie" icon={<PieChartOutline />} selected={selected} setSelected={setSelected} />
              <Item title="Line Chart" to="/admin/charts/line" icon={<TimelineOutlined />} selected={selected} setSelected={setSelected} />
              <Item title="Geography Chart" to="/admin/charts/geo" icon={<MapOutlined />} selected={selected} setSelected={setSelected} />
            </SubMenu>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
