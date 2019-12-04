import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        className={"carousel-control-" + this.props.dataSlide + ""}
        href="#carouselExampleControls"
        role="button"
        data-slide={this.props.dataSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
    );
  }
}
