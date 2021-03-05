import React, { useState, useEffect, useRef } from "react";
import "./Filters.css";
import ArrowIcon from "./ArrowIcon.js";

function Filters(props) {
  const [height, setHeight] = useState("");
  const refFilters = useRef(null);
  const state = props.state;
  const setState = props.setState;
  const lengthOfOptions = Object.keys(state).slice(3).length;

  function handleCheckMark(key) {
    if (state[key].check) {
      setState({ ...state, [key]: { ...state[key], check: false } });
    } else {
      setState({ ...state, [key]: { ...state[key], check: true } });
    }
  }

  useEffect(() => {
    const getHeight = refFilters.current.clientHeight;
    if (height === "") {
      setHeight(getHeight + "px");
      console.log(height);
    }
  }, [height]);

  return (
    <div
      ref={refFilters}
      className="filters"
      style={{ height: state.show.check ? height : "30px" }}
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
      {lengthOfOptions >= 4 && (
        <div className="filters__More" onClick={() => handleCheckMark("more")}>
          {state.more.check ? "- Less" : "+ More"}
        </div>
      )}
    </div>
  );
}

export default Filters;
