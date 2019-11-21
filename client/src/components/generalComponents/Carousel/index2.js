import React, { Component } from "react";
import Container from "./Container";
import Button from "./Button";



class Carousel extends Component {
  render() {
    return (
      <div
        className="carousel slide"
        data-ride="carousel"
      >
        <Container>
          <Button dataSlide="prev" />
          <Button dataSlide="next" />
        </Container>

      </div>
    );
  }
}
