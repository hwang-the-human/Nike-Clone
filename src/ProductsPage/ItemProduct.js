import React from "react";
import "./ItemProduct.css";

function ItemProduct() {
  return (
    <div className="itemProduct">
      <img
        className="itemProduct__image"
        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d484a9b0-010b-443d-bd70-c065712f1527/air-force-1-shadow-womens-shoe-kTgn9J.jpg"
        alt=""
      ></img>
      <p className="itemProduct__title">Nike Air Force 1 Shadow</p>
      <p className="itemProduct__text">Women's Shoe</p>
      <p className="itemProduct__text">1 Color</p>
      <p className="itemProduct__price">$120</p>
    </div>
  );
}

export default ItemProduct;
