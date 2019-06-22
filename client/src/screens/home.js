import React, { Component } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Card from "../components/generalComponents/card";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/getTournamentCardData")
      .then(tournamentCardData => {
        this.setState({
          cards: tournamentCardData.data
        });
        console.log(this.state.cards, "state");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { cards } = this.state;
    return (
      <Container component="main" display="flex" flexDirection="column">
        <Box height="75%">Height 75%</Box>
        <Box display="flex">
          {cards.map(option => (
            <Card
              title={option.name}
              date={option.tournament_start_date}
              imgURL={
                "https://s3.amazonaws.com/sidearm.sites/hawkeyesports.com/images/2018/3/20/180317NCAA0898.JPG"
              }
            />
          ))}
        </Box>
      </Container>
    );
  }
}
export default App;
