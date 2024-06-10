import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Github Actions

Github Actions is a CI/CD platform that is built into github and runs workflows based on changes to the repository.
- actions live in a .yaml file that is stored in the .github/workflows directory

### Types of Github actions
**Composite action** - smallest unit of a github action. Steps are defined by specifying a shell and but no runner -
they need to be consumed by a reusable workflow or main workflow where the runner will be defined there 

**Reusable Workflow** - A reusable component that has a runner defined with a complete job. Meant to be consumed
by a main workflow

**Main Workflow** - The main workflow is where the jobs kick off and can either have its own steps, consume
reusable workflows or consume composite actions

**Docker action** - similar to a composite action, but runs in a separate container that is built during the 
job run and is separated from the rest of the workflow run

### Common event triggers
- workflow_dispatch - manually triggered by the user
- workflow_call - called/consumed by another composite action reusable workflow, or main workflow
- push, pull_request - push to a branch or pull request
- cron - workflow runs on a schedule defined by a cron string '* * * * *'
- tag - runs when a tag is created

### Inputs, environment variables and secrets
Most workflows will need input from the user or action calling the workflow, variables and secrets. Inputs are passed
under the workflow_dispatch section and secrets and variables are stored in the settings of the repository
  
- - 

\`\`\`yaml
Name: example workflow
on:
  workflow_dispatch:
    inputs:
      example_input:
        required: true
        description: example input
    
jobs:
  actions_job:
    runs-on: [ubuntu-latest]
    steps:
      - name: print input
        run: echo \${{ inputs.example_input }}

      - name: print variable
        run: |
          # this is a multi-line bash step
          echo \${{ vars.example_variable }}

      - name: use secret
        run: |
          echo \${{ secrets.secret_value }}
          # secrets are masked in the logs and show up as ***

\`\`\`
  
- - 

### Runners
You can either use Github's ubuntu-latest/windows-latest runner (bare bones docker container that builds and runs on their servers), or you can
provision your own runner and run a script provided by github that connects your account to it and starts 
listening for jobs

### Multiple runs
To run multiple jobs, you have a few different options based on your use-case. If you want jobs to run in
a linear order, you can chain them together by passing "needs: [job name]" and they will run consecutively



`;

const Actions = () => (
    <section id="gitactions" style= {{ scrollMarginTop: '70px' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );


export default Actions;