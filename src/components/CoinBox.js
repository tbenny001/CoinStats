import React from 'react';
import{ Link } from 'react-router-dom';

export default class CoinBox extends React.Component {
  redOrGreen(value) {
      return (value < 0) ? "red" : "green";
  }

  render() {
    let coinData = this.props.coinData;
    const linkStyle = {
      textDecoration: 'none',
      color: 'black'
    };
    return (
      <Link to={`/coin/${coinData.name}`} style={linkStyle}>
        <div className="coin-box">
          <p>{coinData.name}({coinData.symbol})</p>
          <div>
            <p>Price($):</p>
            <p>7 day % change:</p>
            <p>24 hour % change:</p>
            <p>1 hour % change:</p>
          </div>
          <div>
            <p>{coinData.price_usd}</p>
            <p style={{color: redOrGreen(coinData.percent_change_7d)}}>{coinData.percent_change_7d}</p>
            <p style={{color: redOrGreen(coinData.percent_change_24h)}}>{coinData.percent_change_24h}</p>
            <p style={{color: redOrGreen(coinData.percent_change_1h)}}>{coinData.percent_change_1h}</p>
          </div>
        </div>
      </Link>

    )
  }
}
