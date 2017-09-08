import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout.js';
import CoinGrid from './CoinGrid';

const AppRouter = (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CoinGrid} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default AppRouter;
