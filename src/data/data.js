import fetch from 'node-fetch';

async function fetchCurrencyData() {
  let url = "https://api.coinmarketcap.com/v1/ticker/bitcoin/";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

fetchCurrencyData();
/*
What I need to do:
Make parallel asynchronous calls for each currency found in the currencyNames array and store the objects in an array.
*/
