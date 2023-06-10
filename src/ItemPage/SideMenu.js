import React, { useState } from "react";
import "./SideMenu.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ViewDetail from "./ViewDetails.js";
import ArrowIcon from "../ProductsPage/ArrowIcon.js";
import Comment from "./Comment.js";
import StarRateIcon from "@material-ui/icons/StarRate";

function SideMenu() {
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeValid, setSizeValid] = useState(true);
  const [selectedImage, setSelectedImage] = useState(1);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(true);

  const sizeArray = [
    "M 8 / W 9.5",
    "M 8.5 / W 10",
    "M 9 / W 10.5",
    "M 9.5 / W 11",
    "M 10 / W 11.5",
    "M 10.5 / W 12",
    "M 11 / W 12.5",
    "M 11.5 / W 13",
    "M 12 / W 13.5",
    "M 13 / W 14.5",
    "M 14 / W 15.5",
  ];

  function handleShippingOpen() {
    if (shippingOpen) {
      setShippingOpen(false);
    } else {
      setShippingOpen(true);
    }
  }

  function handleReviewsOpen() {
    if (reviewsOpen) {
      setReviewsOpen(false);
    } else {
      setReviewsOpen(true);
    }
  }

  function handleAdd() {
    if (selectedSize === "") {
      setSizeValid(false);
    } else {
      setSizeValid(true);
    }
  }

  function handleFavorite() {
    console.log("Favorite");
  }

  function handleSelecImage(index) {
    setSelectedImage(index);
  }

  return (
    <div className="sideMenu">
      <div className="sideMenu__container">
        <div className="sideMenu__titleBox">
          <p className="sideMenu__subTitle">Men's Shoe</p>
          <p className="sideMenu__price">$130</p>
        </div>
        <p className="sideMenu__title">
          Jordan Delta
          <br />
          Breathe
        </p>

        <div className="sideMenu__optionBox">
          <div
            className={
              selectedImage === 0
                ? "sideMenu__imageBox sideMenu__imageBox--selected"
                : "sideMenu__imageBox"
            }
            onClick={() => handleSelecImage(0)}
          >
            <img
              className="sideMenu__image"
              src="//static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f1c36ff6-15c8-464f-9ebd-fe5ecd59e772/jordan-delta-breathe-mens-shoe-2ggX3h.jpg"
              alt=""
            ></img>
          </div>
          <div
            className={
              selectedImage === 1
                ? "sideMenu__imageBox sideMenu__imageBox--selected"
                : "sideMenu__imageBox"
            }
            onClick={() => handleSelecImage(1)}
          >
            <img
              className="sideMenu__image"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7bd331ab-b7e2-4b93-85fd-8f6bab179dd7/jordan-delta-breathe-mens-shoe-2ggX3h.jpg"
              alt=""
            ></img>
          </div>
        </div>

        <div className="sideMenu__sizeBox">
          <div className="sideMenu__titleBox">
            <p
              className={
                !sizeValid
                  ? "sideMenu__subTitle sideMenu__subTitle--red"
                  : "sideMenu__subTitle"
              }
            >
              Select Size
            </p>
            <p className="sideMenu__subTitle--light">Size Guide</p>
          </div>
          <div
            className={
              !sizeValid
                ? "sideMenu__sizeSubBox sideMenu__sizeSubBox--red"
                : "sideMenu__sizeSubBox"
            }
          >
            {sizeArray.map((size, index) => (
              <div
                className={
                  size === selectedSize
                    ? "sideMenu__sizeOption sideMenu__sizeOption--selected"
                    : "sideMenu__sizeOption"
                }
                key={index}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
          {!sizeValid && (
            <p className="sideMenu__textValid">Please select a size.</p>
          )}
        </div>

        <div className="sideMenu__addButton" onClick={handleAdd}>
          Add to Bag
        </div>

        <div
          className="sideMenu__addButton sideMenu__addButton--white"
          onClick={handleFavorite}
        >
          Favorite
          <FavoriteBorderIcon className="sideMenu__favoriteIcon" />
        </div>

        <div className="sideMenu__description">
          <p className="sideMenu__text">
            Inspired by high-tech functionality and handmade craftsmanship, the
            Jordan Delta Breathe combines natural and synthetic materials. The
            result is a lifestyle shoe that's lightweight, breathable and
            comfortable all day. The layered mix of diverse elements creates a
            distinct look and feel with subtle nods to Jordan DNA. Nike React
            foam offers responsive cushioning on the move.
          </p>
          <ul>
            <li>Shown: Clear/Light Bone/Varsity Red/Medium Grey</li>
            <li>Style: CW0783-901</li>
          </ul>
        </div>
        <ViewDetail />

        <div
          className={
            shippingOpen
              ? "sideMenu__shipping sideMenu__shipping--open"
              : "sideMenu__shipping"
          }
        >
          <div className="sideMenu__subShipping" onClick={handleShippingOpen}>
            <p>Free Shipping & Returns</p>
            <ArrowIcon arrowUp={shippingOpen} />
          </div>
          <div className="sideMenu__textBox">
            <p>
              Free standard shipping and free 60-day returns for Nike
              Members.&nbsp;
              <span className="sideMenu__linkText">
                Learn more. Return policy exclusions apply
              </span>
              .
            </p>
            <p className="sideMenu__linkText">
              Pick-up available at select Nike Stores.
            </p>
          </div>
        </div>

        <div
          className={
            reviewsOpen
              ? "sideMenu__reviews sideMenu__reviews--open"
              : "sideMenu__reviews"
          }
        >
          <div className="sideMenu__subReviews" onClick={handleReviewsOpen}>
            <p>Reviews (12)</p>
            <div className="sideMenu__rating">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </div>
            <ArrowIcon arrowUp={reviewsOpen} />
          </div>
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
