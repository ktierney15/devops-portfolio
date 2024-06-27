import React from 'react';
import projectsData from '../projects.json';
import { Typography, Button, Divider } from '@mui/material';

const Projects = () => {
    return (
      <div style={{ padding: '16px', maxWidth: "70vw" }}>
        <Typography variant="h2">Projects</Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {projectsData.projects.map((project, index) => (
            <li key={index} style={{ marginBottom: '16px' }}>
              <Divider sx={{ my: 1, borderColor: 'orange' }} />
              <Typography variant="h6" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>
                {project.name}
              </Typography>
              <img
                src={project.image}
                alt={`${project.name}`}
                style={{ maxWidth: '100%', marginBottom: '8px' }}
              />
              <Typography variant="body1" style={{ marginBottom: '8px' }}>
                {project.description}
              </Typography>
              <Button
              variant="contained"
              size="large"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#FFA500', color: '#ffffff', marginLeft: '10px' }}
              >
              Github
              </Button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Projects;
