import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

// Topics
import CICD from "../topics/CICD"
import Docker from '../topics/Docker';
import Kubernetes from '../topics/Kubernetes';
import Actions from '../topics/Actions';


const Knowledge = () => {
    return (
      <div style={{ paddingBottom: '5%' }}>
        <Grid container style={{ width: '100vw', height: '100vh' }}>
            {/* Sidebar */}
            <Grid className="hidden-on-small" item xs={3} sx={{ padding: 1, border: '1px solid white' }}>
                <Typography variant="h5">Appendix</Typography>
                <List component="nav">
                <ListItem button component="a" href="#cicd">
                    <ListItemText primary="CI/CD" />
                </ListItem>
                <hr style={{ margin: '10px 0', borderTop: '1px solid #ddd' }} />
                <ListItem button component="a" href="#docker">
                    <ListItemText primary="Docker" />
                </ListItem>
                <hr style={{ margin: '10px 0', borderTop: '1px solid #ddd' }} />
                <ListItem button component="a" href="#kubernetes">
                    <ListItemText primary="Kubernetes" />
                </ListItem>
                <hr style={{ margin: '10px 0', borderTop: '1px solid #ddd' }} />
                <ListItem button component="a" href="#gitactions">
                    <ListItemText primary="Github Actions" />
                </ListItem>
                </List>
            </Grid>

            {/* Main Content Area */}
            <Grid item style={{ textAlign: 'left' }} xs={9} sx={{ padding: 2 }}>
                <Typography variant="h3" gutterBottom>Knowledge Base</Typography>
                <hr style={{ margin: '20px 0', borderTop: '1px solid #ddd' }} />
                <CICD />
                <hr style={{ margin: '20px 0', borderTop: '1px solid #ddd' }} />
                <Docker />
                <hr style={{ margin: '20px 0', borderTop: '1px solid #ddd' }} />
                <Kubernetes />
                <hr style={{ margin: '20px 0', borderTop: '1px solid #ddd' }} />
                <Actions />
            </Grid>
        </Grid>

      </div>
    );
  };
  
export default Knowledge;