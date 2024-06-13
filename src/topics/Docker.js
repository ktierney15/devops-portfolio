import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Docker

### popular docker commands


`;

const Docker = () => (
    <section id="docker" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Docker;