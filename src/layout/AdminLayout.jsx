import React from 'react';
import Sidebar from '../admin/layout/SideBar';

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '20px' }}>{children}</main>
    </div>
  );
};

export default AdminLayout;
