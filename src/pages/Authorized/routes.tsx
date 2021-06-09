
import React from 'react';
import { Switch,  Route } from 'react-router-dom';

// Project imports

import Header from 'components/Header'
import HomePage from 'pages/Authorized/Home'
import ChangePasswordPage from 'pages/Authorized/ChangePassword'
import SettingsPage from 'pages/Authorized/Settings'

const AuthorizedRoute: React.FC = () => (
  <>
    <Header name="Daniel" />
    <Switch>
      <Route path="/change-password" component={ChangePasswordPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </>
)

export default AuthorizedRoute;