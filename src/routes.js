import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

function Routes() {
  return (

    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={Detail} path="/detail:id" />
    </Switch>

  );
}

export default Routes;
