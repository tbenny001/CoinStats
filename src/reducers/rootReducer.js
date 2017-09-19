import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import investments from './investments';

const rootReducer = combineReducers({investments, routing: routerReducer });

export default rootReducer;
