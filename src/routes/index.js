import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/browse';
import Playlist from '../pages/playlist';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route exact path="/playlists/:id" component={Playlist} />
  </Switch>
);

export default routes;
