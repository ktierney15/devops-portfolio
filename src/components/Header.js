

// https://blog.logrocket.com/creating-navbar-react/

import React from 'react';
import {  Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab, Typography } from '@mui/material';


const Header= () =>{
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#FFA500' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'white', flexGrow: 1, textAlign: 'left' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Kevin Tierney</Link>
          </Typography>

          <Tabs value={false} textColor="inherit"sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            },
            '& .MuiTab-root': {
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '12px 14px',
            },
          }}>
          <Tab component={Link} to="/projects" label="Projects" sx={{ color: 'white', textDecoration: 'none' }} />
          <Tab component={Link} to="/resume" label="Resume" sx={{ color: 'white', textDecoration: 'none' }} />
          <Tab component={Link} to="/about" label="About Me" sx={{ color: 'white', textDecoration: 'none' }} />
          </Tabs>
        </Toolbar>
      </AppBar>
    <div className='page-body' style={{ marginTop: '85px' }}>
        <Outlet />
    </div>
  </div>
  );
}
export default Header;
