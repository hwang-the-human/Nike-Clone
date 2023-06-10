import React, { useState, useEffect, useRef } from "react";
import "./Filters.css";
import ArrowIcon from "./ArrowIcon.js";

function Filters(props) {
  const [height, setHeight] = useState(null);
  const [moreHeight, setMoreHeight] = useState(30);
  const refFilters = useRef(null);
  const state = props.state;
  const setState = props.setState;
  const lengthOfOptions = Object.keys(state).slice(3).length;
  const optionHeight = (lengthOfOptions - 4) * 30;

  function handleCheckMark(key) {
    if (state[key].check) {
      setState({ ...state, [key]: { ...state[key], check: false } });
    } else {
      setState({ ...state, [key]: { ...state[key], check: true } });
    }
    if (key === "more") {
      if (state.more.check) {
        setHeight(height - optionHeight - 20);
      } else {
        setHeight(height + optionHeight + 20);
      }
    }
  }

  useEffect(() => {
    if (height === null) {
      var getHeight = refFilters.current.clientHeight;
      if (lengthOfOptions >= 4) {
        getHeight = getHeight - optionHeight;
      } else {
        getHeight = getHeight + 20;
      }
      setHeight(getHeight);
      setMoreHeight(optionHeight);
    }
  }, [height, lengthOfOptions, optionHeight]);

  return (
    <div
      ref={refFilters}
      className="filters"
      style={{ height: state.show.check ? height + "px" : "50px" }}
    >
      <div
        className="filters__title-box"
        onClick={() => handleCheckMark("show")}
      >
        <p className="filters__title">{state.title}</p>
        <ArrowIcon arrowUp={state.show.check} />
      </div>

      {Object.keys(state)
        .slice(3)
        .map((key) => (
          <div
            className="filters__option"
            key={key}
            onClick={() => handleCheckMark(key)}
          >
            <div
              className={
                !state[key].check
                  ? "filters__arrow-box"
                  : "filters__arrow-box filters__arrow-box--black"
              }
            >
              <div className="filters__arrow"></div>
            </div>
            <p className="filters__text">{state[key].title}</p>
          </div>
        ))}
      {lengthOfOptions > 4 && (
        <div
          className="filters__More"
          style={{
            transform: state.more.check
              ? "translateY(0)"
              : "translateY(-" + moreHeight + "px)",
          }}
          onClick={() => handleCheckMark("more")}
        >
          {state.more.check ? "- Less" : "+ More"}
        </div>
      )}
    </div>
  );
}

export default Filters;
