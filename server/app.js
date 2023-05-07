const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.get('/api', (req, res) => {
  res.json('Hello from the server!');
});

module.exports = { app };
