import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  render() {
    console.log(this.props.location.state.tournamentID);
    return <div>tournament id is </div>;
  }
}
export default App;
