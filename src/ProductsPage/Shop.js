import React, { useState } from "react";
import "./Shop.css";
import ItemProduct from "./ItemProduct.js";
import Filters from "./Filters.js";

function Shop() {
  const [gender, setGender] = useState({
    title: "Gender",
    show: { check: true },
    more: { check: false },
    men: { title: "Men", check: false },
    women: { title: "Women", check: false },
    unisex: { title: "Unisex", check: false },
  });

  const [kids, setKids] = useState({
    title: "Kids",
    show: { check: true },
    more: { check: false },
    boys: { title: "Boys", check: false },
    girls: { title: "Girls", check: false },
  });

  const [price, setPrice] = useState({
    title: "Shop by Price",
    show: { check: true },
    more: { check: false },
    price0: { title: "$0 - $25", check: false },
    price25: { title: "$25 - $50", check: false },
    price50: { title: "$50 - $100", check: false },
    price100: { title: "$100 - $150", check: false },
    price150: { title: "Over $150", check: false },
  });

  return (
    <div className="shop">
      <div className="shop__side-menu">
        <div className="shop__category-box shop__menu">
          <p className="shop__title">Shoes</p>
          <p className="shop__title">Sports Bras</p>
          <p className="shop__title">Tops & T-Shirts</p>
          <p className="shop__title">Hoodies & Pullovers</p>
          <p className="shop__title">Jackets & Vests</p>
          <p className="shop__title">Pants & Tights</p>
          <p className="shop__title">Shorts</p>
          <p className="shop__title">
            Compression &<br />
            Baselayer
          </p>
          <p className="shop__title">Tracksuits</p>
          <p className="shop__title">Jumpsuits & Rompers</p>
          <p className="shop__title">Skirts & Dresses</p>
          <p className="shop__title">Surf & Swimwear</p>
          <p className="shop__title">Socks</p>
          <p className="shop__title">
            Accessories &<br />
            Equipment
          </p>
        </div>

        <Filters state={gender} setState={setGender} />
        <Filters state={kids} setState={setKids} />
        <Filters state={price} setState={setPrice} />
      </div>

      <div className="shop__items">
        <div className="shop__container">
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
        </div>
      </div>
    </div>
  );
}

export default Shop;
