import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout.js';
import ConnectedCoinGrid from './ConnectedCoinGrid';
import CoinDetail from './CoinDetail';

const AppRouter = (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ConnectedCoinGrid} />
        <Route path="/coin/:coinName" component={CoinDetail} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default AppRouter;
