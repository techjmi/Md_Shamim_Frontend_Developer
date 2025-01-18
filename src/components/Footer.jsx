import React from "react";
import { FaGithubAlt } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#021420] text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left side - Logo and social icons */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-cyan-400 text-3xl font-bold flex items-center gap-1">
                <span className="text-cyan-400">Eth</span>
                <span className="text-white">Ai</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <IoIosSend size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <GrInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <BsTwitterX size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaGithubAlt size={20} />
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-6 max-w-md">
            <h2 className="text-2xl font-medium">
              "Designed for traders of today, just like you."
            </h2>
            <div className="flex items-center border border-gray-700 rounded-[18px] overflow-hidden px-1 py-1">
              <input
                type="email"
                placeholder="What's your work email?"
                className="flex-grow px-4 py-2 text-white placeholder-gray-500  border-none focus:border-none focus:outline-none bg-transparent"
              />
              <button className="px-6 py-2 text-white focus:outline-none buttons rounded-[12px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
