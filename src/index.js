const express = require('express');

const { UserModel } = require('./models/UserModel');
const { db } = require('./db');
const { routes } = require('./routes');

/**
 * Initializes the server.
 *
 * @returns {Promise<undefined>} A promise to nothing.
 */
async function init() {
  const server = express();

  await db.connect();

  await UserModel.upgrade();

  // To receive body requests parsed as JSON
  server.use(express.json());

  server.use(routes);

  server.listen(3000);
}

init();