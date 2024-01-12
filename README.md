# Portfolio Website
This website serves as both an overview of all of my projects and one of my projects

------------
## CI/CD
This project contains CI and CD pipelines.

Since I am only working with one environment I decided I want to manually trigger the CD pipeline every time I want to delpoy the application. 

### CI Steps
- Building and Linting - This step occurs on every pull request and merge to ensure that the code being pushed to the main branch is not broken and is using proper syntax
- Terraform Build - Similarly to the applicaiton build step, this step runs a terraform plan on the infrastructure to make sure that there are no terraform code errors before deployment
- Version and publish - the last step of the CI pipeline only happens on merge to the main branch. After all of the preliminary builds, there is a new version created and a new image is pushed to docker hub. The versioning format is sematic versioning and the user has the option to pass MAJOR or PATCH into the title of the merge to increment a major or patch version. The default incrememnt is minor

### CD Steps

--------------
## Branching strategy
The branching strategy employed for this repository is simple because I am the only one pushing changes to this repository. 

There are two branches: main and develop. I push all of my changes to the develop branch and when the branch is ready to be pushed to production I create a pull request to the main branch. Once the pr checks pass I then merge to main which pushes the latest image to docker hub

-------------
## Infrastructure as Code
For this project I wanted to showcase my proficency in both Terraform and Docker. I could have decided to host this application in AWS ECR, but I decided to provision an EC2 instance, install docker on it and run the image on the EC2 just to cover more topics with this project


