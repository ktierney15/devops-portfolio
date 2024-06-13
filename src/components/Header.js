import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#FFA500' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'white', flexGrow: 1, textAlign: 'left' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Kevin Tierney</Link>
          </Typography>

          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Tabs
            value={false}
            textColor="inherit"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'white',
              },
              '& .MuiTab-root': {
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '12px 14px',
              },
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <Tab component={Link} to="/projects" label="Projects" sx={{ color: 'white', textDecoration: 'none' }} />
            <Tab component={Link} to="/knowledge-base" label="Knowledge Base" sx={{ color: 'white', textDecoration: 'none' }} />
            <Tab component={Link} to="/about" label="About Me" sx={{ color: 'white', textDecoration: 'none' }} />
          </Tabs>
        </Toolbar>
      </AppBar>

      {/* Drawer for smaller screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          {['Projects', 'Knowledge Base', 'About'].map((text) => (
            <ListItem button key={text} component={Link} to={`/${text.toLowerCase().replace(/\s/g, '-')}`} onClick={handleDrawerToggle}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className='page-body' style={{ marginTop: '85px' }}>
        {/* Outlet renders the nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
