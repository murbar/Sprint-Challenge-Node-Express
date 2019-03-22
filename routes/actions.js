const express = require('express');
const db = require('../data/helpers/actionModel');

const router = express.Router();

// Actions
// id           number	  generated on create
// project_id	  number	  required, must be the id of an existing project
// description	string	  up to 128 characters, required
// notes	      string	  no size limit, required
// completed	  boolean	  not required

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
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json();
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
