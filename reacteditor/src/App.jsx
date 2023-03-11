import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import TextEditor from './components/Editor';
import Editor from './components/Editor';

function App() {
  return (
    <div>
      <h1>Text Editor</h1>
      <Editor />
    </div>
  );
}

export default App;
