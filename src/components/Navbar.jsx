import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">SimpleSoft</div>
        <div className="space-x-4">
          <Link className="text-gray-300 hover:text-white" to="/">Home</Link>
          <Link className="text-gray-300 hover:text-white" to="/about">About</Link>
          <Link className="text-gray-300 hover:text-white" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;