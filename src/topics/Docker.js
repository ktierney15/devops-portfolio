import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Docker
Docker is a container runtime solution that has become extremely popular for containerizing applications.
Containers are lightweight, standalone, portable environments used to run software.
They solve many common problems that developers face when deploying code such as:
- failures due to a difference in local/development and production environments
- over/under utilizing server resources
- the complexity and error prone nature of having to manually provision application environments
- multipurpose servers having conflicting configuration
    
#### How containers work
Containers are similar to virtual machines in that they create specific isolated environments separated from the underlying server,
but are different in many other ways.    
One of the most notable differences is that VMs have their own operating system that gets installed that generally takes up a lot of space on the host.
Containers use the hosts underlying operating system that is managed by a hypervisor.
Essentially, docker/containers are just services running on a server, handled by the docker daemon.   
    
This groundbreaking new technology is widely used in the industry and I personally use it whenever I can.
If you have a DevOps mindset, containers are a must-have tool in your arsenal

#### Images 
Containers are provisioned by creating an Image that installs the dependencies and runs application processes.
Images can also be inherited from other Images due to the nature of the image layering system. 
Generally each new command or inherited image creates a new layer that the next command builds on.
It is important to optimize these layers to have reasonable build times and sizes.   
    
In docker, your images are stored in a file labeled Dockerfile. 
People generally store this file in the base directory of their project.

#### Volumes
Volumes are used for persisting data that is generated or passed through a container.
Since containers are ephemeral, they lose all of their data when they are deleted. 
The solution to this is to create a volume, mount it to the container and store the data there so it persists when the container is inevitably destroyed.
Volumes can be shared between multiple containers as well.

#### Dockerhub
You can access other peoples images via [Dockerhub](https://hub.docker.com/).
Dockerhub contains repositories of version controlled images.   
   
You can pull any public image from dockerhub but usually it is best practice to only pull images that are approved by docker or if you really understand exactly what they are doing.

#### Developing with docker
When developing dockerized applications, you can frequently build the image to see how it behaves in your environment.
When you build an image that creates a container, and to run your project you then have to run the container.
You can have multiple containers running on your machine at a time and even map them to ports on your machine to access the running application locally.
Just like in dockerhub, you can locally version these images and you can create multiple containers from the same image.   
   
If you have a complex application that needs multiple containers you will need a container orchestration tool to handle it.
A common need for this is when you have an application that scales up or down based on the traffic, or a load balanced application with multiple containers for increased resilience and reliability.
The most common container orchestrators are Kubernetes and Dockers native tool, Docker Swarm.
I will get more into container orchestration in the kubernetes section but it is a crucial part of running production applications on containers.

### Popular docker commands
- **docker run –name [name] image[:tag]** - runs a container
- **docker ps -a** - lists containers (-a flag will include containers that are not running)
- **docker container stop [name or id]** - stops a container
- **docker container rm [name or id]** - deletes a container
- **docker build -t [tag] [path to dockerfile directory]** - builds a container based on the image in the specified directory
- **docker image ls** - lists images

### Dockerfile syntax
- **FROM [image]** - specifies the image that you are inheriting from
- **RUN [command]** - executes a command in the image
- **COPY [host path] [image path]** - copies files from the host to the image
- **ADD [initial path] [image path]** - similar to copy, but can also copy files from urls
- **CMD [command]** - provides the default command when an image starts
- **ENTRYPOINT [entrypoint]** - configures the container to run as an executable
- **WORKDIR [directory]** - specifies the working directory of the container
- **ENV [key]=[value]** - sets environment variables
- **EXPOSE [port]** - tells docker which port a service is running on (mainly for documenting)
- **USER [user]** - specifies the user to use when running the following commands
- **VOLUME [mount point]** - creates a mount point for external volumes
- **HEALTHCHECK CMD [command]** - specifies a health check command
- **SHELL [shell]** - specifies a shell to use for the following commands


#### Example: The image for the container that this site is running on
\`\`\`Dockerfile
FROM node:14-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# production environment
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

\`\`\`

`;

const Docker = () => (
    <section id="docker" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Docker;