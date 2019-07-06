import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      tournamentID: ""
    };
  }
  componentDidMount() {
    this.setState({ tournamentID: this.props.location.state.tournamentID });
  }

  render() {
    const { tournamentID } = this.state;
    return <div>tournament id is {tournamentID}</div>;
  }
}
export default App;
