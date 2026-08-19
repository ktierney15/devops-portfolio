import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Knowledge from "./pages/Kowledge"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Blog from "./pages/Blog"



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="knowledge-base" element={<Knowledge />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="blog" element={<Blog />} />
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
