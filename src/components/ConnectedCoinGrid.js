import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';

import CoinGrid from './CoinGrid';

function mapStateToProps(state) {
  return {
    coinData: state.coinData,
    investments: state.investments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dipatch);
}

const ConnectedCoinGrid = connect(mapStateToProps, mapDispatchToProps)(CoinGrid);

export default ConnectedCoinGrid;
