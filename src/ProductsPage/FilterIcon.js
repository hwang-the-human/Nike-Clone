import React from "react";
import "./FilterIcon.css";

function FilterIcon(props) {
  return (
    <div className="filterIcon">
      <div
        className={
          props.showFilters
            ? "filterIcon__top filterIcon__top--left"
            : "filterIcon__top"
        }
      ></div>
      <div
        className={
          props.showFilters
            ? "filterIcon__bottom filterIcon__bottom--right"
            : "filterIcon__bottom"
        }
      ></div>
    </div>
  );
}

export default FilterIcon;
