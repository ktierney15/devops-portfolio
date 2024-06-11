import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Kubernetes

k8s section
`;

const Kubernetes = () => (
    <section id="kubernetes" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Kubernetes;