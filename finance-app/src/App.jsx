import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  ) 
}

export default App;
