import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import ProjectsList from './components/ProjectList';

const projectsEndpoint = 'http://localhost:4000/api/projects';

const App = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const { data } = await axios.get(projectsEndpoint);
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <main>
      <Router>
        <ProjectsList path="/" projects={projects} />
      </Router>
    </main>
  );
};

export default App;
