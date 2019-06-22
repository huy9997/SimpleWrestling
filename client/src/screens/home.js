import React, { Component } from "react";
import axios from "axios";
import Card from "../components/generalComponents/card";

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
      <div>
        {cards.map(option => (
          <Card
            title={option.name}
            date={option.tournament_start_date}
            image={option.tournament_logo}
          />
        ))}
      </div>
    );
  }
}
export default App;
