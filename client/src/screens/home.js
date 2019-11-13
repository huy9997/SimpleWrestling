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
      .get("/api/getTournamentCardData")
      .then(tournamentCardData => {
        this.setState({
          cards: tournamentCardData.data
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
        <Box display="flex" flexDirection="row">
          {cards.map(card => (
            <Box m={1} width="100%">
              <Card
                title={card.name}
                date={card.tournament_start_date}
                imgURL={
                  "https://s3.amazonaws.com/sidearm.sites/hawkeyesports.com/images/2018/3/20/180317NCAA0898.JPG"
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    );
  }
}
export default App;
