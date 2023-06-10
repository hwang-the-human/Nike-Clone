import React, { useState } from "react";
import "./Images.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import FullImage from "./FullImage.js";

function Images() {
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(null);

  function handleOpened(index) {
    if (opened) {
      setOpened(false);
    } else {
      setOpened(true);
      setIndex(index);
    }
  }

  const imagesArray = [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7bd331ab-b7e2-4b93-85fd-8f6bab179dd7/jordan-delta-breathe-mens-shoe-2ggX3h.jpg",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a08d3be7-da17-44e6-aa27-86eb995c2e33/jordan-delta-breathe-mens-shoe-2ggX3h.jpg",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3738512c-32ac-4600-8672-82ad91e1f1e1/jordan-delta-breathe-mens-shoe-2ggX3h.jpg",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7e251b99-5c8c-43bf-bfe0-cebb488328fb/jordan-delta-breathe-mens-shoe-2ggX3h.jpg",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a9c80de2-c9a8-4e85-9ca3-3843707d266e/jordan-delta-breathe-mens-shoe-2ggX3h.jpg",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c4843870-d148-4cd7-8e05-e83d1317a35e/jordan-delta-breathe-mens-shoe-2ggX3h.jpg",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c8af5a46-67ae-405c-ad1a-aa6f0d881310/jordan-delta-breathe-mens-shoe-2ggX3h.jpg",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1736c556-359c-4f39-8e9e-d55ddaaad8f3/jordan-delta-breathe-mens-shoe-2ggX3h.jpg",
  ];
  return (
    <div className="images">
      {imagesArray.map((image, index) => (
        <img
          className="images__image"
          src={image}
          alt=""
          key={index}
          onClick={() => handleOpened(index)}
        ></img>
      ))}
      <div className="images__container">
        <StarRateIcon />
        <p className="images__text">Highly Rated</p>
      </div>
      {opened && (
        <FullImage
          imagesArray={imagesArray}
          handleOpened={handleOpened}
          index={index}
        />
      )}
    </div>
  );
}

export default Images;
