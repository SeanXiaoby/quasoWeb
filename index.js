const express = require('express');
const favicon = require('serve-favicon');
const url = require('url');

const PORT = 3000;

const app = express();

app.use(express.static('public'));
app.use(favicon(__dirname+ '/public/img/quaso.ico'));

console.log(__dirname+ '/public/img/quaso.ico');

app.get('/ping', function (req, res) {
  res.writeHead(204);
  res.end();
})

app.listen(PORT);

console.log(`quasoWeb starts, listening on port #${PORT}...`);