import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const data = [
  { month: 'Jan', revenue: 4000, invoice: 2400 },
  { month: 'Feb', revenue: 3000, invoice: 1398 },
  { month: 'Mar', revenue: 2000, invoice: 9800 },
  { month: 'Apr', revenue: 2780, invoice: 3908 },
];

const LineChartPage = () => (
  <Box p={3}>
    <Typography variant="h4" color="error" gutterBottom>Line Chart</Typography>
    <Paper elevation={3} sx={{ padding: 2 }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#f44336" />
          <Line type="monotone" dataKey="invoice" stroke="#ff7961" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  </Box>
);

export default LineChartPage;
