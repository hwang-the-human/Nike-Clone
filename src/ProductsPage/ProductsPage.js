import React, { useState, useRef } from "react";
import "./ProductsPage.css";
import TickerProducts from "./TickerProducts.js";
import SubHeader from "./SubHeader.js";
import Shop from "./Shop.js";

function ProductsPages() {
  const [showFilters, setShowFilters] = useState(true);
  const shop__sideMenu = useRef(null);

  return (
    <div className="productsPage">
      <TickerProducts />
      <SubHeader
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        shop__sideMenu={shop__sideMenu}
      />
      <Shop showFilters={showFilters} shop__sideMenu={shop__sideMenu} />
    </div>
  );
}

export default ProductsPages;
