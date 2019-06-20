import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Cookies from "universal-cookie";

const cookies = new Cookies();
console.log(cookies.get("cookieValue"), "getting the cookie value");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: cookies.getAll()
    };
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
    return (
      <div>
        {this.state.cookie[0]}
        <Button onClick={this.onsubmit}>test button</Button>
      </div>
    );
  }
}
export default App;
