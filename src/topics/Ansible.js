import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Ansible and CaC
One of the most useful tools that I regularly use is Ansible. Ansible's main purpose is to provision your server configuration.

## What is CaC?
Configuration as Code (or CaC) is a way to provision manage your server configuration with executable code files. 
Just like Infrastructure as code there are many different technologies and tools to use for CaC but I am mainly going to discuss Anisble as that is my favorite and what a lot of people consider the industry standard. 

### Benefits of CaC
- **Repeatability** - When you have a piece of configuration defined in a file, it is easy to either execute that file somewhere else or at least copy it into a different project
- **Consistency and Standardization** - CaC allows you to have a standard definition for infrastructure across your organization. You can usually also maintain state through CaC
- **Version Control** - Since your resource configuration is code, you can reap the benefits of version controlling it - rollbacks, collaboration, aligning to releases, etc...
- **Security** - Both configuration and changes to configuration are layed out in your CaC files so it is easier to avoid security issues
- **Documentation** - Not only can you add documentation to your CaC repository, but your code itself also serves somewhat as documentation as other engineers can see what the resource configuration consists of
  
### Ansible Core Features
#### Playbooks and Tasks
Ansible's primary configuration files are called playbooks. Playbooks are yaml-based files that define the state that you want the effected machines to be in. 
These playbooks are idempotent, the outcome of the run should always be the same no matter what machine you run it on and what the current configuration is. 
Ansible will keep track of the state of the machines and running the playbook for a second time will only change what is different between the current state of the machine and the expected state after your playbook is run. 
Tasks are individual actions to be executed by your playbook run. Common uses for tasks are installing packages/binaries and starting/restarting services.
    
#### Modularity
Ansible, like many other ______ as Code platforms, is modular. There is an extensive library of modules to perform tasks. This makes it very easy and efficient to use ansible. 
  
#### Inventory Management
You can have inventory files that store information about hosts and their variables. This allows you to manage multiple hosts in one place in an organized way. 
This is beneficial when working with many hosts, or when you have to scale up or down. 
   
#### Handlers and Notifications

  
#### Variables

  
#### Jinja2 templating
Ansible uses Jinja2 to dynamically populate values into your playbooks. This allows many different types of nodes to use the same playbooks. 
This further increases Ansibles reusability. 

  
#### Error Handling and Debugging
Ansible allows you to build error handling into your playbooks to make them more dynamic and responsive to the environment. 
For instance, you can ignore_errors to make a playbook continue regardless of the outcome of a task. 
Ansible also allows you to increase the verbosity of the logs and use debug modules to develop or troubleshoot with.
  
#### Parallel execution
Ansible supports executing multiple playbooks on multiple nodes at once. This speeds up automation for large-scale environments.
  
#### Ansible Automation
Ansible Automation (Previously called Ansible Tower), is Ansibles Enterprise platform to centrally manage all of your ansible configurations in one place. 
I am not going to go into detail as this is a more specific use-case for ansible that has more to do with keeping a company organized rather then the basic principles of the platform.


### Example playbooks
(links to github)

`;

const Ansible = () => (
    <section id="ansible" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Ansible;