
import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// Project imports

import Login from './pages/Login'
import HomePage from './pages/Home'

const Routes: React.FC = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
)

export default Routes;