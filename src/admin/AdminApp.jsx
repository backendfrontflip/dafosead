// src/admin/AdminApp.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './layout/SideBar';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import Staffs from './pages/Staffs';
import StaffForm from './pages/StaffForm';
import Branches from './pages/Branches';
import Revenue from './pages/Revenue';
import BarChart from './pages/charts/BarChart';
import PieChart from './pages/charts/PieChart';
import LineChart from './pages/charts/LineChart';
import GeographyMap from './pages/charts/Geography';
import TopBar from './layout/TopBar';
import TeamForm from './pages/TeamForm';
import BranchForm from './pages/BranchForm';

const AdminApp = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <TopBar />
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team-form" element={<TeamForm />} />
            <Route path="/staffs" element={<Staffs />} />
            <Route path="/staff-form" element={<StaffForm />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/branches/new" element={<BranchForm />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/charts/bar" element={<BarChart />} />
            <Route path="/charts/pie" element={<PieChart />} />
            <Route path="/charts/line" element={<LineChart />} />
            <Route path="/charts/geo" element={<GeographyMap />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminApp;
