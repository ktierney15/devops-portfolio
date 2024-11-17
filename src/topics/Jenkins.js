import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Jenkins

Jenkins is an open-source automation server used primarily for CI/CD. It automates the process of building, testing, and deploying software, allowing developers to continuously integrate code changes into a shared repository and deploy the application in a streamlined, efficient manner.
   
### Core Concepts
The Jenkins dashboard has a directory-like project structure. At the top level are folders that you can consider to use for projects, platforms, or subcategories fo pipelines. 
You can further categorize with subdirectories from there, or have your directories contain your jobs.

#### Job types


`;

const Jenkins = () => (
    <section id="jenkins" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Jenkins;