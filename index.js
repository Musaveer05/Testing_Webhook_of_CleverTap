const express = require('express');
const app = express();
const port = process.env.port;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public'));

// clevertap.init('TEST-98R-65Z-6K7Z', 'eu1') // Replace with values applicable to you


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
