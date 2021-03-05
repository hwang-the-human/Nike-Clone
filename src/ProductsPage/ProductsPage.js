import React from "react";
import "./ProductsPage.css";
import Ticker from "./TickerProducts.js";
import SubHeader from "./SubHeader.js";
import Shop from "./Shop.js";

function ProductsPages() {
  return (
    <div className="productsPage">
      <Ticker />
      <SubHeader />
      <Shop />
    </div>
  );
}

export default ProductsPages;
