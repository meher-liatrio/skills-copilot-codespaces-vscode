// Create web server
// Run the server on localhost:3000
// Create a route for the root directory that returns the string "Hello, world!"

// Import the express library
const express = require('express');

// Create a new express application
const app = express();

// Define a route for the root directory
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});