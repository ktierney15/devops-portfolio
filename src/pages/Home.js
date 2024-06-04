import React from "react"
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

import logo from '../assets/home-logo.png';

const Home = () =>{
    return (
        <div>
            <div>
                <img
                    src={logo}
                    alt="CICD"
                    style={{ width: '50%', maxWidth: '100%' }}
                />
                <p style={{ padding: "1%" }}>
                    I'm a DevOps Engineer passionate about learning and exploring technology and software.
                    Welcome to my personal website where I showcase my projects and share what I have learned
                </p>

                <Button variant="contained" component={Link} to="/about" style={{ backgroundColor: '#757575', color: '#ffffff' }}>
                    Learn More About Me
                </Button>

    
                <Grid container spacing={3} style={{ padding: '5%' }}>
                    {/* Projects Card */}
                    <Grid item xs={12} sm={4}>
                        <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                            Projects
                            </Typography>
                            <Typography variant="body1" paragraph>
                            Explore my latest projects and see what I've been working on.
                            </Typography>
                            <Button
                            variant="contained"
                            component={Link}
                            style={{ backgroundColor: '#FFA500', color: '#ffffff' }}
                            to="/projects"
                            >
                            View Projects
                            </Button>
                        </CardContent>
                        </Card>
                    </Grid>

                    {/* Knowledge Base Card */}
                    <Grid item xs={12} sm={4}>
                        <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                            Knowledge Base
                            </Typography>
                            <Typography variant="body1" paragraph>
                            Learn something new from my collection of articles and guides.
                            </Typography>
                            <Button
                            variant="contained"
                            component={Link}
                            to="/knowledge-base"
                            style={{ backgroundColor: '#FFA500', color: '#ffffff' }}
                            >
                            Explore Knowledge Base
                            </Button>
                        </CardContent>
                        </Card>
                    </Grid>

                    {/* External Links Card */}
                    <Grid item xs={12} sm={4}>
                        <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                External Links
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Check out my links for more information about me and what I work on!
                            </Typography>
                            <Button
                            variant="contained"
                            href="https://github.com/ktierney15"
                            target="_blank"
                            style={{ backgroundColor: '#FFA500', color: '#ffffff' }}
                            rel="noopener noreferrer"
                            >
                            GitHub
                            </Button>
                            <Button
                            variant="contained"
                            href="https://www.linkedin.com/in/kevin-tierney-a7b607192/"
                            target="_blank"
                            rel="noopener noreferrer"
                            // style={{ marginLeft: '10px' }}
                            style={{ backgroundColor: '#FFA500', color: '#ffffff', marginLeft: '10px' }}
                            >
                            LinkedIn
                            </Button>
                        </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                </div>
        </div>
    )
}

export default Home