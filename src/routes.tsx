
import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/:repository" component={} />
        <Route path="/" exact component={} />
      </Switch>
    </BrowserRouter>
)

export default Routes;