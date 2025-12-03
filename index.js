const express = require('express');
const app = express();
const port = process.env.URL || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/status', (req, res) => {
  res.json({ status: 'OK' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;