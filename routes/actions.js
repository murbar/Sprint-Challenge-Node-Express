const express = require('express');
const db = require('../data/helpers/actionModel');
const projectsDb = require('../data/helpers/projectModel');

const router = express.Router();

// Actions
// id           number	  generated on create
// project_id	  number	  required, must be the id of an existing project
// description	string	  up to 128 characters, required
// notes	      string	  no size limit, required
// completed	  boolean	  not required

const isValidAction = async action => {
  try {
    const project = await projectsDb.get(action.project_id);
    return action.notes && action.description && project;
  } catch (error) {
    return false;
  }
};

router.get('/', async (req, res) => {
  try {
    const allActions = await db.get();
    res.status(200).json(allActions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Cannot get actions.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const actionById = await db.get(id);
    if (!actionById) {
      res.status(404).json({ error: 'No action with that ID.' });
    } else {
      res.status(200).json(actionById);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Cannot get action.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { body: actionData } = req;
    const valid = await isValidAction(actionData);
    if (!valid) {
      res
        .status(400)
        .json({ error: 'Action must have description, notes, and a valid project ID.' });
    } else {
      const newAction = await db.insert(actionData);
      res.status(200).json(newAction);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Cannot save action.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body: actionData } = req;
    const valid = await isValidAction(actionData);
    if (!valid) {
      res
        .status(400)
        .json({ error: 'Action must have description, notes, and a valid project ID.' });
    } else {
      const updatedAction = await db.update(id, actionData);
      if (!updatedAction) {
        res.status(404).json({ error: 'No action with that ID.' });
      }
      res.status(200).json(updatedAction);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Cannot update action.' });
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
