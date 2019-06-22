import React, { Component } from "react";
import axios from "axios";
import Card from "../components/generalComponents/card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: {}
    };
  }
  card = {
    date: Date,
    title: "",
    picture: ""
  };
  componentDidMount() {
    axios
      .get("/api/getTournamentCardData")
      .then(tournamentCardData => {
        console.log(tournamentCardData.data[1]);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}
export default App;
