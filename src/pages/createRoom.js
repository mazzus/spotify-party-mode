import React, { Component } from 'react';
import fetch from "isomorphic-fetch";

class Page_Login extends Component {
  render() {
    return (
      <div>Create Room:
        <input type="text" onChange={this.onNameChanged.bind(this)} />
        <input type="submit" onClick={this.onsSubmit.bind(this)} />
      </div>
    );
  }
}

export default Page_Login;