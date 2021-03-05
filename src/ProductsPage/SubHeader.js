import React, { useState } from "react";
import "./SubHeader.css";
import FilterIcon from "./FilterIcon.js";
import ArrowIcon from "./ArrowIcon.js";

function SubHeader() {
  const [showFilters, setShowFilters] = useState(true);
  const [showSort, setShowSort] = useState(false);

  function handleShowSort() {
    if (showSort) {
      setShowSort(false);
    } else {
      setShowSort(true);
    }
  }

  function handleShowFilters() {
    if (showFilters) {
      setShowFilters(false);
    } else {
      setShowFilters(true);
    }
  }
  return (
    <div className="subHeader">
      <p className="subHeader__title">New Releases(723)</p>
      <div className="subHeader__container">
        <div className="subHeader__filters-box" onClick={handleShowFilters}>
          <p className="subHeader__text">
            {showFilters ? "Hide" : "Show"} Filters
          </p>
          <FilterIcon showFilters={showFilters} />
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
