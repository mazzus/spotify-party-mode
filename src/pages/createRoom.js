import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import cookie from "js-cookie";

class Page_CreateRoom extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  onNameChanged(name) {
    console.log({name})
    this.setState({ name });
  }

  onSubmit() {
    const { name } = this.state;
    fetch("/backend/room/create", {
      method: "POST",
      body: JSON.stringify({ session: cookie.get("session"), name }),
      headers: {
        "Content-Type": "application/json"
      }}).then(() => {
        this.props.history.push(`/room/${name}/admin`);
      })
  }

  render() {
    return (
      <div>
        Create Room:
        <input type="text" onChange={event => this.onNameChanged(event.target.value)} />
        <input type="submit" onClick={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default Page_CreateRoom;
