// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Merchandise from "./components/Merchandise";
import SoundCloud from "./components/Soundcloud";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/merchandise">Merchandise</Link>
            </li>
            <li>
              <Link to="/soundcloud">SoundCloud</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/soundcloud" element={<SoundCloud />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
