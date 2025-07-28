// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';
import Projects from './pages/ProjectsPage';
import Branches from './pages/BranchesPage';
import Contact from './pages/ContactPage';

import AdminApp from './admin/AdminApp'; // 👈 Import Admin App

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Website Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <div className="pt-28">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/branches" element={<Branches />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
              <Footer />
            </>
          }
        />

        {/* Admin Routes - This loads the AdminApp when path starts with /admin */}
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </Router>
  );
};

export default App;
