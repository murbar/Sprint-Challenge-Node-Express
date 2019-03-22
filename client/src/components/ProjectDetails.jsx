import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const projectsEndpoint = 'http://localhost:4000/api/projects';

const ProjectDetails = ({ id }) => {
  const [project, setProject] = useState(null);

  const getProject = async () => {
    const { data } = await axios.get(projectsEndpoint + `/${id}`);
    setProject(data);
  };

  useEffect(() => {
    getProject();
  }, []);

  const actionsList = () => project.actions.map(a => <li key={a.id}>{a.description}</li>);

  return (
    <div>
      <Link to="/">Back to project list</Link>
      {project ? (
        <div>
          <h1> Details for {project.name}</h1>
          <p>{project.description}</p>
          <p>Completed: {project.completed ? '✅' : '⛔'}</p>
          <h2>Actions</h2>
          {project.actions.length ? <ul>{actionsList()}</ul> : <p>No actions</p>}
        </div>
      ) : (
        <div>Cannot show project details</div>
      )}
    </div>
  );
};

export default ProjectDetails;
