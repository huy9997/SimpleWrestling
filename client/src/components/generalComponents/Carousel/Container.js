import React from "react";
import { FixedSizeList as List } from "react-window";
import Item from "./Item";
import TournamentCard from "../TournamentCard";
const data = require("../../../test/fakerData.json");

const getImages = async () => {
  let response = await fetch("/getTournamentCardData");
  return await response.json();
};

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      className: ""
    };
  }

  componentDidMount() {
    // getImages().then(url => {
    //   this.setState({
    //     images: [...this.state.images, require(url)]
    //   });
    // });
    this.setState({
      cards: data
    });
  }

  className = "";

  render() {
    return this.state.cards.map((card, key) => {
      key === 0
        ? (this.className = "carousel-inner active")
        : (this.className = "carousel-inner");
      return (
        <div className={this.className}>
          <TournamentCard
            imgURL={card.image_url}
            key={key}
            date={card.date}
            title={card.title}
            tournamentID={card.tournament_id}
          />
        </div>
      );
    });
  }
}
