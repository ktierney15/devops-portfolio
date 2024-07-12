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

### Ansible Basics


`;

const Ansible = () => (
    <section id="ansible" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Ansible;