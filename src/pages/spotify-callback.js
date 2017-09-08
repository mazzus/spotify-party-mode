import fetch from "isomorphic-fetch";
import React, { Component } from "react";
import qs from "query-string";

class Page_SpotifyCallback extends Component {
  componentDidMount() {
    const { state, code, error } = qs.parse(window.location.search);
    console.log({ state, code });
    if (error) {
      return console.error(error);
    }
    fetch("/backend/sign-in/complete", {
      method: "POST",
      body: JSON.stringify({ state, code }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  render() {
    return <div />;
  }
}

export default Page_SpotifyCallback;
