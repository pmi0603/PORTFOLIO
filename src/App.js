// src/App.js
import React from 'react';
import './Components/Portfolio_styling.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
