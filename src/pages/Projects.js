import React from 'react';
import projectsData from '../projects.json';
import { Typography, Button } from '@mui/material';
// import Link from '@mui/material/Link';


const Projects = () => {
    return (
      <div style={{ padding: '16px', maxWidth: "70vw" }}>
        <Typography variant="h2">Projects</Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {projectsData.projects.map((project, index) => (
            <li key={index} style={{ marginBottom: '16px' }}>
              <hr style={{ margin: '20px 0', borderTop: '1px solid #ddd' }} /> {/* Horizontal line */}
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
              {/* <Typography variant="body1">
                GitHub:{' '}
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#1976D2' }}>
                  {project.githubLink}
                </Link>
              </Typography> */}
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
