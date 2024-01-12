import React from "react"
import projects from '../projects.json';

export default function Projects() {
    return (
        <div>
            <p>projects</p>
            <ul>
                {projects.projects.map((project, index) => (
                <li key={index}>
                    <h3>{project.name}</h3>
                    <img src={project.image} alt={`${project.name}`} style={{ maxWidth: '100%' }} />
                    <p>Description: {project.description}</p>
                    <p>
                    GitHub: <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubLink}</a>
                    </p>
                </li>
                ))}
            </ul>
        </div>
    )
}