import React, { Component } from "react";
import "./Menu.css";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

class Menu extends Component {
  state = {
    scrollUp: false,
    scrolledLimit: false,
  };

  componentDidMount() {
    var lastScroll = 0;
    window.addEventListener("scroll", () => {
      var y = window.scrollY;
      if (lastScroll > y) {
        lastScroll = y;
        this.setState({ scrollUp: true });
      } else {
        lastScroll = y;
        this.setState({ scrollUp: false });
      }

      if (y >= 36) {
        this.setState({ scrolledLimit: true });
      } else {
        this.setState({ scrolledLimit: false });
      }
    });
  }

  render() {
    return (
      <div
        className={
          this.state.scrollUp === false && this.state.scrolledLimit === true
            ? "menu"
            : "menu menu--up"
        }
      >
        <div className="menu__container-logo">
          <img
            className="menu__logo"
            src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
            alt=""
          ></img>
        </div>
        <ul className="menu__navBar">
          <li
            className={
              this.state.height === 0 ? "menu__option-1" : "menu__option-none"
            }
          >
            New Releases
            <div className="menu__list-container">
              <div className="menu__list-items">
                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">Shop All New Arrivals</li>
                  <li className="menu__text">SNKRS Launch Calendar</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Member Access</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">Shop All New Arrivals</li>
                  <li className="menu__text">SNKRS Launch Calendar</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Member Access</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">Shop All New Arrivals</li>
                  <li className="menu__text">SNKRS Launch Calendar</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Member Access</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">Shop All New Arrivals</li>
                  <li className="menu__text">SNKRS Launch Calendar</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Member Access</li>
                </ul>
              </div>
            </div>
          </li>
          <li
            className={
              this.state.height === 0 ? "menu__option-2" : "menu__option-none"
            }
          >
            Men
            <div className="menu__list-container">
              <div className="menu__list-items">
                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">Shop All New Arrivals</li>
                  <li className="menu__text">SNKRS Launch Calendar</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Member Access</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">Shop All New Arrivals</li>
                  <li className="menu__text">SNKRS Launch Calendar</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Member Access</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">Shop All New Arrivals</li>
                  <li className="menu__text">SNKRS Launch Calendar</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Member Access</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">Shop All New Arrivals</li>
                  <li className="menu__text">SNKRS Launch Calendar</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Member Access</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="menu__option-3">Women</li>
          <li className="menu__option-4">Kids</li>
          <li className="menu__option-5">Customize</li>
          <li className="menu__option-6">Sale</li>
        </ul>

        <div className="menu__container-search">
          <div className="menu_search">
            <SearchIcon className="menu__search-icon" />
            <input
              className="menu__search-input"
              type="text"
              placeholder="Search"
            />
          </div>

          <FavoriteBorderIcon className="menu__icon" />

          <LocalMallOutlinedIcon className="menu__icon" />
        </div>
      </div>
    );
  }
}

export default Menu;
