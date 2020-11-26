
import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// Project imports

import HomePage from './pages/Home'

const Routes: React.FC = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
)

export default Routes;