import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';

import CoinGrid from './CoinGrid';

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const ConnectedCoinGrid = connect(mapStateToProps, mapDispatchToProps)(CoinGrid);

export default ConnectedCoinGrid;
