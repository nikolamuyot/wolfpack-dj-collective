// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Merchandise from "./components/Merchandise";
import SoundCloud from "./components/Soundcloud";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/merchandise">Merchandise</Link>
              </li>
              <li className="nav-item">
                <Link to="/soundcloud">SoundCloud</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/soundcloud" element={<SoundCloud />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
