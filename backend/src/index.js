const { config } = require('dotenv');

const db = require('./db');
const createServer = require('./createServer');

config({ path: 'variables.env' });

createServer().server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  options =>
    console.log(`The server is running on http://localhost:${options.port}`)
);
