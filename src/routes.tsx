
import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// Project imports

import Login from './pages/Login'
import HomeRoute from './pages/Authorized/routes'

const Routes: React.FC = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={HomeRoute} />
      </Switch>
    </BrowserRouter>
)

export default Routes;