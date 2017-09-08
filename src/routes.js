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
      <Route path="/create-room" component={CreateRoom} />
      <Route path="room/:roomId/admin" component={RoomAdmin} />
    </Switch>
  </Router>
);

export default Routes;