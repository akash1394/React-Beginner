import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      available: "true"
    };
  }
  render() {
    return (
      <React.Fragment>
        What is the current state ? {this.state.available}
      </React.Fragment>
    );
  }
}
