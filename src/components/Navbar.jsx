import React, { useState } from 'react';
import Logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-20 relative'>
      <div className='py-2 flex justify-between items-center'>
        <img
          src={Logo}
          alt="Logo"
          className='mt-3 mb-2 w-12 h-12 rounded-full object-cover md:inline hidden hover:scale-105' 
        />

        {/* Navigation Links - Visible on md and above */}
        <div className='hidden md:flex bg-gray-600 rounded-2xl px-6 py-2 space-x-4'>
          <a href="#home" className='bg-white text-black px-4 py-1 rounded-2xl'>Home</a>
          <a href="#about" className='hover:text-gray-400 px-4 py-1'>About</a>
          <a href="#projects" className='hover:text-gray-400 px-4 py-1'>Projects</a>
          <a href="#contacts" className='hover:text-gray-400 px-4 py-1'>Contact</a>
        </div>

        {/* Desktop Contact Button */}
        <button className='cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Contact with me
        </button>

        {/* Hamburger Button - Visible only on small screens */}
        <div className="md:hidden absolute top-4 right-8">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='flex flex-col items-start space-y-4 mt-4 md:hidden'>
          <a href="#" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About me</a>
          <a href="#projects" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
