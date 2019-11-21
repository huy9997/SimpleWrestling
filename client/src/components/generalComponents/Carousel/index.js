import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'
import TournamentCard from "../TournamentCard";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const data = require("../../../test/fakerData.json");

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };

    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      adaptiveHeight: true,
      lazyLoad: 'ondemand'
    };
  }

  getImages = async () => {
    await axios.get("/getTournamentCardData")
        .then( tournamentCards => {
          this.setState({
            cards: tournamentCards
          })
        })
        .catch( error => {
          console.log(error);
        })
  };

  componentDidMount() {
    this.setState({
      cards: data
    });
  }

  render() {
    return (
      <Slider {...this.settings} >
        {this.state.cards.map((card, key) => {
          return (
            <TournamentCard
              imgURL={card.image_url}
              key={key}
              date={card.date}
              title={card.title}
              tournamentID={card.tournament_id}
            />
          );
        })}
      </Slider>
    );
  }
}
