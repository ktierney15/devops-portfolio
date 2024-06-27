import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

// Topics
import CICD from "../topics/CICD";
import Docker from '../topics/Docker';
import Kubernetes from '../topics/Kubernetes';
import Actions from '../topics/Actions';
import Terraform from '../topics/Terraform';

const Knowledge = () => {
    return (
        <div style={{ padding: '2%' }}>
            <Grid container style={{ width: '100vw', height: '100vh' }}>
                {/* Sidebar */}
                <Grid item xs={12} md={3} sx={{ padding: 2, borderRight: '1px solid #ddd' }}>
                    <Typography variant="h5" gutterBottom>Appendix</Typography>
                    <List component="nav">
                        {[
                            { id: "#cicd", label: "CI/CD" },
                            { id: "#docker", label: "Docker" },
                            { id: "#kubernetes", label: "Kubernetes" },
                            { id: "#gitactions", label: "GitHub Actions" },
                            { id: "#terraform", label: "Terraform" }
                        ].map((item) => (
                            <React.Fragment key={item.id}>
                                <ListItem button component="a" href={item.id}>
                                    <ListItemText primary={item.label} />
                                </ListItem>
                                <Divider sx={{ my: 1 }} />
                            </React.Fragment>
                        ))}
                    </List>
                </Grid>

                {/* Main Content Area */}
                <Grid item xs={12} md={9} sx={{ padding: 3 }}>
                    <Typography variant="h3" gutterBottom>Knowledge Base</Typography>
                    <Divider sx={{ my: 2 }} />
                    
                    <div id="cicd" style={{ textAlign: 'left' }}>
                        <CICD />
                    </div>
                    <Divider sx={{ my: 2 }} />
                    
                    <div id="docker" style={{ textAlign: 'left' }}>
                        <Docker />
                    </div>
                    <Divider sx={{ my: 2 }} />
                    
                    <div id="kubernetes" style={{ textAlign: 'left' }}>
                        <Kubernetes />
                    </div>
                    <Divider sx={{ my: 2 }} />
                    
                    <div id="gitactions" style={{ textAlign: 'left' }}>
                        <Actions />
                    </div>
                    <Divider sx={{ my: 2 }} />
                    
                    <div id="terraform" style={{ textAlign: 'left' }}>
                        <Terraform />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Knowledge;
