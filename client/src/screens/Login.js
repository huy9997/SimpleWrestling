import React, { Component } from "react";
import Login from "../components/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return <Login />;
  }
}

export default App;
