import React from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";
import styled from '@emotion/styled';

const ResumeContainer = styled(Container)`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ResumeSection = styled('section')`
  margin-bottom: 30px;
`;

export default function Resume() {
  return (
    <ResumeContainer>
      <ResumeSection>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', flexGrow: 1, textAlign: 'left' }}>Experience</Typography>
        <List>
          <p2>Healthfirst (2021-Present)</p2>
          <ListItem>
            <ListItemText primary="DevOps Engineer (Janurary 2024 - present)" secondary="Contributed to" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Application Developer(June 2022 - Janurary 2024)" secondary="Contributed to" />
          </ListItem>
          <ListItem>
            <ListItemText primary="DevOps Intern (June 2021 - August 2021)" secondary="Contributed to" />
          </ListItem>
          <p2>Treehouse Strategy and Communications(2021-2021)</p2>
          <ListItem>
            <ListItemText primary="Front-end React Development Intern" secondary="Contributed to" />
          </ListItem>
        </List>
      </ResumeSection>

      <ResumeSection>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', flexGrow: 1, textAlign: 'left' }}>Skills</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Continuous Integration and Continuous Delivery (CI/CD)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Github Actions" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Terraform" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Python" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Amazon Web Services (AWS)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Ansible" />
          </ListItem>
        </List>
      </ResumeSection>

      <ResumeSection>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', flexGrow: 1, textAlign: 'left' }}>Education</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Elon University (2018-2022) : Bachelor of Science - Computer Science " />
          </ListItem>
        </List>
      </ResumeSection>

      <ResumeSection>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', flexGrow: 1, textAlign: 'left' }}>Certifications</Typography>
        <List>
          <ListItem>
            <ListItemText primary="AWS Certified DevOps Engineer" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Docker Certified Associate" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Splunk" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Certified Kubernetes Administrator" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Jenkins Certified Engineer" />
          </ListItem>
        </List>
      </ResumeSection>

      <ResumeSection>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', flexGrow: 1, textAlign: 'left' }}>Links</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Github" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Stack Overflow" />
          </ListItem>
          <ListItem>
            <ListItemText primary="LinkedIn" />
          </ListItem>
        </List>
      </ResumeSection>

    </ResumeContainer>
  );
}

