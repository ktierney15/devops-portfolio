import React from 'react';
import { Typography } from '@mui/material';

const CICD = () => (
    <section id="cicd" style={{ paddingTop: '5%' }}>
      <Typography variant="h3">CI/CD</Typography>
      <p>CI/CD (or continuous integration and Continuous Deployment/Delivery) is a process used by developers and development teams to automate software delivery.</p>
      <p>Before CI/CD, companies would manually build, test, and deploy their applications.</p>
      <p>Continuous Integration - A software development process used to integrate changes to a codebase via automation</p>
      <p>Continuous Deployment - An extension of Continuous integration where code is frequently deployed via automation</p>
      <h4>Advantages of using CI/CD:</h4>
      <ul>
        <li>Faster time to market - CI/CD accelerates the development lifecycle by automating manual mundane tasks that normally can take a long time</li>
        <li>Faster feedback loop - When you push code and it fails CI (building, linting unit testing etc...) the developer will know immediately as opposed to finding out upon the time of deployment to a testing environment</li>
        <li>Improved code quality - automating linting and testing processes ensures that the team will follow the proper approach to developing quality code</li>
        <li>Overall risk reduction - automating these processes will remove the rsk of somebody making a mistake when deploying manually</li>
        <li>Scalability - it is easier to develop at scale when automating CI and CD because the system will handle the complexity of multiple developers contributing and deploying to different environments for different releases</li>
      </ul>
      <h4>Common CI steps:</h4>
      <ul>
        <li>Checkout - pulls the code from the repository to the CI workspace</li>
        <li>Install Dependencies - installs dependencies on the runner needed for the application build</li>
        <li>Lint/Static code analysis - lints the application to ensure that you are following best coding practices</li>
        <li>Build - compiles/builds application. use to both generate executable and determine if the app will build</li>
        <li>Unit test/Code coverage analysis - runs unit tests on application. This ensures a fail fast approach where a user will know immediately if their code has a bug</li>
        <li>Versioning - Generates a build number or application version number depending on your SDLC</li>
        <li>Publish artifact - Publishes an artifact to an artifactory repository</li>
        <li>Deploy to Dev/staging/test - deploys to the first environment in your SDLC</li>
      </ul>
      <h4>Common CD steps:</h4>
      <ul>
        <li>Checkout artifact - pulls the build artifact into your workspace</li>
        <li>Environment setup - potentially set up environment via Infrastructure as Code and Configuration as code</li>
        <li>Deploy Application - Deploy application to specified environment</li>
        <li>Post deployment validation - Run a health check or defined validation on the application that was deployed</li>
      </ul>
    </section>
  );


export default CICD;