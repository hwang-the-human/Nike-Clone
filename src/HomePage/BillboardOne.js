import React from "react";
import "./BillboardOne.css";

function BillboardOne({
  image,
  main_title,
  title,
  description,
  color_text,
  number,
}) {
  return (
    <div className="billboard_one">
      <p
        className={
          main_title
            ? "billboard_one__main_title"
            : "billboard_one__main_title--none"
        }
      >
        {main_title}
      </p>
      <a
        className="billboard_one__container"
        style={{ color: color_text }}
        href="https://www.w3schools.com"
      >
        <img
          className={
            number === "first"
              ? "billboard_one__image"
              : "billboard_one__image--second"
          }
          src={image}
          alt=""
        ></img>
        <div
          className={
            number === "first"
              ? "billboard_one__description"
              : "billboard_one__description--second"
          }
        >
          <h1 className="billboard_one__title">{title}</h1>
          <p className="billboard_one__text">{description}</p>
          <div
            className={
              color_text === "black"
                ? "billboard_one__button"
                : "billboard_one__button billboard_one__button--white"
            }
          >
            Shop
          </div>
        </div>
      </a>
    </div>
  );
}

export default BillboardOne;
