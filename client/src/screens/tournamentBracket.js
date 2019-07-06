import React, { Component } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";

const highschoolWeightClass = [
  106,
  113,
  120,
  126,
  132,
  138,
  145,
  152,
  160,
  170,
  182,
  195,
  220,
  285
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      tournamentID: "",
      wrestlingLevel: ""
    };
  }
  componentDidMount() {
    this.setState({ tournamentID: this.props.location.state.tournamentID });
    //send tournamentid in the get request
    console.log(this.props.location.state.tournamentID, "tournamentid");
    axios
      .get("api/tournamentBrackets/tournamentLevel", {
        params: {
          tournament_id: this.props.location.state.tournamentID
        }
      })
      .then(tournamentLevel => {
        console.log(tournamentLevel.data[0].wrestling_level);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { tournamentID } = this.state;

    return <Container>tournament id is {tournamentID}</Container>;
  }
}
export default App;
