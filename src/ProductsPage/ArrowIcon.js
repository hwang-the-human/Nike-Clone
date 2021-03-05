import React from "react";
import "./ArrowIcon.css";

function ArrowIcon(props) {
  return (
    <div className="arrowIcon">
      <div
        className={
          props.arrowUp
            ? "arrowIcon__left"
            : "arrowIcon__left arrowIcon__rotate135"
        }
      ></div>
      <div
        className={
          props.arrowUp
            ? "arrowIcon__right"
            : "arrowIcon__right arrowIcon__rotate-135"
        }
      ></div>
    </div>
  );
}

export default ArrowIcon;
