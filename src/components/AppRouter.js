import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './../store';

import Layout from './Layout.js';
import ConnectedCoinGrid from './ConnectedCoinGrid';
import CoinDetail from './CoinDetail';

const AppRouter = (
  <Layout>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ConnectedCoinGrid} />
          <Route path="/coin/:coinName" component={CoinDetail} />
        </Switch>
      </Router>
    </Provider>
  </Layout>
);

export default AppRouter;
