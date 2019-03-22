const express = require('express');
const server = express();
const cors = require('cors');

const projects = require('./routes/projects');
const actions = require('./routes/actions');

server.use(express.json());
server.use(cors());

server.use('/api/projects', projects);
server.use('/api/actions', actions);

const port = 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
