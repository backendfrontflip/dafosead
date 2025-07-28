import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const GeographyMapPage = () => (
  <Box p={3}>
    <Typography variant="h4" color="error" gutterBottom>Geography Map</Typography>
    <Paper elevation={3} sx={{ padding: 2 }}>
      <ComposableMap projection="geoMercator">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#e57373"
                stroke="#fff"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </Paper>
  </Box>
);

export default GeographyMapPage;
