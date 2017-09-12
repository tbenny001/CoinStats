var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var fetchCurrencyData = require('./data/data');

var distPath = path.resolve(__dirname, './../', 'dist');

app.use(express.static(distPath));
app.use(bodyParser.json());

app.post('/fetchCurrencyData', (req, res) => {
  var currencies = req.body.currencies;
  Promise.all(currencies.map(currency => fetchCurrencyData(currency)))
    .then(data => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(data);
    });
});

app.listen(3000, function() {
  console.log('App launched on http://localhost:3000');
  console.log('Server listening on port 3000...');
})
