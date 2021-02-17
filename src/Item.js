import React from "react";
import "./Item.css";

function Item() {
  return (
    <div className="item">
      <img
        className="item__image"
        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6a63bf13-d648-4da1-9cf8-652fdb73a0d7/air-zoom-superrep-2-mens-hiit-class-shoe-v6KQ5j.jpg"
        alt=""
      ></img>
      <div className="item__description">
        <p className="item__title">
          Nike Air Zoom SuperRep 2<span className="item__price">$100</span>
        </p>
        <p className="item__text">Men's HIIT Class Shoe</p>
      </div>
    </div>
  );
}

export default Item;
