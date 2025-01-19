import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import grp20 from '../assets/Group 20.png'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Items
  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Roadmap', href: '#roadmap' },
  ];
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const handleMenuClick = () => setIsOpen(false);
  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') setIsOpen(false);
  };

  return (
    <nav className="mt-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex justify-between items-center">
          {/* Logo */}
          {/* <div className="hidden md:flex items-center">
            <div className="text-cyan-400 text-2xl font-bold">
              <span className="flex items-center gap-1">
                <span className="text-cyan-400">Eth</span>
                <span className="text-white">Ai</span>
              </span>
            </div>
          </div> */}

          {/* Desktop Navigation */}
          <div className="h-[50px] items-center hidden w-[550px] md:flex space-x-8 rounded-[48px] bg-[#0d3a40b2] p-2 text-center mx-auto justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Authentication Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">Log in</button>
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-cyan-500">
              Whitepaper
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile bg-[#135962b2] md:hidden rounded-[48px] flex justify-between w-full p-2 items-center h-[64px]">
            <div className="text-cyan-400 text-2xl font-bold">
              {/* <span className="flex items-center gap-1">
                <span className="text-cyan-400">Eth</span>
                <span className="text-white">Ai</span>
              </span> */}
              <img  src={grp20}/>
            </div>
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <MdOutlineClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Overlay */}
        {isOpen && (
          <div
            id="overlay"
            onClick={handleOverlayClick}
            className="absolute top-0 left-0 right-0 bg-slate-500 transform transition-transform duration-300 md:hidden z-30 w-[70%] h-screen"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleMenuClick}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-700">
                <button className="text-white hover:text-gray-300">Log in</button>
                <button className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-500">
                  Whitepaper
                </button>
              </div>
              <button
                onClick={toggleSidebar}
                className="absolute top-2 right-3 text-white"
              >
                <MdOutlineClose size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
