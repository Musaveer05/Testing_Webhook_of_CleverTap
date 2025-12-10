const express = require('express');
const app = express();
const port = process.env.port || 3000;
const fetch = require("node-fetch");


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

app.post("/send-event", async (req, res) => {
  const payload = req.body;

  const response = await fetch("https://eu1.api.clevertap.com/1/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CleverTap-Account-Id": "TEST-8WW-745-K67Z",
      "X-CleverTap-Passcode": "SCW-BAZ-GEEL",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  res.json(data);
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
