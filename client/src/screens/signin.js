import React, { Component } from "react";
import Signin from "../components/signin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dateOfBirth: "",
      weightClass: "",
      username: "",
      password: ""
    };
  }
  render() {
    return <Signin />;
  }
}

export default App;
