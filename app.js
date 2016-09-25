var express = require('express');
const path = require('path');
const resolve = path.resolve;
var app = express();

app.use(express.static(path.resolve(__dirname, 'public'), {
  maxAge: 10000000
}));

var assetsPath = resolve(__dirname, 'public', 'assets');
app.use(express.static(assetsPath));

app.get(/^(?!\/api).+/, function response(req, res) {
  res.sendFile(resolve(assetsPath, 'index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});