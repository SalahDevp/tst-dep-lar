// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a port number
const PORT = 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
