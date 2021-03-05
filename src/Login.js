import "./Login.css";
import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import ResetPass from "./ResetPass.js";

function Login(props) {
  const [pageOpened, setPageOpened] = useState("SignIn");
  function pages() {
    switch (pageOpened) {
      case "SignIn":
        return <SignIn setPageOpened={setPageOpened} />;
      case "SignUp":
        return <SignUp setPageOpened={setPageOpened} />;
      default:
        return <ResetPass setPageOpened={setPageOpened} />;
    }
  }
  return (
    <div
      className={props.opened ? "login" : "login login--hidden"}
      onClick={props.handleClose}
    >
      <div
        className={
          props.opened
            ? "login__container"
            : "login__container login__container--hidden"
        }
      >
        <ClearIcon className="login__icon-close" onClick={props.handleClose} />
        {pages()}
      </div>
    </div>
  );
}

export default Login;
