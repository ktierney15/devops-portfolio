import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Knowledge from "./pages/Kowledge"
import About from "./pages/About"



function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ paddingBottom: '5%' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="knowledge-base" element={<Knowledge />} />
            <Route path="about" element={<About />} />
            {/* Catch all route */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
