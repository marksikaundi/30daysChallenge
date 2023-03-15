import React from 'react';

function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <div className="font-bold text-3xl">Lendbox</div>
      <div className="flex">
        <a href="#" className="text-gray-500 hover:text-gray-900 ml-4">About Us</a>
        <a href="#" className="text-gray-500 hover:text-gray-900 ml-4">Contact</a>
        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 ml-4">Get Started</a>
      </div>
    </nav>
  );
}

export default Navbar;