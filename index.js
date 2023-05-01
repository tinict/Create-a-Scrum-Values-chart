const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors');
const port = 3000;

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

