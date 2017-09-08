import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/index";
import SpotifyCallback from "./pages/spotify-callback";
import CreateRoom from "./pages/createRoom";
import RoomAdmin from "./pages/roomAdmin";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/spotify-callback" component={SpotifyCallback} />
      <Route path="/room/create" component={CreateRoom} />
      <Route path="/room/:roomName/admin" component={RoomAdmin} />
    </Switch>
  </Router>
);

export default Routes;