import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="text-white font-bold text-3xl">Lendbox</div>
          <div className="flex">
            <a href="#" className="text-gray-500 hover:text-white ml-4">About Us</a>
            <a href="#" className="text-gray-500 hover:text-white ml-4">Contact</a>
            <a href="#" className="text-gray-500 hover:text-white ml-4">Privacy Policy</a>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <p>&copy; 2023 Lendbox. All rights reserved.</p>
          <p>Designed by John Doe.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;