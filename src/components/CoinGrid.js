import React from 'react';
import currencies from './../const/currencies'
import fetch from 'isomorphic-fetch';

import CoinBox from './CoinBox';

export default class CoinGrid extends React.Component {
  componentWillMount() {
    fetch('/fetchCurrencyData', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({currencies: currencies})},
    ).then(data => data.json())
    .then(data => this.props.updateCoinData(data));
  }

  render() {
    return (
      <div className="coin-box-container">
        {this.props.data.map((coin, i) => { return <CoinBox key={i} coinData={coin} />})}
      </div>
    )
  }
}
