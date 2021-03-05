import React from "react";
import "./ThreePictures.css";

function ThreePictures() {
  return (
    <div className="threePictures">
      <p className="threePictures__title">Gear for Your Goals</p>
      <div className="threePictures__images">
        <div className="threePictures__container">
          <img
            className="threePictures__image"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/af09270b-f7e4-4cfe-9bac-2bf1e56e2b25/nike-just-do-it.jpg"
            alt=""
          ></img>
          <p className="threePictures__text">Workout Essentials</p>
        </div>

        <div className="threePictures__container threePictures__container--center">
          <img
            className="threePictures__image"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/a57420b8-61f2-4446-aa28-f33f5ee899ac/nike-just-do-it.jpg"
            alt=""
          ></img>
          <p className="threePictures__text">Training Footwear</p>
        </div>

        <div className="threePictures__container">
          <img
            className="threePictures__image"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/7e930dfe-af43-429c-98ec-02ec435fa5d9/nike-just-do-it.jpg"
            alt=""
          ></img>
          <p className="threePictures__text">Running Apparel</p>
        </div>
      </div>
    </div>
  );
}

export default ThreePictures;
