var fetch = require('isomorphic-fetch');

const url = "https://api.coinmarketcap.com/v1/ticker/";

function fetchCurrencyData(currencyName) {
  return fetch(`${url}${currencyName}`)
    .then(response => response.json())
    .then(response => response[0])
    .catch(err => err);
}

module.exports = fetchCurrencyData;
/*
What I need to do:
Make parallel asynchronous calls for each currency found in the currencyNames array and store the objects in an array.
*/
