import React, { useState } from "react";
import "./Shop.css";
import ItemProduct from "./ItemProduct.js";
import Filters from "./Filters.js";
import ColorCategory from "./ColorCategory.js";

function Shop(props) {
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

  const [color, setColor] = useState({
    title: "Color",
    show: true,
    color: "",
  });

  const [sports, setSports] = useState({
    title: "Sports & Activities",
    show: { check: true },
    more: { check: false },
    lifestyle: { title: "Lifestyle", check: false },
    running: { title: "Running", check: false },
    training: { title: "Training & Gym", check: false },
    yoga: { title: "Yoga", check: false },
    basketball: { title: "Basketball", check: false },
    football: { title: "Football", check: false },
    soccer: { title: "Soccer", check: false },
    baseball: { title: "Baseball", check: false },
    golf: { title: "Golf", check: false },
    skateboarding: { title: "Skateboarding", check: false },
    tennis: { title: "Tennis", check: false },
    track: { title: "Track & Field", check: false },
    lacrosse: { title: "Lacrosse", check: false },
    walking: { title: "Walking", check: false },
    volleyball: { title: "Volleyball", check: false },
    swimming: { title: "Swimming", check: false },
    hiking: { title: "Hiking", check: false },
    hockey: { title: "Hockey", check: false },
    dance: { title: "Dance", check: false },
    cheerleading: { title: "Cheerleading", check: false },
    high: { title: "High-Intensity Interval Training", check: false },
  });

  const [athletes, setAthletes] = useState({
    title: "Athletes",
    show: { check: true },
    more: { check: false },
    leBron: { title: "LeBron James", check: false },
    tiger: { title: "Tiger Woods", check: false },
    kyrie: { title: "Kyrie Irving", check: false },
    kevin: { title: "Kevin Durant", check: false },
    rafael: { title: "Rafael Nadal", check: false },
    sue: { title: "Sue Bird", check: false },
    sabrina: { title: "Sabrina Ionescu", check: false },
    stefan: { title: "Stefan Janoski", check: false },
    giannis: { title: "Giannis Antetokounmpo", check: false },
    paul: { title: "Paul George", check: false },
    russell: { title: "Russell Westbrook", check: false },
    shane: { title: "Shane O'Neill", check: false },
  });

  const [brand, setBrand] = useState({
    title: "Brand",
    show: { check: true },
    more: { check: false },
    sportswear: { title: "Nike Sportswear", check: false },
    jordan: { title: "Jordan", check: false },
    you: { title: "Nike By You", check: false },
    converse: { title: "Converse", check: false },
    nikeLab: { title: "NikeLab", check: false },
    acg: { title: "ACG", check: false },
    pro: { title: "Nike Pro", check: false },
  });

  const [icon, setIcon] = useState({
    title: "Icon",
    show: { check: true },
    more: { check: false },
    airForce: { title: "Air Force 1", check: false },
    airMax: { title: "Air Max", check: false },
    blazer: { title: "Blazer", check: false },
    element: { title: "Element", check: false },
    elite: { title: "Elite", check: false },
    epic: { title: "Epic Luxe", check: false },
    internationalist: { title: "Internationalist", check: false },
    mercurial: { title: "Mercurial", check: false },
    metcon: { title: "Metcon", check: false },
    free: { title: "Nike Free RN", check: false },
    pegasus: { title: "Pegasus", check: false },
    phantom: { title: "Phantom", check: false },
    presto: { title: "Presto", check: false },
    tempo: { title: "Tempo", check: false },
    tiempo: { title: "Tiempo", check: false },
    windrunner: { title: "Windrunner", check: false },
    superRep: { title: "SuperRep", check: false },
  });

  const [collaborator, setCollaborator] = useState({
    title: "Collaborator",
    show: { check: true },
    more: { check: false },
    collaborator: { title: "Undercover", check: false },
  });

  const [bestFor, setBestFor] = useState({
    title: "Best For",
    show: { check: true },
    more: { check: false },
    warm: { title: "Warm Weather", check: false },
    wet: { title: "Wet Weather Conditions", check: false },
    cold: { title: "Cold Weather", check: false },
    dry: { title: "Dry Weather Conditions", check: false },
    low: { title: "Low-Impact Activities", check: false },
    high: { title: "High-Impact Activities", check: false },
  });

  return (
    <div className="shop">
      <div
        className={
          props.showFilters
            ? "shop__side-menu"
            : "shop__side-menu shop__side-menu--hidden"
        }
        ref={props.shop__sideMenu}
      >
        <div className="shop__side-menu-container">
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

          <ColorCategory state={color} setState={setColor} />

          <Filters state={sports} setState={setSports} />
          <Filters state={athletes} setState={setAthletes} />
          <Filters state={brand} setState={setBrand} />
          <Filters state={icon} setState={setIcon} />
          <Filters state={collaborator} setState={setCollaborator} />
          <Filters state={bestFor} setState={setBestFor} />
        </div>
      </div>

      <div className="shop__items">
        <div className="shop__container">
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
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
