import { React, useRef, useEffect, useState } from "react";
import "./TickerHome.css";

function TickerHome(props) {
  const tickerHome__Box = useRef(null);
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
        tickerHome__Box.current.style.transform = "translate3d(-100%, 0, 0)";
        setPosition(false);
      } else {
        tickerHome__Box.current.style.transform = "translate3d(0, 0, 0)";
        setPosition(true);
      }
      setCounter(0);
    }
  }, [counter, position]);

  return (
    <div className="tickerHome">
      <div className="tickerHome__container">
        <div className="tickerHome__box" ref={tickerHome__Box}>
          <div className="tickerHome__slide">
            <p className="tickerHome__option-top">Save Up to 40%</p>
            <p className="tickerHome__option-bottom">
              Shop All Our New Markdowns
            </p>
          </div>
          <div className="tickerHome__slide tickerHome__slide--second">
            <p className="tickerHome__option-top">
              Free Shipping & 60-Day Free Returns
            </p>
            <p className="tickerHome__option-bottom">Join Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TickerHome;
