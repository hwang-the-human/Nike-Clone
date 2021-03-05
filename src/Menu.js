import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import CloseIcon from "@material-ui/icons/Close";
import BackspaceIcon from "@material-ui/icons/Backspace";

class Menu extends Component {
  state = {
    inputText: "",
    scrollUp: false,
    scrolledLimit: false,
    optionOpened: false,
    searchOpened: false,
    animValid: true,
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

  handleOpen() {
    this.setState({ optionOpened: true });
  }

  handleClose() {
    this.setState({ optionOpened: false });
    this.setState({ animValid: true });
  }

  handleOpenSearch() {
    this.setState({ searchOpened: true });
    this.input.focus();
  }

  handleBackspace() {
    this.form.reset();
    this.input.focus();
    this.setState({ inputText: "" });
  }

  render() {
    const {
      searchOpened,
      animValid,
      optionOpened,
      scrollUp,
      scrolledLimit,
      inputText,
    } = this.state;

    return (
      <div
        className={
          scrollUp === false && scrolledLimit === true && optionOpened === false
            ? "menu"
            : searchOpened === true && scrolledLimit === false
            ? "menu menu--searchOpened"
            : "menu menu--up"
        }
      >
        <div className="menu__container">
          <ul
            className="menu__navBar"
            onMouseEnter={() => this.handleOpen()}
            onMouseLeave={() => this.handleClose()}
          >
            <li
              className="menu__option"
              onMouseLeave={() => this.setState({ animValid: false })}
            >
              <Link className="menu__option-title" to="/product">
                New Releases
              </Link>
              <div
                className={
                  animValid
                    ? "menu__list-container menu__list-1"
                    : "menu__list-container menu__list-1 menu__none"
                }
              >
                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">Shop All New Arrivals</li>
                  <li className="menu__text">SNKRS Launch Calendar</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Member Access</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">New For Men</li>
                  <li className="menu__text">Shoes</li>
                  <li className="menu__text">Clothing</li>
                  <li className="menu__text">Equipment</li>
                  <li className="menu__text">Shop All New</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">New For Women</li>
                  <li className="menu__text">Shoes</li>
                  <li className="menu__text">Clothing</li>
                  <li className="menu__text">Equipment</li>
                  <li className="menu__text">Shop All New</li>
                </ul>
                <ul className="menu__column">
                  <li className="menu__title">New For Kids</li>
                  <li className="menu__text">Boys Shoes</li>
                  <li className="menu__text">Boys Clothing</li>
                  <li className="menu__text">Girls Shoes</li>
                  <li className="menu__text">Girls Clothing</li>
                  <li className="menu__text">Shop All New</li>
                </ul>
              </div>
            </li>
            <li
              className="menu__option"
              onMouseLeave={() => this.setState({ animValid: false })}
            >
              <Link className="menu__option-title" to="/product">
                Men
              </Link>
              <div
                className={
                  animValid
                    ? "menu__list-container menu__list-2"
                    : "menu__list-container menu__none menu__list-2"
                }
              >
                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">New Releases</li>
                  <li className="menu__text">Best Sellers</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Trending Tech Fleece</li>
                  <li className="menu__text">World Tour Collection</li>
                  <li className="menu__text">BRS Collection</li>
                  <li className="menu__text">New Men's Big & Tall</li>
                  <li className="menu__text">Sale - Up to 40% Off</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Shoes</li>
                  <li className="menu__text">Lifestyle</li>
                  <li className="menu__text">Running</li>
                  <li className="menu__text">Basketball</li>
                  <li className="menu__text">Jordan</li>
                  <li className="menu__text">Training & Gym</li>
                  <li className="menu__text">Soccer</li>
                  <li className="menu__text">Golf</li>
                  <li className="menu__text">Track & Field</li>
                  <li className="menu__text">Skateboarding</li>
                  <li className="menu__text">Tennis</li>
                  <li className="menu__text">Baseball</li>
                  <li className="menu__text">Boots</li>
                  <li className="menu__text">Sandals & Slides</li>
                  <li className="menu__text">Shoes $100 & Under</li>
                  <li className="menu__text">All Shoes</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Clothing</li>
                  <li className="menu__text">Tops & T-Shirts</li>
                  <li className="menu__text">Shorts</li>
                  <li className="menu__text">Hoodies & Sweatshirts</li>
                  <li className="menu__text">Pants & Tights</li>
                  <li className="menu__text">Jackets & Vests</li>
                  <li className="menu__text">Swimwear</li>
                  <li className="menu__text">Polos</li>
                  <li className="menu__text">Nike Pro</li>
                  <li className="menu__text">Yoga</li>
                  <li className="menu__text">Socks & Underwear</li>
                  <li className="menu__text">Big & Tall</li>
                  <li className="menu__text">All Clothing</li>

                  <ul className="menu__column">
                    <li className="menu__title">Accessories & Equipment</li>
                    <li className="menu__text">Bags & Backpacks</li>
                    <li className="menu__text">Apple Watch Nike</li>
                    <li className="menu__text">Hats, Visors & Headbands</li>
                  </ul>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Shop Collection</li>
                  <li className="menu__text">Golf</li>
                  <li className="menu__text">Jordan</li>
                  <li className="menu__text">Soccer</li>
                  <li className="menu__text">Running</li>
                  <li className="menu__text">Basketball</li>
                  <li className="menu__text">Tennis</li>
                  <li className="menu__text">NikeLab</li>
                  <li className="menu__text">Training & Gym</li>
                  <li className="menu__text">Football</li>
                  <li className="menu__text">Baseball</li>
                  <li className="menu__text">Nike Sportswear</li>
                  <li className="menu__text">ACG</li>
                  <li className="menu__text">Skateboarding</li>
                  <li className="menu__text">Lacrosse</li>
                  <li className="menu__text">Fan Gear</li>
                  <li className="menu__text">Nike FlyEase</li>
                </ul>
              </div>
            </li>
            <li
              className="menu__option"
              onMouseLeave={() => this.setState({ animValid: false })}
            >
              <Link className="menu__option-title" to="/product">
                Women
              </Link>
              <div
                className={
                  animValid
                    ? "menu__list-container menu__list-3"
                    : "menu__list-container menu__none menu__list-3"
                }
              >
                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">New Releases</li>
                  <li className="menu__text">Best Sellers</li>
                  <li className="menu__text">Best of Air Max</li>
                  <li className="menu__text">Trending Tech Fleece</li>
                  <li className="menu__text">New Women's Plus Size</li>
                  <li className="menu__text">Cold Weather Gear</li>
                  <li className="menu__text">Sale - Up to 40% Off</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Shoes</li>
                  <li className="menu__text">Lifestyle</li>
                  <li className="menu__text">Running</li>
                  <li className="menu__text">Training & Gym</li>
                  <li className="menu__text">Basketball</li>
                  <li className="menu__text">Jordan</li>
                  <li className="menu__text">Soccer</li>
                  <li className="menu__text">Tennis</li>
                  <li className="menu__text">Track & Field</li>
                  <li className="menu__text">Sandals & Slides</li>
                  <li className="menu__text">Skateboarding</li>
                  <li className="menu__text">Softball</li>
                  <li className="menu__text">Shoes $100 & Under</li>
                  <li className="menu__text">All Shoes</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Clothing</li>
                  <li className="menu__text">Pants & Leggings</li>
                  <li className="menu__text">Sports Bras</li>
                  <li className="menu__text">Tops & T-Shirts</li>
                  <li className="menu__text">Shorts</li>
                  <li className="menu__text">Hoodies & Sweatshirts</li>
                  <li className="menu__text">Jackets & Vests</li>
                  <li className="menu__text">Swimwear</li>
                  <li className="menu__text">Nike Pro</li>
                  <li className="menu__text">Plus Size</li>
                  <li className="menu__text">Skirts & Dresses</li>
                  <li className="menu__text">Nike Maternity</li>
                  <li className="menu__text">Yoga</li>
                  <li className="menu__text">Socks</li>
                  <li className="menu__text">All Clothing</li>

                  <ul className="menu__column">
                    <li className="menu__title">Accessories & Equipment</li>
                    <li className="menu__text">Bags & Backpacks</li>
                    <li className="menu__text">Hats, Visors & Headbandsr</li>
                    <li className="menu__text">Apple Watch Nike</li>
                  </ul>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Shop Collection</li>
                  <li className="menu__text">Running</li>
                  <li className="menu__text">Golf</li>
                  <li className="menu__text">Soccer</li>
                  <li className="menu__text">Jordan</li>
                  <li className="menu__text">Training & Gym</li>
                  <li className="menu__text">Tennis</li>
                  <li className="menu__text">Nike Sportswear</li>
                  <li className="menu__text">ACG</li>
                  <li className="menu__text">NikeLab</li>
                  <li className="menu__text">Volleyball</li>
                  <li className="menu__text">Basketball</li>
                  <li className="menu__text">Softball</li>
                  <li className="menu__text">Skateboarding</li>
                  <li className="menu__text">Lacrosse</li>
                  <li className="menu__text">Fan Gear</li>
                  <li className="menu__text">Nike FlyEase</li>
                </ul>
              </div>
            </li>
            <li
              className="menu__option"
              onMouseLeave={() => this.setState({ animValid: false })}
            >
              <Link className="menu__option-title" to="/product">
                Kids
              </Link>
              <div
                className={
                  animValid
                    ? "menu__list-container menu__list-4"
                    : "menu__list-container menu__none menu__list-4"
                }
              >
                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">New Releases</li>
                  <li className="menu__text">Best Sellers</li>
                  <li className="menu__text">Best of Air Force</li>
                  <li className="menu__text">Kids' Extended Sizing</li>
                  <li className="menu__text">Bra and Tight Pairings</li>
                  <li className="menu__text">Trending Tech Fleece</li>
                  <li className="menu__text">Sale - Up to 40% Off</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Boys Shoes</li>
                  <li className="menu__text">Big Kids (3.5Y - 7Y)</li>
                  <li className="menu__text">Little Kids (10.5C - 3Y)</li>
                  <li className="menu__text">Baby & Toddler (0C - 10C)</li>
                  <li className="menu__text">Lifestyle</li>
                  <li className="menu__text">Running</li>
                  <li className="menu__text">Basketball</li>
                  <li className="menu__text">All Shoes</li>

                  <ul className="menu__column">
                    <li className="menu__title">Boys Clothing</li>
                    <li className="menu__text">Big Kids (XS - XL)</li>
                    <li className="menu__text">Little Kids (4 - 7)</li>
                    <li className="menu__text">Baby & Toddler (0M - 4T)</li>
                    <li className="menu__text">Hoodies & Sweatshirts</li>
                    <li className="menu__text">Pants & Tights</li>
                    <li className="menu__text">Jackets</li>
                    <li className="menu__text">Tops & T-Shirts</li>
                    <li className="menu__text">Nike Pro & Baselayer</li>
                    <li className="menu__text">Shorts</li>
                    <li className="menu__text">All Clothing</li>
                  </ul>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Girls Shoes</li>
                  <li className="menu__text">Big Kids (3.5Y - 7Y)</li>
                  <li className="menu__text">Little Kids (10.5C - 3Y)</li>
                  <li className="menu__text">Baby & Toddler (0C - 10C)</li>
                  <li className="menu__text">Lifestyle</li>
                  <li className="menu__text">Running</li>
                  <li className="menu__text">Basketball</li>
                  <li className="menu__text">All Shoes</li>

                  <ul className="menu__column">
                    <li className="menu__title">Girls Clothing</li>
                    <li className="menu__text">Big Kids (XS - XL)</li>
                    <li className="menu__text">Little Kids (4T - 7)</li>
                    <li className="menu__text">Baby & Toddler (0M - 4T)</li>
                    <li className="menu__text">Hoodies & Sweatshirts</li>
                    <li className="menu__text">Pants & Tights</li>
                    <li className="menu__text">Jackets</li>
                    <li className="menu__text">Tops & T-Shirts</li>
                    <li className="menu__text">Sports Bras</li>
                    <li className="menu__text">Shorts</li>
                    <li className="menu__text">All Clothing</li>
                  </ul>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Baby & Toddler</li>
                  <li className="menu__text">Baby Girl</li>
                  <li className="menu__text">Baby Boy</li>
                  <li className="menu__text">All Clothing (0M - 4T)</li>
                  <li className="menu__text">All Shoes (0C - 10C)</li>
                  <li className="menu__text">Baby Box Sets</li>

                  <ul className="menu__column">
                    <li className="menu__title">Accessories & Equipment</li>
                    <li className="menu__text">Bags & Backpacks</li>
                    <li className="menu__text">Hats</li>
                    <li className="menu__text">Socks</li>
                  </ul>

                  <ul className="menu__column">
                    <li className="menu__title">Shop Collection</li>
                    <li className="menu__text">Rep Your City</li>
                    <li className="menu__text">Boots</li>
                    <li className="menu__text">Sandals & Slides</li>
                    <li className="menu__text">Jordan Kids</li>
                    <li className="menu__text">Fan Gear</li>
                    <li className="menu__text">Nike FlyEase</li>
                    <li className="menu__text">Shoes $80 & Under</li>
                  </ul>
                </ul>
              </div>
            </li>
            <li
              className="menu__option"
              onMouseLeave={() => this.setState({ animValid: false })}
            >
              <Link className="menu__option-title" to="/product">
                Customize
              </Link>
              <div
                className={
                  animValid
                    ? "menu__list-container menu__list-5"
                    : "menu__list-container menu__none menu__list-5"
                }
              >
                <ul className="menu__column">
                  <li className="menu__title">New & Featured</li>
                  <li className="menu__text">Customize with Nike By You</li>
                  <li className="menu__text">Nike By You New Releases</li>
                  <li className="menu__text">Basketball By You</li>
                  <li className="menu__text">Blazer By You</li>
                  <li className="menu__text">Air Max By You</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Mens</li>
                  <li className="menu__text">Basketball</li>
                  <li className="menu__text">Lifestyle</li>
                  <li className="menu__text">Running</li>
                  <li className="menu__text">Football</li>
                  <li className="menu__text">Training & Gym</li>
                  <li className="menu__text">Soccer</li>
                  <li className="menu__text">Baseball</li>
                  <li className="menu__text">Skateboarding</li>
                </ul>

                <ul className="menu__column">
                  <li className="menu__title">Womens</li>
                  <li className="menu__text">Lifestyle</li>
                  <li className="menu__text">Running</li>
                  <li className="menu__text">Training & Gym</li>
                  <li className="menu__text">Basketball</li>
                  <li className="menu__text">Soccer</li>
                  <li className="menu__text">Softball</li>
                  <li className="menu__text">Skateboarding</li>
                </ul>
              </div>
            </li>
            <li
              className="menu__option"
              onMouseLeave={() => this.setState({ animValid: false })}
            >
              <Link className="menu__option-title" to="/product">
                Sale
              </Link>
              <div
                className={
                  animValid
                    ? "menu__list-container menu__list-6"
                    : "menu__list-container menu__none menu__list-6"
                }
              >
                <ul className="menu__column">
                  <li className="menu__title">Sale</li>
                  <li className="menu__text">Sale - Up to 40% Off</li>
                </ul>
                <ul className="menu__column">
                  <li className="menu__title">Mens Sale</li>
                  <li className="menu__text">Shoes</li>
                  <li className="menu__text">Clothing</li>
                  <li className="menu__text">Equipment</li>
                </ul>
                <ul className="menu__column">
                  <li className="menu__title">Womens Sale</li>
                  <li className="menu__text">Shoes</li>
                  <li className="menu__text">Clothing</li>
                  <li className="menu__text">Equipment</li>
                </ul>
                <ul className="menu__column">
                  <li className="menu__title">Kids Sale</li>
                  <li className="menu__text">Shoes</li>
                  <li className="menu__text">Clothing</li>
                  <li className="menu__text">Equipment</li>
                </ul>
              </div>
            </li>
          </ul>
          <div
            className={
              searchOpened
                ? "menu__search-container menu__search-container--open"
                : "menu__search-container menu__search-container--close"
            }
          >
            <form className="menu_search" ref={(form) => (this.form = form)}>
              <SearchIcon
                className="menu__searchIcon"
                onClick={() => this.handleOpenSearch()}
              />
              <input
                className="menu__search-input"
                type="text"
                placeholder="Search"
                ref={(input) => (this.input = input)}
                onClick={() => this.handleOpenSearch()}
                onChange={(e) => this.setState({ inputText: e.target.value })}
              />
              {inputText !== "" && (
                <BackspaceIcon
                  type="reset"
                  className="menu__backspaceIcon"
                  onClick={() => this.handleBackspace()}
                />
              )}
            </form>
            <CloseIcon
              className={
                searchOpened
                  ? "menu__closeIcon menu__closeIcon--open"
                  : "menu__closeIcon"
              }
              onClick={() => this.setState({ searchOpened: false })}
            />

            <ul
              className={
                searchOpened
                  ? "menu__search-nav"
                  : "menu__search-nav menu__search--hidden"
              }
            >
              <li
                className={
                  searchOpened
                    ? "menu__title-search menu__animTitle"
                    : "menu__title-search"
                }
              >
                Popular Search Terms
              </li>
              <div
                className={
                  searchOpened
                    ? "menu__text-search menu__animText"
                    : "menu__text-search"
                }
              >
                <li>Air Force 1</li>
                <li>Jordan</li>
                <li>Air Max</li>
                <li>Blazer</li>
              </div>
            </ul>
          </div>

          <img
            className="menu__logo"
            src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
            alt=""
          ></img>
          <FavoriteBorderIcon className="menu__icon" />
          <LocalMallOutlinedIcon className="menu__icon menu__icon--right" />
        </div>

        <div
          className={
            optionOpened
              ? "menu__bg-option menu__bg-option--visible"
              : "menu__bg-option menu__bg-option--hidden"
          }
        ></div>
        <div
          className={
            searchOpened
              ? "menu__bg-search menu__bg-search--visible"
              : "menu__bg-search menu__bg-search--hidden"
          }
          onClick={() => this.setState({ searchOpened: false })}
        ></div>
      </div>
    );
  }
}

export default Menu;
