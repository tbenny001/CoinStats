import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { createBrowserHistory } from 'react-router';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import coinData from './reducers/coinData';

// const defaultState = {
//   data: {},
//   coinData
// };

const store = createStore(combineReducers({
  coinData,
  routing: routerReducer
}));

export const history = syncHistoryWithStore(createBrowserHistory, store);

export default store;
