import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-3xl">Lendbox</div>
          <div className="flex">
            <a href="#" className="text-gray-500 hover:text-gray-900 ml-4">About Us</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ml-4">Contact</a>
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 ml-4">Get Started</a>
          </div>
        </nav>
      </header>
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to Lendbox</h1>
        <p className="text-gray-600 text-lg mb-8">The easiest way to borrow and lend money online.</p>
        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Learn More</a>
      </main>
    </div>
  );
}

export default App;