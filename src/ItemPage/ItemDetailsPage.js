import React from "react";
import "./ItemDetailsPage.css";
import TickerProducts from "../ProductsPage/TickerProducts.js";
import Images from "./Images.js";
import SideMenu from "./SideMenu.js";

function ItemDetailsPage() {
  return (
    <div className="itemDetailsPage">
      <TickerProducts />
      <div className="itemDetailsPage__container">
        <Images />
        <SideMenu />
      </div>
    </div>
  );
}

export default ItemDetailsPage;
