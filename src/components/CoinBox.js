import React from 'react';

export default class CoinBox extends React.Component {
  render() {
    let coinData = this.props.coinData;
    return (
      <div className="coin-box">
        <p>{coinData.name}({coinData.symbol})</p>
        <div className="info-box">
          <div>
            <p>Price($):</p>
            <p>7 day % change:</p>
            <p>24 hour % change:</p>
            <p>1 hour % change:</p>
          </div>
          <div>
            <p>{coinData.price_usd}</p>
            <p>{coinData.percent_change_7d}</p>
            <p>{coinData.percent_change_24h}</p>
            <p>{coinData.percent_change_1h}</p>
          </div>
        </div>

      </div>
    )
  }
}
