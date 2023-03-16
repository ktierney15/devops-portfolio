

// https://blog.logrocket.com/creating-navbar-react/

import React from 'react';
import {  Outlet, Link } from "react-router-dom";
const Header= () =>{
  return (
  <div>
    <li>
      <Link to="/">Kevin Tierney</Link>
    </li>
    <li>
      <Link to="/projects">Projects</Link>
    </li>
    <li>
      <Link to="/resume">Resume</Link>
    </li>
    <li>
      <Link to="/about">About Me</Link>
    </li>

    <Outlet />
  </div>
  );
}
export default Header;
