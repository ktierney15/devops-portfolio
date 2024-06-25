import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Terraform and IAC

### What is IAC?
IAC, or Infrastructure as Code, is the process of provisioning Infrastructure in a code-base and deploying/managing it via automation.
This can be achieved in many different ways and with many different technologies. 
Most of my personal and professional projects are in the cloud so my preferred IAC platform is Terraform.

### Benefits of IAC
- **Repeatability** - When you have a piece of infrastructure defined in a file, it is easy to either execute that file somewhere else or at least copy it into a different project
- **Scalability** - Most IAC tools allow you to parameterize variables such as size and count of your infrastructure. Some also allow for autoscaling or load balancing
- **Consistency and Standardization** - IAC allows you to have a standard definition for infrastructure across your organization. You can usually also maintain state through IAC
- **Version Control** - Since your infrastructure is code, you can reap the benefits of version controlling it - rollbacks, collaboration, aligning to releases, etc...
- **Cost Optimization** - When you know exactly what is being provisioned (and how many) it is easier to keep track of costs. Many IAC platforms (such as Terraform) will inform you the cost of your infrastructure as well
- **Security** - Both configuration and changes to configuration are layed out in your IAC files so it is easier to avoid security issues
- **Documentation** - Not only can you add documentation to your IAC repository, but your code itself also serves somewhat as documentation as other engineers can see what the infrastructure consists of


### Terraform Basics
Terraform is an IAC tool used mainly for cloud providers such as AWS, Azure and GCP.
Hashicorp, the company who owns and maintains terraform, has custom modules that coincide with the resources these cloud providers allow you to create.
You can use these modules (and create your own) in a stack together so they can all be managed together. 
This is especially important and convenient when your pieces of infrastructure are dependent on one another or work together

#### File Anatomy



#### Terraform Commands


#### State Management


#### Modules and Reusability


#### Workspaces, Environments and Terraform Cloud



#### Best Practices


`;

const Terraform = () => (
    <section id="terraform" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Terraform;