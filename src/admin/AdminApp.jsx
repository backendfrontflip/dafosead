// src/admin/AdminApp.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './layout/SideBar';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import Staffs from './pages/Staffs';
import StaffForm from './pages/StaffForm';
import Branches from './pages/Branches';
import Revenue from './pages/Revenue';
import BarChart from './pages/BarChart';
import PieChart from './pages/PieChart';
import LineChart from './pages/LineChart';
import GeographyMap from './pages/GeographyMap';

const AdminApp = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/staffs" element={<Staffs />} />
            <Route path="/staff-form" element={<StaffForm />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/charts/bar" element={<BarChart />} />
            <Route path="/charts/pie" element={<PieChart />} />
            <Route path="/charts/line" element={<LineChart />} />
            <Route path="/charts/geo" element={<GeographyMap />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AdminApp;
