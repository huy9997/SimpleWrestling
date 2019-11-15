import React from "react";
import { FixedSizeList as List } from "react-window";
import Item from "./Item";

const getImages = async () => {
  let response = await fetch("/getTournamentCardData");
  return await response.json();
};

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    // getImages().then(url => {
    //   this.setState({
    //     images: [...this.state.images, require(url)]
    //   });
    // });
    this.setState({
      images: this.props.images
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
