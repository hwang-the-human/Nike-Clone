import React from "react";
import "./BottomList.css";

function BottomList() {
  return (
    <div className="bottomList">
      <div className="bottomList__container">
        <img
          className="bottomList__image"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1328,c_limit/a815b33e-a527-482a-8e1e-77bbfb7cf957/nike-just-do-it.jpg"
          alt=""
        ></img>
        <div className="bottomList__buttons">
          <div className="bottomList__button">Join Us</div>
          <div className="bottomList__button">Sign In</div>
        </div>

        <div className="bottomList__menu">
          <ul className="bottomList__column">
            <li className="bottomList__title">Featured</li>
            <li className="bottomList__text">Air Force 1</li>
            <li className="bottomList__text">Jordan 1</li>
            <li className="bottomList__text">Air Max 2090</li>
            <li className="bottomList__text">Air Max 270</li>
            <div className="bottomList__disappear">
              <li className="bottomList__text">Air Max 97</li>
              <li className="bottomList__text">Air Max 90</li>
              <li className="bottomList__text">Blazer</li>
              <li className="bottomList__text">React</li>
              <li className="bottomList__text">Pegasus</li>
            </div>
          </ul>

          <ul className="bottomList__column">
            <li className="bottomList__title">Shoes</li>
            <li className="bottomList__text">All Shoes</li>
            <li className="bottomList__text">Jordan Shoes</li>
            <li className="bottomList__text">Running Shoes</li>
            <li className="bottomList__text">Basketball Shoes</li>
            <div className="bottomList__disappear">
              <li className="bottomList__text">Tennis Shoes</li>
              <li className="bottomList__text">Training Shoes</li>
              <li className="bottomList__text">Custom Shoes</li>
              <li className="bottomList__text">Sale Shoes</li>
              <li className="bottomList__text">Soccer Cleats</li>
            </div>
          </ul>

          <ul className="bottomList__column">
            <li className="bottomList__title">Clothing</li>
            <li className="bottomList__text">All Clothing</li>
            <li className="bottomList__text">Tops & T-Shirts</li>
            <li className="bottomList__text">Shorts</li>
            <li className="bottomList__text">Hoodies & Pullovers</li>
            <div className="bottomList__disappear">
              <li className="bottomList__text">Joggers & Sweatpants</li>
              <li className="bottomList__text">Sports Bras</li>
              <li className="bottomList__text">Pants & Tights</li>
              <li className="bottomList__text">Socks</li>
              <li className="bottomList__text">Yoga</li>
              <li className="bottomList__text">NikeLab</li>
              <li className="bottomList__text">Plus Size</li>
              <li className="bottomList__text">Big & Tall</li>
              <li className="bottomList__text">Luxe Leggings</li>
              <li className="bottomList__text">Sale Clothing</li>
            </div>
          </ul>

          <ul className="bottomList__column">
            <li className="bottomList__title">Kids'</li>
            <li className="bottomList__text">Infant & Toddler Shoes</li>
            <li className="bottomList__text">Kids' Basketball Shoes</li>
            <li className="bottomList__text">Kids' Running Shoes</li>
            <li className="bottomList__text">Kids' Jordan Shoes</li>
            <div className="bottomList__disappear">
              <li className="bottomList__text">Kids' Clothing</li>
              <li className="bottomList__text">Kids' Backpacks</li>
              <li className="bottomList__text">Kids' Socks</li>
              <li className="bottomList__text">Kids' Sale</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BottomList;
