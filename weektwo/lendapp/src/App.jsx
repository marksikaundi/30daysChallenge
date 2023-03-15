
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;