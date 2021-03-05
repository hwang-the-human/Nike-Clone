import { React, useRef, useEffect, useState } from "react";
import "./TickerProducts.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function TickerProducts() {
  const tickerProducts__Box = useRef(null);
  const [position, setPosition] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    if (counter === 6) {
      if (position) {
        tickerProducts__Box.current.style.transform =
          "translate3d(-100%, 0, 0)";
        setPosition(false);
      } else {
        tickerProducts__Box.current.style.transform = "translate3d(0, 0, 0)";
        setPosition(true);
      }
      setCounter(0);
    }
  }, [counter, position]);

  function handleClick() {
    if (position) {
      tickerProducts__Box.current.style.transform = "translate3d(-100%, 0, 0)";
      setPosition(false);
    } else {
      tickerProducts__Box.current.style.transform = "translate3d(0, 0, 0)";
      setPosition(true);
    }
    setCounter(0);
  }

  return (
    <div className="tickerProducts">
      <div className="tickerProducts__container">
        <div className="tickerProducts__box" ref={tickerProducts__Box}>
          <div className="tickerProducts__slide">
            <p className="tickerProducts__option-left">SAVE UP TO 40%</p>
            <p className="tickerProducts__option-right">
              Shop All Our New Markdowns
            </p>
          </div>
          <div className="tickerProducts__slide tickerProducts__slide--second">
            <p className="tickerProducts__option-left">
              FREE SHIPPING & 60-DAY FREE
              <br />
              RETURNS
            </p>
            <p className="tickerProducts__option-right tickerProducts__option-right--margin">
              Join Now
            </p>
          </div>
        </div>
        <ArrowForwardIosIcon
          className="tickerProducts__arrowForward"
          onClick={handleClick}
        />
        <ArrowBackIosIcon
          className="tickerProducts__arrowBack"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default TickerProducts;
