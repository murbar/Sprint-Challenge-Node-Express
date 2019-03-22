import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';

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
        <ProjectList path="/" projects={projects} />
        <ProjectDetails path="/projects/:id" />
      </Router>
    </main>
  );
};

export default App;
