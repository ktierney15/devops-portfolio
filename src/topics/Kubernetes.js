import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Kubernetes and Container Orchestration
Kubernetes is the most popular container orchestration tool in the industry at the moment.
There are many advantages to using Kubernetes as your container orchestrator, and container orchestration itself is a crucial part to having a production containerized environment.
    
#### What is container orchestration?
Container orchestration is the automated management and coordination of containers in your environment.
Container orchestrators handle the following:
- Automated deployment - automatically deploying your containers when you need them
- Auto-scaling - Scaling your containers up or down based on demand
- Load balancing - directing traffic between containers to ensure reliability
- Self healing - detects failures and restarts containers as needed
- Networking - coordinates the communication between containers
- Storage - Manages and coordinates both shared and individual storage
- Monitoring - The cluster is monitored and will produce logs that are helpful to debugging and managing your applications
    
High-level process of container orchestration:
1. User defines a desired state as code
2. The orchestrators scheduler defines tasks to its worker nodes
3. The containers get deployed as defined
4. The orchestrator monitors the application to make sure it is in the desired state (defined by the user)
5. The orchestrator will scale the cluster up or down based on the need, balance the load between the nodes, and manage the communication between the containers
    
Architecture of a container orchestrator:

\`\`\`
    +-----------------------+
    | Orchestration Manager |
    +-----------------------+
               |
    +-----------------------+
    |     Scheduler         |
    +-----------------------+
     /        |           |

+-------+   +-------+    +-------+
| Node 1 |  | Node 2 |   | Node 3 |
+-------+   +-------+    +-------+
    |             |           |
Containers  Containers  Containers

\`\`\`

#### Anatomy of Kubernetes


#### Helm

`;

const Kubernetes = () => (
    <section id="kubernetes" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Kubernetes;