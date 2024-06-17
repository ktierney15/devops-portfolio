# Portfolio Website
This website serves as both an overview of all of my projects, and a detailed reference summarizing the technologies and concepts I frequently work with

------------
## CI/CD
This project contains CI and CD pipelines.

### CI Steps

### CD Steps

--------------
## Branching strategy
There are two branches: main and develop. I push all of my changes to the develop branch and when a new version is ready to be created and pushed to production I create a pull request to the main branch. Once the pr checks pass I then merge to main which creates a new tagged version

When I want to push changes to production, I manually trigger the CD pipeline from the tag specified as the ref

-------------
