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

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* Add padding top to prevent content being hidden behind fixed navbar */}
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
    </Router>
  );
};

export default App;
