import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="relative">
        {/* Navbar */}
        <div className="h-[60px] w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
          {/* Logo/Brand */}
          <div className="text-xl font-bold text-[#1565C0]">
            <Link to="/" onClick={closeMenu}>
              Sarthak
            </Link>
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-[#111] font-medium">
            <Link to="/" className="hover:text-[#1565C0] hover:scale-105 transition-all duration-200">
              About
            </Link>
            <Link to="/about-us" className="hover:text-[#1565C0] hover:scale-105 transition-all duration-200">
              Skills
            </Link>
            <Link to="#" className="hover:text-[#1565C0] hover:scale-105 transition-all duration-200">
              Projects
            </Link>
            <Link to="/teaching" className="hover:text-[#1565C0] hover:scale-105 transition-all duration-200">
              Teaching
            </Link>
            <Link to="/cv" className="hover:text-[#1565C0] hover:scale-105 transition-all duration-200">
              CV
            </Link>
            <Link to="/work" className="hover:text-[#1565C0] hover:scale-105 transition-all duration-200">
              Work
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 md:hidden z-50">
            <div className="flex flex-col py-4">
              <Link
                to="/"
                className="px-6 py-3 text-[#111] hover:bg-[#1565C0] hover:text-white transition-colors duration-200"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/about-us"
                className="px-6 py-3 text-[#111] hover:bg-[#1565C0] hover:text-white transition-colors duration-200"
                onClick={closeMenu}
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 text-[#111] hover:bg-[#1565C0] hover:text-white transition-colors duration-200"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                to="/teaching"
                className="px-6 py-3 text-[#111] hover:bg-[#1565C0] hover:text-white transition-colors duration-200"
                onClick={closeMenu}
              >
                Teaching
              </Link>
              <Link
                to="/cv"
                className="px-6 py-3 text-[#111] hover:bg-[#1565C0] hover:text-white transition-colors duration-200"
                onClick={closeMenu}
              >
                CV
              </Link>
              <Link
                to="/work"
                className="px-6 py-3 text-[#111] hover:bg-[#1565C0] hover:text-white transition-colors duration-200"
                onClick={closeMenu}
              >
                Work
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
