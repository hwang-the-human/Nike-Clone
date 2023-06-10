import React, { useState, useEffect, useRef } from "react";
import "./ColorCategory.css";
import ArrowIcon from "./ArrowIcon.js";

function ColorCategory(props) {
  const [height, setHeight] = useState(null);
  const refColorCategory = useRef(null);
  const state = props.state;
  const setState = props.setState;

  function handleShow() {
    if (state.show) {
      setState({ ...state, show: false });
    } else {
      setState({ ...state, show: true });
    }
  }

  function handleColor(color) {
    setState({ ...state, color: color });
  }

  useEffect(() => {
    if (height === null) {
      var getHeight = refColorCategory.current.clientHeight;
      setHeight(getHeight);
    }
  }, [height]);

  return (
    <div
      className="colorCategory"
      ref={refColorCategory}
      style={{ height: state.show ? height + "px" : "50px" }}
    >
      <div className="colorCategory__title-box" onClick={handleShow}>
        <p className="colorCategory__title">{state.title}</p>
        <ArrowIcon arrowUp={state.show} />
      </div>
      <div className="colorCategory__color-box">
        <div
          className="colorCategory__color-container"
          onClick={() => () => handleColor("Purple")}
        >
          <div className="colorCategory__color colorCategory__purple"></div>
          <p className="colorCategory__text">Purple</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("Black")}
        >
          <div className=" colorCategory__color colorCategory__black"></div>
          <p className="colorCategory__text">Black</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("Red")}
        >
          <div className="colorCategory__color colorCategory__red"></div>
          <p className="colorCategory__text">Red</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("Orange")}
        >
          <div className=" colorCategory__color colorCategory__orange"></div>
          <p className="colorCategory__text">Orange</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("Blue")}
        >
          <div className=" colorCategory__color colorCategory__blue"></div>
          <p className="colorCategory__text">Blue</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("White")}
        >
          <div className=" colorCategory__color colorCategory__white"></div>
          <p className="colorCategory__text">White</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("Brown")}
        >
          <div className=" colorCategory__color colorCategory__brown"></div>
          <p className="colorCategory__text">Brown</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("Green")}
        >
          <div className=" colorCategory__color colorCategory__green"></div>
          <p className="colorCategory__text">Green</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("Yellow")}
        >
          <div className=" colorCategory__color colorCategory__yellow"></div>
          <p className="colorCategory__text">Yellow</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("Multi-Color")}
        >
          <div className=" colorCategory__color colorCategory__multi"></div>
          <p className="colorCategory__text">Multi-Color</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("Grey")}
        >
          <div className=" colorCategory__color colorCategory__grey"></div>
          <p className="colorCategory__text">Grey</p>
        </div>
        <div
          className="colorCategory__color-container"
          onClick={() => handleColor("Pink")}
        >
          <div className=" colorCategory__color colorCategory__pink"></div>
          <p className="colorCategory__text">Pink</p>
        </div>
      </div>
    </div>
  );
}

export default ColorCategory;
