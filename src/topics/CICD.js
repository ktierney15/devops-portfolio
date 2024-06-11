import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
  # CI/CD
  CI/CD (or continuous integration and Continuous Deployment/Delivery) is a process used by developers and development teams to automate software delivery.
  Before CI/CD, companies would manually build, test, and deploy their applications.   

  **Continuous Integration** - A software development process used to integrate changes to a codebase via automation  
  
  **Continuous Deployment** - An extension of Continuous integration where code is frequently deployed via automation

  ### Advantages of using CI/CD:
  - **Faster time to market** - CI/CD accelerates the development lifecycle by automating manual mundane tasks that normally can take a long time
  - **Faster feedback loop** - When you push code and it fails CI (building, linting unit testing etc...) the developer will know immediately as opposed to finding out upon the time of deployment to a testing environment
  - **Improved code quality** - automating linting and testing processes ensures that the team will follow the proper approach to developing quality code
  - **Overall risk reduction** - automating these processes will remove the rsk of somebody making a mistake when deploying manually
  - **Scalability** - it is easier to develop at scale when automating CI and CD because the system will handle the complexity of multiple developers contributing and deploying to different environments for different releases

  ### Common CI steps:
  - **Checkout** - pulls the code from the repository to the CI workspace
  - **Install Dependencies** - installs dependencies on the runner needed for the application build
  - **Lint/Static code analysis** - lints the application to ensure that you are following best coding practices
  - **Build** - compiles/builds application. use to both generate executable and determine if the app will build
  - **Unit test/Code coverage analysis** - runs unit tests on application. This ensures a fail fast approach where a user will know immediately if their code has a bug
  - **Versioning** - Generates a build number or application version number depending on your SDLC
  - **Publish artifact** - Publishes an artifact to an artifactory repository
  - **Deploy to Dev/staging/test** - deploys to the first environment in your SDLC
  ### Common CD steps:
  - **Checkout artifact** - pulls the build artifact into your workspace
  - **Environment setup** - potentially set up environment via Infrastructure as Code and Configuration as code
  - **Deploy Application** - Deploy application to specified environment
  - **Post deployment validation** - Run a health check or defined validation on the application that was deployed
`;

const CICD = () => (
    <section id="cicd" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default CICD;