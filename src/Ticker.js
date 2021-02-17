import React from "react";
import "./Ticker.css";

function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__box">
        <div className="ticker__container">
          <p className="ticker__option-top">Save Up to 40%</p>
          <p className="ticker__option-bottom">Shop All Our New Markdowns</p>
        </div>
        <div className="ticker__container ticker__container--right">
          <p className="ticker__option-top">
            Free Shipping & 60-Day Free Returns
          </p>
          <p className="ticker__option-bottom">Join Now</p>
        </div>
      </div>
    </div>
  );
}

export default Ticker;
