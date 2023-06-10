import React from "react";
import "./ItemHome.css";

function ItemHome() {
  return (
    <div className="itemHome">
      <img
        className="itemHome__image"
        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6a63bf13-d648-4da1-9cf8-652fdb73a0d7/air-zoom-superrep-2-mens-hiit-class-shoe-v6KQ5j.jpg"
        alt=""
      ></img>
      <div className="itemHome__description">
        <p className="itemHome__title">
          Nike Air Zoom SuperRep 2<span className="itemHome__price">$100</span>
        </p>
        <p className="itemHome__text">Men's HIIT Class Shoe</p>
      </div>
    </div>
  );
}

export default ItemHome;
