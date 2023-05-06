const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/api/test', (req, res) => {
  res.json('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}/`);
});
