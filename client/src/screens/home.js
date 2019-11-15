import React, { Component } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Carousel from "../components/generalComponents/Carousel";
import Card from "../components/generalComponents/card";
import Container from "@material-ui/core/Container";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    axios
      .get("/getTournamentCardData")
      .then(tournamentCard => {
        this.setState({
          cards: tournamentCard
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    var cards = this.state.cards;
    return (
      <Container component="main" display="flex" flexDirection="column">
        <Carousel />

      </Container>
    );
  }
}
export default App;
