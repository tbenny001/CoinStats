var express = require('express');
var path = require('path');
var app = express();

var distPath = path.resolve(__dirname, './../', 'dist');

app.use(express.static(distPath));

app.listen(3000, function() {
  console.log('Server listening on port 3000...');
})
