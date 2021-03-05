import "./Header.css";
import Login from "./Login.js";
import React, { useState } from "react";

function Header() {
  const [opened, setOpened] = useState(false);
  const [helpOpened, setHelpOpened] = useState(false);

  function handleOpen() {
    setOpened(true);
  }

  function handleClose(e) {
    if (e.currentTarget === e.target) {
      setOpened(false);
    }
  }

  return (
    <div className="header">
      <div className="header__container-logo">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
          alt=""
        />

        <img
          className="header__logo header__logo--second"
          src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Icon-Logo.wine.svg"
          alt=""
        />
      </div>
      <div className="header__nav">
        <span
          className="header__option"
          onMouseEnter={() => setHelpOpened(true)}
          onMouseLeave={() => setHelpOpened(false)}
        >
          <p>Help</p>
          <ul
            className={
              helpOpened
                ? "header__help-nav header__help-nav--open"
                : "header__help-nav header__help-nav--close"
            }
          >
            <li className="header__title">Help</li>
            <li className="header__text">Order Status</li>
            <li className="header__text">Shipping & Delivery</li>
            <li className="header__text">Returns</li>
            <li className="header__text">Contact Us</li>
            <li className="header__text">Privacy Policy</li>
            <li className="header__text">Terms of Use</li>
            <li className="header__text">Send Us Feedback</li>
          </ul>
        </span>
        <span className="header__border">|</span>
        <span className="header__option">
          <p>Join Us</p>
        </span>
        <span className="header__border">|</span>
        <span className="header__option header__option--last">
          <p onClick={handleOpen}>Sign In</p>
        </span>
      </div>
      <Login handleClose={handleClose} opened={opened} />
    </div>
  );
}

export default Header;
