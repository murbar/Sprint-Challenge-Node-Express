import React from 'react';
import { Link } from '@reach/router';

const ProjectsList = ({ projects }) => {
  return (
    <div>
      <h1>Projects list</h1>
      {projects.length ? (
        <ul className="users-list">
          {projects.map(project => (
            <li key={project.id}>
              {project.name} <Link to={`/projects/${project.id}`}>View project details</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>No projects</div>
      )}
    </div>
  );
};

export default ProjectsList;
