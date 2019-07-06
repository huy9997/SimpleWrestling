import React, { Component } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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
      wrestlingLevel: "",
      wrestlersBracketIDs: []
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
        this.setState({
          wrestlingLevel: tournamentLevel.data[0].wrestling_level
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  onClickBracket = weightClass => {
    const { tournamentID } = this.state;
    //getting bracket data
    console.log(tournamentID, " tournament ID", weightClass, "weightclass");
    axios
      .get("api/getTournamentSignUps", {
        params: {
          tournament_id: tournamentID,
          tournament_weight_class: weightClass
        }
      })
      .then(weightClassBracket => {
        this.setState({ wrestlersBracketIDs: weightClassBracket });
        console.log(weightClassBracket);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { tournamentID, wrestlingLevel } = this.state;

    return (
      <Container>
        tournament id is {tournamentID}
        <Box display="flex" flexdirection="row" flexWrap="wrap">
          {wrestlingLevel == "Varcity" &&
            highschoolWeightClass.map(weightClassButtons => (
              <Box m={2} key={weightClassButtons.value}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    this.onClickBracket(weightClassButtons);
                  }}
                >
                  {weightClassButtons}
                </Button>
              </Box>
            ))}
        </Box>
      </Container>
    );
  }
}
export default App;
