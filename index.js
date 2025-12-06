const express = require('express');
const app = express();
const port = process.env.port;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public'));


// Sample route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/status', (req, res) => {
  res.status(200).end();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
