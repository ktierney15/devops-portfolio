import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Linux
Linux is an open-sourced Unix-based operating system kernel. Linux tends to be the industry-favorite OS to use for both hosting and local development (although most companies do not primarily use linux).
  
An operating system kernel is where the user can interface between the software and the hardware of a system. This is an essential part to doing any sort of work with computers. 
For this section I am just going to give a brief overview of the Linux kernel and how its used in DevOps and System Administration.
   
### Users and Groups
To add a user to a host, you need to be running commands as the root user. The root user can essentially do whatever it wants and is mostly used only for managing the machine. 
You can run the terminal as the root user with the following command:  
\`\`\`bash
$ sudo su
\`\`\`
or to run a singular command as root:
\`\`\`bash
$ sudo [command]
\`\`\`
   
To add users to a host you will need to run the following command:
\`\`\`bash
$ useradd [user name] ## creates a user
\`\`\`
    
A group is a classification of users that can potentially share the same permissions. To create a group you can run the following command:  
\`\`\`bash
$ groupadd [group name]
\`\`\`
  
To add a user to a group you can run the following command:  
\`\`\`bash
$ usermod -aG [group name] [user name] ## add an existing user to an existing group
$ usermod -aG [group name 1], [group name 2] [user name] ## add a user to multiple groups
\`\`\`
  
To see information about a user (unique id, group id, list of groups it belongs to), run the following command:  
\`\`\`bash
$ id [user name]
\`\`\`
     

### SSH, redirection and permissions
You can connect to a server over an unsecured network using SSH. SSH is allows you to login to a remote computer in a secure manner. 
To connect to a computer using SSH you can run the following command:
\`\`\`bash
$ ssh [username]@[host name or ip]
\`\`\`
  
You can generate a pem key running the following commands: 
\`\`\`bash
$ ssh-keygen
$ ssh-copy-id [machines IP or host name]
\`\`\`
   
Not only can you connect to a machine securely, you can transfer files too using SCP:
\`\`\`bash
$ scp [filename] [host you are copying to]:[path you want to copy into]
\`\`\`
  
Once you have your files on your server, you can set the permissions of the file by doing the following:
\`\`\`bash
$ ll # shows files in current directory as well as their permissions
$ chmod +x [executable file] # give your file execute permission (so you can run the script)
\`\`\`

`;

const Linux = () => (
    <section id="linux" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Linux;