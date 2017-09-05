import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/index";
import SpotifyRedirect from "./pages/spotify-redirect";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/spotify-redirect" component={SpotifyRedirect} />
    </Switch>
  </Router>
);

export default Routes;