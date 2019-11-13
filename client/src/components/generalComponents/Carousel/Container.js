import React from "react";
import { FixedSizeList as List } from "react-window";
import Item from "./Item";

async function getImages() {
  let response = await fetch("");
  return await response.json();
}

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    getImages().then(url => {
      this.setState({
        images: [...this.state.images, require(url)]
      });
    });
  }

  render() {
    return (
      <div className="carousel-inner">
        {this.state.images.map((image, index) => {
          return <Item imageUrl={image} key={index} index={index} />;
        })}
      </div>
    );
  }
}
