import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__container-logo">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
          alt=""
        />

        <img
          className="header__logo header__logo-second"
          src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Icon-Logo.wine.svg"
          alt=""
        />
      </div>

      <div className="header__nav">
        <span className="header__option"> Help</span>
        <span className="header__option">Join Us</span>
        <span className="header__option header__option--last">Sign In</span>
      </div>
    </div>
  );
}

export default Header;
