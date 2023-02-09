const express = require('express');
const url = require('url');

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.get('/ping', function (req, res) {
  res.writeHead(204);
  res.end();
})

app.listen(PORT);

console.log(`quasoWeb starts, listening on port #${PORT}...`);