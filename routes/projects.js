const express = require('express');
const db = require('../data/helpers/projectModel');

const router = express.Router();

// Projects
// id	          number	  generated on create
// name         string	  required
// description  string	  required
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
