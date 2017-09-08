import fetch from 'isomorphic-fetch';
import currencyNames from '../const/currencies';

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://api.coinmarketcap.com/v1/ticker/";

function fetchCurrencyData(currencyName) {
  return fetch(`${proxyurl}${url}${currencyName}`)
    .then(response => response.text())
    .catch(err => err);
}

let responses = currencyNames.map(coin => fetchCurrencyData(coin));

export default responses;
/*
What I need to do:
Make parallel asynchronous calls for each currency found in the currencyNames array and store the objects in an array.
*/
