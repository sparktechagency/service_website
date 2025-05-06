"use client"
import { links } from '@/data/data';
import Image from 'next/image';
import { useState } from 'react';
import { FaBell, FaBars, FaTimes } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="bg-[#1f3556] text-white shadow-md px-4">
      <div className="mx-auto max-w-7xl h-[80px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
            <Image src="/images/logo.png" alt="logo" width={70} height={70} />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {links.map((link, idx) => (
            <li key={idx} className="hover:text-[#FF7D7D] cursor-pointer duration-200">{link}</li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="border px-4 py-1 rounded text-sm">Sign In</button>
          <button className="bg-white text-[#1f3556] font-semibold px-4 py-1 rounded text-sm">Post A Job</button>
          <FaBell className="text-lg" />
          <div className="flex items-center space-x-2">
            <FiUser className="text-lg" />
            <span className="text-sm">Andrew Ainsley</span>
          </div>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-6 space-y-3 pb-4">
          <ul className="flex flex-col space-y-2">
            {links.map((link, idx) => (
              <li key={idx} className="hover:text-[#FF7D7D] cursor-pointer duration-200">{link}</li>
            ))}
          </ul>
          <div className="flex flex-col space-y-2 mt-4">
           <div className="flex justify-between items-center gap-3">
           <button className="border px-4 py-[3px] rounded text-xs w-full cursor-pointer">Sign In</button>
           <button className="bg-white text-[#1f3556] font-semibold px-4 py-1 rounded text-xs w-full cursor-pointer">Post A Job</button>
           </div>
            <div className="flex items-center space-x-2">
              <FaBell />
              <FiUser />
              <span>Andrew Ainsley</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
