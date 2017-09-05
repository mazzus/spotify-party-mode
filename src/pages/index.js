import React, { Component } from 'react';
import fetch from "isomorphic-fetch";
import cookie from "js-cookie";

class Page_Login extends Component {

  login () {
    fetch("/backend/sign-in/initiate", {
      method : "GET"
    }).then(response => {
      response.text().then(t => console.log({t}));
      return response.json()
    }).then(result => {
      cookie.set("session", result.session);
      console.log({result})
      window.location = result.authURL;
    }) 
  }

  render() {
    return (
      <span onClick={this.login.bind(this)} >Log in to spotify </span>
    );
  }
}

export default Page_Login;
