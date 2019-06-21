import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onsubmit = () => {
    console.log("submit a button");
    axios
      .get("api/createTournament/test")
      .then(function(response) {
        console.log(response, "sucecss in sending data from home page");
      })
      .catch(function(error) {
        console.log(error, "error");
      });
  };
  render() {
    return <Button onClick={this.onsubmit}>test button</Button>;
  }
}
export default App;
