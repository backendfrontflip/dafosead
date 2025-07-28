import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';
import Projects from './pages/ProjectsPage';
import Branches from './pages/BranchesPage';
import Contact from './pages/ContactPage';

import AdminApp from './admin/AdminApp.jsx';

// This wrapper helps hide navbar/footer on admin route
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="pt-28">{children}</div>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public site routes with navbar/footer */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <MainLayout>
              <Projects />
            </MainLayout>
          }
        />
        <Route
          path="/branches"
          element={
            <MainLayout>
              <Branches />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        {/* Admin route — no Navbar/Footer */}
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </Router>
  );
};

export default App;
