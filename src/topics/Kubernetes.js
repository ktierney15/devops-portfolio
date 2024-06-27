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
- Auto-scaling - Scaling your containers up or down based on demand (horizontally)
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
A kubernetes cluster is made up of Nodes which contain pods which run containers. 
- **Node** - A server in a kubernetes cluster. Could be a master or a worker
  - Master node - Manages the cluster via the control plane
  - Worker node - runs the pods/applications
- **Pod** - A group of one or more containers. The smallest deployable unit. 
- **Namespace** - A way to separate different resources. Good way to divide different users or different applications
- **Label** - Key value pairs attached to pods for organizing them
- **Deployment** - Manages the deployment of pods
- **Service** - Exposes pods to a network for users
- **Configmap** - stores configuration data and secrets
     
Control plane components:
- API Server - exposes the kubernetes API for communication with the nodes 
- etcd - k/v store for cluster data
- Controller manager - a daemon that embeds the core control loops shipped with Kubernetes. Regulates cluster state
- Scheduler - assigns new pods to nodes
      
Node components:
- Kubelet - executes pod requirements and manages resources
- Kube-proxy - manages network for pod communication
- Container runtime - runs containers (ex: Docker)
    
\`\`\`
+------------------------------------------------------------+
|                     Kubernetes Cluster                     |
|                                                            |
|  +----------------------+      +----------------------+    |
|  |      Master Node     |      |     Worker Node      |    |
|  |  +---------------+   |      |  +---------------+   |    |
|  |  | API Server    |   |      |  |    Kubelet    |   |    |
|  |  +---------------+   |      |  +---------------+   |    |
|  |  | Controller    |   |      |  |   Kube-Proxy  |   |    |
|  |  | Manager       |   |      |  +---------------+   |    |
|  |  +---------------+   |      |  |ContainerRuntime|  |    |
|  |  | Scheduler     |   |      |  +---------------+   |    |
|  |  +---------------+   |      |  |      Pods     |   |    |
|  |  | etcd          |   |      |  | (Containers)  |   |    |
|  |  +---------------+   |      |  +---------------+   |    |
|  |                      |      |                      |    |
|  |  +---------------+   |      |  +---------------+   |    |
|  |  |   kubectl     |<-------->|  |               |   |    |
|  |  |               |   |      |  |  Network      |   |    |
|  |  +---------------+   |      |  |               |   |    |
|  |                      |      |  +---------------+   |    |
|  +----------------------+      +----------------------+    |
|                                                            |
|                  Additional Worker Nodes                   |
|                      +----------------+                    |
|                      |    Worker Node |                    |
|                      +----------------+                    |
|                                                            |
+------------------------------------------------------------+

\`\`\`

#### kubectl
kubectl is the kubernetes command line interface that allows you to communicate with your cluster
    
Here are some common kubectl commands:
- kubectl get nodes - List all nodes
- kubectl get pods - List all pods
- kubectl describe pod [pod name] - Get detailed information about a pod 
- kubectl logs [pod name] - View logs of a pod 
- kubectl apply -f [yaml file] - Apply configuration from a file 
- kubectl scale deployment [deployment name] --replicas=[number of replicas] - Scale deployment up or down


`;

const Kubernetes = () => (
    <section id="kubernetes" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Kubernetes;