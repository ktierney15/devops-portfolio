import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText, Tab, Tabs } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { label: 'Projects', link: '/projects' },
    { label: 'Knowledge Base', link: '/knowledge-base' },
    { label: 'About', link: '/about' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: isScrolled ? '#FFA500' : 'transparent', borderBottom: 'none', boxShadow: 'none', transition: 'background-color 0.3s ease' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: isScrolled ? 'white' : 'inherit', flexGrow: 1, textAlign: 'left', fontFamily: 'Verdana' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Kevin Tierney</Link>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Tabs
                value={false}
                textColor="inherit"
                sx={{
                  '& .MuiTabs-indicator': {
                    display: 'none',
                  },
                  '& .MuiTab-root': {
                    color: isScrolled ? 'white' : 'inherit',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    padding: '12px 14px',
                  },
                  display: { xs: 'none', md: 'flex' }
                }}
              >
                {menuItems.map((item, index) => (
                  <Tab component={Link} to={item.link} label={item.label} sx={{ color: isScrolled ? 'white' : 'inherit', textDecoration: 'none' }} />
                ))}
              </Tabs>
            </Box>
            <IconButton href="https://github.com/ktierney15" target="_blank" color='inherit' sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/kevin-tierney-a7b607192/" target="_blank" color='inherit' sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
          <IconButton
            color='inherit'
            edge="end"
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.link} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ mt: '64px', padding: '20px', textAlign: 'center' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Header;
