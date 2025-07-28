import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const data = [
  { name: 'Revenue', value: 6000 },
  { name: 'Invoices', value: 4000 },
];

const COLORS = ['#f44336', '#ff7961'];

const PieChartPage = () => (
  <Box p={3}>
    <Typography variant="h4" color="error" gutterBottom>Pie Chart</Typography>
    <Paper elevation={3} sx={{ padding: 2 }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  </Box>
);

export default PieChartPage;
