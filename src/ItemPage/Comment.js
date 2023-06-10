import React, { useState, useRef, useEffect } from "react";
import "./Comment.css";
import StarRateIcon from "@material-ui/icons/StarRate";

function Comment() {
  const [more, setMore] = useState(true);
  const [moreVisible, setMoreVisible] = useState(null);
  const comment__review = useRef(null);

  useEffect(() => {
    const height = comment__review.current.clientHeight;
    if (height >= 84) {
      setMoreVisible(true);
      comment__review.current.style.height = "84px";
    } else {
      setMoreVisible(false);
      comment__review.current.style.height = "initial";
    }
  }, [moreVisible]);

  function handleMore() {
    if (more) {
      setMore(false);
    } else {
      setMore(true);
    }
  }
  return (
    <div className="comment">
      <div className="comment__title">Fun and comfortable</div>
      <div className="comment__container">
        <div className="comment__rating">
          <StarRateIcon style={{ fontSize: 20 }} />
          <StarRateIcon style={{ fontSize: 20 }} />
          <StarRateIcon style={{ fontSize: 20 }} />
          <StarRateIcon style={{ fontSize: 20 }} />
          <StarRateIcon style={{ fontSize: 20 }} />
        </div>
        <p className="comment__nemaText">S A. - Jan 20, 2021</p>
      </div>
      <p
        className={
          more ? "comment__review comment__review--open" : "comment__review"
        }
        ref={comment__review}
      >
        These will definitely get noticed, my son brought them in from delivery
        and said "can I have them?" they are a size too big, his little brother
        who they would fit spent an hour trying to tell me they were too cool
        for me but just right for him! I have been enjoying the fit, comfort and
        attention these shoes get!
      </p>
      {moreVisible && (
        <div className="comment__moreButton" onClick={handleMore}>
          {more ? "Less" : "More"}
        </div>
      )}
    </div>
  );
}

export default Comment;
