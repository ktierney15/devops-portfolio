import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import Footer from './components/Footer';

import Home from "./pages/Home"
import Projects from "./pages/Projects"
// import Resume from "./pages/Resume"
import Knowledge from "./pages/Kowledge"
import About from "./pages/About"


function App() {
  return (
    <div className="App">
      <header className="App-header" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="knowledge-base" element={<Knowledge />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </header>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
