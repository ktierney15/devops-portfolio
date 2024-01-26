import React from 'react';
import { IconButton, Link, Typography, Toolbar, AppBar, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
      <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0, backgroundColor: '#757575' }}>
        <Container>
          <Toolbar>
            <Typography variant="body2" color="inherit" style={{ marginRight: 'auto' }}>
            </Typography>
            <Link href="https://github.com/ktierney15" target="_blank" color="inherit">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/kevin-tierney-a7b607192/" target="_blank" color="inherit">
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  
  export default Footer;
  