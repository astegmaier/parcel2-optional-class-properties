import React, { Component } from "react";

class App extends Component {
  message: string = "hello from property!";
  render() {
    return <div>{this.message}</div>;
  }
}

export default App;
