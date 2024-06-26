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
Terraform projects are made up of files written in HCL (Hashicorp Configuration language) with the file extension of tf. 
A generic project will have the following files:
- main.tf - think of this as the main function
- variables.tf - this is where the variables are defined. you can set types, descriptions, defaults and more
- outputs.tf - a definition of what the output variables for your project will be. an example is the name of a created resource
- terraform.tfvars - your variable values

Those are the most common, but there are others too that I wont go into detail about such as policy.tf, data.tf, override.tf and many more
      
Your IAC configuration mainly consists of the following items
- resource - cloud resources
- data - some form of external information/data
- provider - your cloud provider and the details that go with it
- locals - local variables
- module - pre-configured reusable terraform code
- variable - variable definition
- output - output definitions
- provisioner - remote or local exec: runs a command locally or on an instance that you are provisioning
- policy - Sentinel policy definition for your configuration to enforce governance

Here is a simple example of a simple terraform project to create a server (ec2 instance) in AWS:

\`\`\`hcl
# main.tf

provider "aws" {
    region = var.region
  }

  locals {
    instance_tags = {
      Name  = "example-instance"
      Owner = "dev-team"
      Environment = "development"
    }
  }

  resource "aws_instance" "example" {
    ami             = var.ami_id
    instance_type   = var.instance_type
    key_name        = var.key_name
    tags            = local.instance_tags
  
    # Provisioning with a shell script
    provisioner "remote-exec" {
      inline = [
        "sudo yum update -y",
        "sudo yum install -y httpd",
        "sudo systemctl start httpd",
        "sudo systemctl enable httpd"
      ]
  
      connection {
        type        = "ssh"
        user        = "ec2-user"
        private_key = file(var.ssh_private_key)
        host        = self.public_ip
      }
    }
  }
\`\`\`

\`\`\`hcl
# variables.tf

variable "region" {
    description = "The AWS region to deploy resources in."
    type        = string
    default     = "us-east-1"
}
  
variable "instance_type" {
    description = "The EC2 instance type."
    type        = string
    default     = "t2.micro"
}

variable "ami_id" {
description = "The AMI ID for the EC2 instance."
    type        = string
    default     = "ami-0c55b159cbfafe1f0"
}

variable "key_name" {
    description = "The name of the SSH key pair to use."
    type        = string
}

\`\`\`

\`\`\`hcl
# outputs.tf

output "instance_id" {
    description = "The ID of the EC2 instance."
    value       = aws_instance.example.id
}
  
output "instance_public_ip" {
    description = "The public IP of the EC2 instance."
    value       = aws_instance.example.public_ip
}
\`\`\`

\`\`\`hcl
# terraform.tfvars

region         = "us-east-1"
instance_type  = "t2.micro"
ami_id         = "ami-0c55b159cbfafe1f0"
key_name       = "my-ssh-key"
ssh_private_key = "~/.ssh/id_rsa"
\`\`\`
      
#### Terraform Commands
Once you have your configuration files set up you have to interact with the terraform command line interface to actually execute your code. 
Here are some common commands that you will need to run your code:
- **terraform init** - initializes your terraform working directory
- **terraform plan** - runs a "plan" that will essentially show you the actions that will happen if you run an apply. Can be a good preliminary check that your code will run
- **terraform apply** - applies your changes
    - you can use the output of your plan in this step to execute the plan (or you can just run it against the current config)
    - you can also pass variables in if you do not have a tfvars file
- **terraform destroy** - destroys your project. Tears down everything that was created by your terraform configuration
- **terraform show** - shows the state of your project
- **terraform output** - displays your output (from your state file)
- **terraform validate** - validates that your files have the correct syntax
- **terraform fmt** - formats your file based on best practices

There are many more commands offered by the CLI, but these are the core ones that I personally use the most

#### State Management
Up until this point I have not really got into state, but I have mentioned it a lot. 
State is probably the most important part of terraform as it provides most of the benefits listed above. 
The State of the project that is currently deployed is kept in the terraform.tfstate file. 
This file is a json object that keeps track of everything that gets created, so that when you make a change it knows what you want to change and what you want to leave be. 
     
When the state drifts (there is a change made to the resource outside of terraform), you can run a terraform refresh or apply and it will return the resource to the desired state. 
State management is a crucial part of knowing what is deployed, changes that need to be made and versioning your infrastructure. 
This is the whole reason we use terraform - if it did not keep track of state then we might as well be creating and destroying infrastructure with the AWS/GCP/Azure CLIs or even API calls. 

#### Modules and Reusability
Just like in many other popular frameworks these days, Terraform focuses a lot on reusability. 
If you have a piece of terraform code you can use a lot, or you are a company and want to govern exactly what and how resources get created, you can create a module. 
A module is comparable to a function in regular programming language. 
It gets defined and used, often times passing in specific parameters that tailor it to the needs of the user.
     
here is an example of a module that you can consume to create an ec2: 
\`\`\`hcl
module "ec2_instance" {
    source = "./modules/ec2-instance"
  
    ami           = "ami-0c55b159cbfafe1f0"
    instance_type = "t2.micro"
    key_name      = "my-ssh-key"
    instance_name = "example-instance"
    user_data     = var.user_data
  
    network_interfaces = var.network_interfaces
  }
\`\`\`

#### Workspaces, Environments and Terraform Cloud



#### Best Practices


`;

const Terraform = () => (
    <section id="terraform" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Terraform;