import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import colors from '../theme/colors';

const menuItems = [
  { label: 'Projects', link: '/projects' },
  { label: 'Resume', link: '/resume' },
  { label: 'Blog', link: '/blog' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: { xs: '18px 20px', md: '20px 64px' },
          backgroundColor: 'rgba(20, 20, 20, 0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            fontFamily: 'ui-monospace, "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
            fontSize: 19,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            color: colors.text,
            textDecoration: 'none',
          }}
        >
          <Box component="span" sx={{ color: colors.accent }}>&gt;_</Box> Kevin Tierney
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '40px' }}>
            {menuItems.map((item) => (
              <Box
                key={item.link}
                component={Link}
                to={item.link}
                sx={{
                  position: 'relative',
                  fontSize: 18,
                  color: colors.textMuted,
                  textDecoration: 'none',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -8,
                    height: '2px',
                    backgroundColor: colors.accent,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.2s ease',
                  },
                  '&:hover': { color: colors.text },
                  '&:hover::after': { transform: 'scaleX(1)' },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '20px' }}>
            <IconButton
              href="https://github.com/ktierney15"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: colors.textMuted, '&:hover': { color: colors.text, backgroundColor: 'transparent' } }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/kevin-tierney-a7b607192/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: colors.textMuted, '&:hover': { color: colors.text, backgroundColor: 'transparent' } }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Box>
          <IconButton
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: colors.text }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { backgroundColor: colors.bg, color: colors.text, minWidth: 220 } }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.link}
              component={Link}
              to={item.link}
              onClick={() => setDrawerOpen(false)}
              sx={{ color: colors.textMuted, '&:hover': { color: colors.text } }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <ListItem
            button
            component="a"
            href="https://github.com/ktierney15"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: colors.textMuted, '&:hover': { color: colors.text } }}
          >
            <GitHubIcon fontSize="small" sx={{ marginRight: '12px' }} />
            <ListItemText primary="GitHub" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://www.linkedin.com/in/kevin-tierney-a7b607192/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: colors.textMuted, '&:hover': { color: colors.text } }}
          >
            <LinkedInIcon fontSize="small" sx={{ marginRight: '12px' }} />
            <ListItemText primary="LinkedIn" />
          </ListItem>
        </List>
      </Drawer>

      <Box sx={{ mt: '73px', padding: '20px', textAlign: 'center' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Header;
