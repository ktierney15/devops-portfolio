import React from 'react';
import { Typography } from '@mui/material';

const CICD = () => (
    <section id="cicd" style={{ paddingTop: '5%' }}>
      <Typography variant="h3">CI/CD</Typography>
      <p>CI/CD (or continuous integration and Continuous Deployment/Delivery) is a process used by developers and development teams to automate software delivery.</p>
      <p>Before CI/CD, companies would manually build, test, and deploy their applications.</p>
      <p>Continuous Integration - </p>
      <p>Continuous Deployment - </p>
      <h5>Advantages of using CI/CD:</h5>
      <ul>
        <li>Faster time to market - CI/CD accelerates the development lifecycle by automating manual mundane tasks that normally can take a long time</li>
        <li>Faster feedback loop - When you push code and it fails CI (building, linting unit testing etc...) the developer will know immediately as opposed to finding out upon the time of deployment to a testing environment</li>
        <li>Improved code quality - automating linting and testing processes ensures that the team will follow the proper approach to developing quality code</li>
        <li>Overall risk reduction - automating these processes will remove the rsk of somebody making a mistake when deploying manually</li>
        <li>Scalability - it is easier to develop at scale when automating CI and CD because the system will handle the complexity of multiple developers contributing and deploying to different environments for different releases</li>
        
      </ul>
      <h5>Common CI steps:</h5>
      <ul>
        <li>Checkout - pulls the code from the repository to the CI workspace</li>
      </ul>
    </section>
  );


export default CICD;