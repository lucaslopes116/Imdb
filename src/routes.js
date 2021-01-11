import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import GenericNotFound from './pages/GenericNotFound';

function Routes() {
  return (

    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={Detail} path="/detail:params+" />
      <Route path='/404' component={GenericNotFound} />
      <Redirect from='*' to='/404' />
    </Switch>

  );
}

export default Routes;
