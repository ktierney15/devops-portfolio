import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

const Section1 = () => (
    <section id="section1">
      <Typography variant="h6">Section 1</Typography>
      {/* Content for Section 1 */}
    </section>
  );
  
  const Section2 = () => (
    <section id="section2">
      <Typography variant="h6">Section 2</Typography>
      {/* Content for Section 2 */}
    </section>
  );
  
  const Section3 = () => (
    <section id="section3">
      <Typography variant="h6">Section 3</Typography>
      {/* Content for Section 3 */}
    </section>
  );


const Knowledge = () => {
    return (
      <div>
        {/* <Typography variant="h2">Knowledge Base</Typography> */}
        {/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vQfeNmEHW0gtWtQH6_W8SYHmypt7TUrG2Nqk0pVLr5G-4teeuDt7X66Rg5PKmuoQwfwYuS47-V-SOpV/pub?embedded=true" style={{ width: '100vw', height: '75vh', border: 'none'}}></iframe> */}
        <Grid container style={{ width: '100vw', height: '100vh' }}>
            {/* Sidebar */}
            <Grid item xs={3} sx={{ padding: 2 }}>
                <Typography variant="h5">Appendix</Typography>
                <List component="nav">
                <ListItem button component="a" href="#section1">
                    <ListItemText primary="Section 1" />
                </ListItem>
                <ListItem button component="a" href="#section2">
                    <ListItemText primary="Section 2" />
                </ListItem>
                <ListItem button component="a" href="#section3">
                    <ListItemText primary="Section 3" />
                </ListItem>
                </List>
            </Grid>

            {/* Main Content Area */}
            <Grid item xs={9} sx={{ padding: 2 }}>
                <Typography variant="h3" gutterBottom>Knowledge Base</Typography>
                <Section1 />
                <Section2 />
                <Section3 />
            </Grid>
        </Grid>

      </div>
    );
  };
  
  export default Knowledge;