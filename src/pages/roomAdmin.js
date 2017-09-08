import React, { Component } from 'react';
import fetch from "isomorphic-fetch";

class Page_Login extends Component {
  componentDidMount()
  {
    this.room = this.props.match.params.roomName;
  }

  play() {

    fetch(`/backend/room/${this.room}/play`, {
      method: "PUT"}).then(() => {

      })
  }
  pause() {

    fetch(`/backend/room/${this.room}/pause`, {
      method: "PUT"}).then(() => {

      })
  }
  render() {
    return (
  <div>RoomADMIN
  <input type="submit" value="Play" onClick={this.play.bind(this)} />
  <input type="submit" value="Pause" onClick={this.pause.bind(this)} />
  </div>
    );
  }
}

export default Page_Login;