import React from 'react';
import data from '../data/data.js'

export default class CoinGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    const coinData = data.map(promise => promise.then(data => data));
    this.setState({data: coinData})
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(coin => console.log(coin))}
          // {this.state.data.map((coin, i) => <li key={i}>coin.id</li>)}
        </ul>
      </div>
    )
  }
}

/*
The render function is probably being called before the promise resolves.
*/
