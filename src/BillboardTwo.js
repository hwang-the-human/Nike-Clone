import React from "react";
import "./BillboardTwo.css";

function BillboardTwo({
  title,
  color_text,
  image_left,
  text_left,
  image_right,
  text_right,
}) {
  return (
    <div className="billboard_two">
      <p className="billboard_two__title">{title}</p>

      <div className="billboard_two__container">
        <a
          className="billboard_two__container-image-left"
          style={{ color: color_text }}
          href="https://www.w3schools.com"
        >
          <img className="billboard_two__image" src={image_left} alt=""></img>
          <div className="billboard_two__description">
            <p className="billboard_two__text">{text_left}</p>
            <div
              className={
                color_text === "black"
                  ? "billboard_two__button"
                  : "billboard_two__button billboard_two__button--white"
              }
            >
              Shop
            </div>
          </div>
        </a>

        <a
          className="billboard_two__container-image-right"
          style={{ color: color_text }}
          href="https://www.w3schools.com"
        >
          <img className="billboard_two__image" src={image_right} alt=""></img>
          <div className="billboard_two__description">
            <p className="billboard_two__text">{text_right}</p>
            <div
              className={
                color_text === "black"
                  ? "billboard_two__button"
                  : "billboard_two__button billboard_two__button--white"
              }
            >
              Shop
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BillboardTwo;
