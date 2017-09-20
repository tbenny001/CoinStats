import React from 'react';
import currencies from './../const/currencies'
import fetch from 'isomorphic-fetch';

import CoinBox from './CoinBox';

export default class CoinGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    fetch('/fetchCurrencyData', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({currencies: currencies})},
    ).then(data => data.json())
    .then(data => this.setState({data}));
  }

  render() {
    return (
      <div className="coin-box-container">
        {this.state.data.map((coin, i) => { return <CoinBox key={i} coinData={coin} />})}
      </div>
    )
  }
}
