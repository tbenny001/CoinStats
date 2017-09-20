import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import investments from './investments';
import coinData from './coinData';

const rootReducer = combineReducers({coinData, investments, routing: routerReducer });

export default rootReducer;
