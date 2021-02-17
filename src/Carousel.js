import React, { Component } from "react";
import "./Carousel.css";
import Item from "./Item.js";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.container_input = React.createRef();
  }

  handleScroll = (direction) => {
    this.container_input.current.scrollBy({
      left: direction,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div className="carousel">
        <p className="carousel__title">The Latest & Greatest</p>
        <div className="carousel__container" ref={this.container_input}>
          <div
            className="carousel__button_container"
            onClick={() => this.handleScroll(-450)}
          >
            <ArrowBackIosIcon
              className="carousel__button"
              style={{ fontSize: 16 }}
            />
          </div>

          <div
            className="carousel__button_container carousel__button_container--right"
            onClick={() => this.handleScroll(450)}
          >
            <ArrowForwardIosIcon
              className="carousel__button"
              style={{ fontSize: 16 }}
            />
          </div>

          <div className="carousel__hideScrollbar"> </div>

          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}

export default Carousel;
