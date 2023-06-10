import React, { useState, useEffect, useRef } from "react";
import "./SubHeader.css";
import FilterIcon from "./FilterIcon.js";
import ArrowIcon from "./ArrowIcon.js";

function SubHeader(props) {
  const [showSort, setShowSort] = useState(false);
  const subHeader = useRef(null);
  const subHeader__title = useRef(null);

  useEffect(() => {
    var lastScroll = 0;
    window.addEventListener("scroll", () => {
      var y = window.scrollY;
      if (y > 171) {
        subHeader__title.current.style.transform = "scale(0.8)";
        if (lastScroll > y) {
          subHeader.current.style.transform = "translateY(60px)";
          props.shop__sideMenu.current.style.transform = "translateY(60px)";
          lastScroll = y;
        } else {
          subHeader.current.style.transform = "translateY(0)";
          props.shop__sideMenu.current.style.transform = "translateY(0)";
          lastScroll = y;
        }
      } else {
        subHeader__title.current.style.transform = "scale(1)";
        subHeader.current.style.transform = "translateY(0)";
        props.shop__sideMenu.current.style.transform = "translateY(0)";
      }
    });
  }, [props.shop__sideMenu]);

  function handleShowSort() {
    if (showSort) {
      setShowSort(false);
    } else {
      setShowSort(true);
    }
  }

  function handleShowFilters() {
    if (props.showFilters) {
      props.setShowFilters(false);
    } else {
      props.setShowFilters(true);
    }
  }
  return (
    <div className="subHeader" ref={subHeader}>
      <p className="subHeader__title" ref={subHeader__title}>
        New Releases(723)
      </p>
      <div className="subHeader__container">
        <div className="subHeader__filters-box" onClick={handleShowFilters}>
          <p className="subHeader__text">
            {props.showFilters ? "Hide" : "Show"} Filters
          </p>
          <FilterIcon showFilters={props.showFilters} />
        </div>
        <div className="subHeader__sort-box" onClick={handleShowSort}>
          <p className="subHeader__text subHeader__text">Sort By</p>
          <ArrowIcon arrowUp={showSort} />
        </div>
        <div
          className={
            showSort
              ? "subHeader__menu"
              : "subHeader__menu subHeader__menu--hidden"
          }
        >
          <div className="subHeader__text-box">
            <p className="subHeader__sub-text">Featured</p>
            <p className="subHeader__sub-text">Newest</p>
            <p className="subHeader__sub-text">Price: High-Low</p>
            <p className="subHeader__sub-text">Price: Low-High</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
