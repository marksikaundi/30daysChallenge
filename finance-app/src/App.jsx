import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import News from './Components/News';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <News />
    </div>
  ) 
}

export default App;
