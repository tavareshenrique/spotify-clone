import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/browse';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
  </Switch>
);

export default routes;
