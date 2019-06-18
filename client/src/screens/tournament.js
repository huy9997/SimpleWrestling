import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Button href="/createTournament">create a tournament</Button>
        tournament page
      </div>
    );
  }
}
export default App;
