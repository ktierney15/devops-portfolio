import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Github Actions

actions section
`;

const Actions = () => (
    <section id="gitactions" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Actions;