import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-600">
      <h2>hello</h2>
    </div>
  );
}

export default App;
