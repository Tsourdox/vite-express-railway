const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}/`);
});
