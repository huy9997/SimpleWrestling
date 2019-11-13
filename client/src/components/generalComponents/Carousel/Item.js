import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carousel-item active">
        <img className="d-block w-100" src={this.props.imageUrl} alt={this.props.index} />
      </div>
    );
  }
}
