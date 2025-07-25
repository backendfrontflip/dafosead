import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "about", "services", "projects", "branches", "contact"];

  return (
    <>
      {/* Spacer to prevent overlap */}
      <div className="h-[88px] md:h-[96px]" />

      {/* Fixed Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="">
            <p className='text-red-600 text-2xl font-bold'>DAFOSEAD</p>
            <span className='text-gray-400 text-sm'>Technical Co Limited</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "home" ? "/" : `/${item}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 border-b-2 border-red-600"
                      : "hover:text-red-600 transition"
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 py-4 shadow-md">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "home" ? "/" : `/${item}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600"
                        : "text-gray-700 hover:text-red-600 transition"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
