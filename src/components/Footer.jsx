import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">BeltCo Nigeria</h2>
          <p className="text-sm text-white mt-2 leading-relaxed">
            Delivering efficient conveyor belt solutions for Nigeria’s major airports. We power seamless logistics and reliable baggage systems across the nation.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
            <li><Link to="/branches" className="hover:text-white transition">Branches</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info + Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="text-sm text-white space-y-2 mb-4">
            <li>Email: <a href="mailto:info@beltco.ng" className="hover:text-white">info@beltco.ng</a></li>
            <li>Phone: <a href="tel:+2348000000000" className="hover:text-white">+234 800 000 0000</a></li>
            <li>Head Office: Lagos, Nigeria</li>
          </ul>

          <div className="flex space-x-4 mt-4 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-white transition">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="hover:text-white text-white transition">
              <FaWhatsapp />
            </a>
            <a href="mailto:info@beltco.ng" className="hover:text-white text-white transition">
              <FaEnvelope />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-white transition">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-xs text-white border-t border-red-800 pt-6">
        &copy; {new Date().getFullYear()} BeltCo Nigeria. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
