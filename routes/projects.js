const express = require('express');
const db = require('../data/helpers/projectModel');

const router = express.Router();

// Projects
// id	          number	  generated on create
// name         string	  required
// description  string	  required
// completed	  boolean	  not required

const isValidProject = project => {
  return project.name && project.description;
};

router.get('/', async (req, res) => {
  try {
    const allProjects = await db.get();
    res.status(200).json(allProjects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not get projects.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.post('/', async (req, res) => {
  try {
    const { body: projectData } = req;
    if (!isValidProject(projectData)) {
      res.status(400).json({ error: 'Project must have name and description.' });
    } else {
      const newProject = await db.insert(projectData);
      res.status(200).json(newProject);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not save project.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

module.exports = router;
