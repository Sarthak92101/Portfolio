import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>


        {/* Navbar */}
        <div className="h-[60px] w-full  flex  justify-between  items-center px-5 ">

          {/* Navbar Links */}
          <div className=" hidden md:flex space-x-6 text-[#111] font-medium">

            <Link to="/" className=" hover:scale-110 transition-all transform">
              About
            </Link>

            <Link to="/about-us" className=" hover:scale-110 transition-all trans">
              Skills
            </Link>

            <Link to="/projects" className=" hover:scale-110 transition-all transform">
              Projects
            </Link>

            <Link to="/teaching" className=" hover:scale-110 transition-all transform">
              Teaching
            </Link>

            <Link to="/cv" className=" hover:scale-110 transition-all transform">
              CV
            </Link>

            <Link to="/work" className=" hover:scale-110 transition-all transform">
              Work
            </Link>
          </div>

          <button className="md:hidden text-2xl text-black" onClick={() => setOpen(!open)}>☰</button>
        </div>
        {open && (
          <div className="absolute top-[20px] left-12 w-full bg-white text-black flex flex-block items-center space-x-4 px-2 md:hidden ">
            <Link to="/" onClick={() => setOpen(false)}>About</Link>
            <Link to="/about-us" onClick={() => setOpen(false)}>Skills</Link>
            <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="/teaching" onClick={() => setOpen(false)}>Teaching</Link>
            <Link to="/cv" onClick={() => setOpen(false)}>CV</Link>
            <Link to="/work" onClick={() => setOpen(false)}>Work</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
