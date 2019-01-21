require('dotenv').config({ path: 'variables.env' });

const createServer = require('./createServer');

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
