import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Components/Portfolio_styling.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';


function App() {
    return (
        <Router>
            <div>
                <header>
                    <nav id="navbar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                         
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                    
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
