'use client'

import React, { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#cbd3cb] py-3 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="/logo.png" // Update this path to your logo image
                alt="My Logo"
                className="h-[4rem] w-auto" // Adjust size as necessary
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 mx-auto">
            <Link href="/" className="text-gray-700 font-medium hover:text-[green]">Home</Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-[green]">About</Link>
            <Link href="/services" className="text-gray-700 font-medium hover:text-[green]">Services</Link>
            <Link href="/portfolio" className="text-gray-700 font-medium hover:text-[green]">Portfolio</Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-[green]">Contact</Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-blue-500 -rotate-45">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`menu bg-[#cbd3cb] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-500' : 'max-h-0'} md:hidden `}>
        <Link href="/" className="block px-4 py-2 text-gray-700 font-medium hover:text-[green]">Home</Link>
        <Link href="/About" className="block px-4 py-2 text-gray-700 font-medium hover:text-[green]">About</Link>
        <Link href="/Services" className="block px-4 py-2 text-gray-700 font-medium hover:text-[green]">Services</Link>
        <Link href="#" className="block px-4 py-2 text-gray-700 font-medium hover:text-[green]">Portfolio</Link>
        <Link href="/Portfolio" className="block px-4 py-2 text-gray-700 font-medium hover:text-[green]">Contact</Link>
        <Link href="/Contact" className="block text-center px-4 py-2 text-gray-700 font-medium hover:text-[green]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 -rotate-45">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;