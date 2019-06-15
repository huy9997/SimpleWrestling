import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onsubmit = () => {
    axios
      .post("api/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(function(response) {
        console.log(response, "sucecss in sending data");
      })
      .catch(function(error) {
        console.log(error, "error");
      });
  };
  render() {
    return <div />;
  }
}
export default App;
