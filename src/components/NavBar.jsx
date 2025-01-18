import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cyan-400 rounded"></div>
            <span className="text-white font-bold">EthAI</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Features</a>
            <a href="#" className="text-gray-300 hover:text-white">Why Us</a>
            <a href="#" className="text-gray-300 hover:text-white">Tokenomics</a>
            <a href="#" className="text-gray-300 hover:text-white">Roadmap</a>
            <button className="px-4 py-2 text-gray-900 bg-white rounded-md">Log In</button>
            <button className="px-4 py-2 text-gray-900 bg-cyan-400 rounded-md">Whitepaper</button>
          </div>
        </nav>
    </div>
  )
}

export default NavBar