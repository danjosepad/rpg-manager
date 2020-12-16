
import React from 'react';
import { Switch,  Route } from 'react-router-dom';

// Project imports

import Header from 'components/Header'
import HomePage from 'pages/Home'

const Routes: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/home" component={HomePage} />
    </Switch>
  </>
)

export default Routes;