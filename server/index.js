const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.json('Hello World!');
});
app.get('/api', (req, res) => {
  res.json('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}/`);
});
