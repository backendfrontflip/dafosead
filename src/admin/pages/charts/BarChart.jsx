import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const data = [
  { name: 'Jan', revenue: 4000, invoice: 2400 },
  { name: 'Feb', revenue: 3000, invoice: 1398 },
  { name: 'Mar', revenue: 2000, invoice: 9800 },
  { name: 'Apr', revenue: 2780, invoice: 3908 },
];

const BarChartPage = () => (
  <Box p={3}>
    <Typography variant="h4" color="error" gutterBottom>Bar Chart</Typography>
    <Paper elevation={3} sx={{ padding: 2 }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#f44336" />
          <Bar dataKey="invoice" fill="#ff7961" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  </Box>
);

export default BarChartPage;
