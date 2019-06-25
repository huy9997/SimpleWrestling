import React, { Component } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Card from "../components/generalComponents/card";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      search: "",
      modal: false
    };
    this.onchange = this.onchange.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/getTournamentCardData/tournament")
      .then(tournamentCardData => {
        console.log(tournamentCardData.data, "component mount");
        this.setState({
          cards: tournamentCardData.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onchange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    axios
      .post("api/searchTournament", {
        search: this.state.search
      })
      .then(response => {
        this.setState({ cards: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  onClick = id => {
    this.setState({ modal: true });
    console.log(id, "pressed from the tournament page");
  };

  render() {
    const { cards, search } = this.state;
    return (
      <Container component="main" display="flex" flexdirection="column">
        <Box display="flex" flexdirection="row-reverse">
          <Button href="/createtournament"> Create Tournament</Button>
        </Box>
        <Input
          name="search"
          id="search"
          placeholder="search"
          onChange={e => this.onchange(e)}
          value={search}
        />
        <Box display="flex" flexdirection="row" flexWrap="wrap">
          {cards.map(cardData => (
            <Box m={1} key={cardData.id}>
              <Card
                title={cardData.name}
                date={cardData.tournament_start_date}
                imgURL={
                  "https://s3.amazonaws.com/sidearm.sites/hawkeyesports.com/images/2018/3/20/180317NCAA0898.JPG"
                }
                onClick={this.onClick}
                id={cardData.id}
              />
            </Box>
          ))}
        </Box>
      </Container>
    );
  }
}
export default App;
