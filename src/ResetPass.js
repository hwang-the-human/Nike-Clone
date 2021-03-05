import "./ResetPass.css";
import React, { useState } from "react";

function ResetPass(props) {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [focus, setFocus] = useState("");

  function handleResetPass(e) {
    handleValid(e, "all");
    console.log("RESET!");
  }

  function handleValid(e, input) {
    if ((input !== focus && e.currentTarget === e.target) || input === "all") {
      if (focus === "email" || input === "all") {
        if (email.includes("@") && email.includes("mail.") && email !== "") {
          setEmailValid(true);
        } else {
          setEmailValid(false);
        }
      }
      if (input !== null) {
        setFocus(input);
      }
    }
  }

  return (
    <div className="resetPass" onClick={(e) => handleValid(e, null)}>
      <img
        className="resetPass__logo"
        src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
        alt=""
      ></img>

      <p className="resetPass__title">RESET PASSWORD</p>

      <p className="resetPass__text resetPass__text--sub-title">
        Enter your email to receive instructions on how to
        <br />
        reset your password.
      </p>

      <input
        className={
          emailValid
            ? "resetPass__input"
            : "resetPass__input resetPass__input--red"
        }
        type="text"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
        onClick={(e) => handleValid(e, "email")}
      />
      {!emailValid && (
        <p className="resetPass__text-valid">
          Please enter a valid email address.
        </p>
      )}

      <div className="resetPass__button" onClick={handleResetPass}>
        RESET
      </div>

      <p className="resetPass__text resetPass__text--margin">
        Or return to&nbsp;
        <span onClick={() => props.setPageOpened("SignIn")}>Log In.</span>
      </p>
    </div>
  );
}

export default ResetPass;
