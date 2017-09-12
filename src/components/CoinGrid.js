import React from 'react';
import currencies from './../const/currencies'
import fetch from 'isomorphic-fetch';


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
      <div>
        <ul>
          {console.log(this.state.data)}
          {this.state.data.map((coin, i) => { return <li key={i}>{coin.id}</li>})}
        </ul>
      </div>
    )
  }
}

/*
The render function is probably being called before the promise resolves.
Should the responsibility of this component solely be to render things? Should it
not execute the fetch function
*/
