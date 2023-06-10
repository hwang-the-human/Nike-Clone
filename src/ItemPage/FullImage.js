import React, { useRef, useEffect } from "react";
import "./FullImage.css";
import CloseIcon from "@material-ui/icons/Close";

function FullImage(props) {
  const itemEls = useRef([]);

  useEffect(() => {
    itemEls.current[props.index].scrollIntoView({ block: "center" });
  }, [props.index]);

  return (
    <div className="fullImage">
      <div className="fullImage__container">
        {props.imagesArray.map((image, index) => (
          <img
            className="fullImage__image"
            src={image}
            alt=""
            key={index}
            ref={(element) => itemEls.current.push(element)}
          ></img>
        ))}
        <CloseIcon
          className="fullImage__closeIcon"
          onClick={props.handleOpened}
        />
      </div>
    </div>
  );
}

export default FullImage;
