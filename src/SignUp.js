import "./SignUp.css";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import { CountryDropdown } from "react-country-region-selector";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passValid, setPassValid] = useState(true);
  const [fName, setFName] = useState("");
  const [fNameValid, setFNameValid] = useState(true);
  const [lName, setLName] = useState("");
  const [lNameValid, setLNameValid] = useState(true);
  const [date, setDate] = useState(null);
  const [dateValid, setDateValid] = useState(true);
  const [country, setCountry] = useState("United States");
  const [gender, setGender] = useState("");
  const [checkMark, setCheckMark] = useState(false);
  const [focus, setFocus] = useState("");

  function handleSignUp(e) {
    handleValid(e, "all");
  }

  function handleCheckMark() {
    if (checkMark) {
      setCheckMark(false);
    } else {
      setCheckMark(true);
    }
  }

  function handleCheckGender(gender) {
    setGender(gender);
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
      if (focus === "password" || input === "all") {
        if (password === "") {
          setPassValid(false);
        } else {
          setPassValid(true);
        }
      }
      if (focus === "fName" || input === "all") {
        if (fName === "") {
          setFNameValid(false);
        } else {
          setFNameValid(true);
        }
      }
      if (focus === "lName" || input === "all") {
        if (lName === "") {
          setLNameValid(false);
        } else {
          setLNameValid(true);
        }
      }
      if (focus === "date" || input === "all") {
        if (isValidDate(date)) {
          setDateValid(true);
        } else {
          setDateValid(false);
        }
      }
      if (gender === "" && input === "all") {
        setGender(null);
      }
      if (input !== null) {
        setFocus(input);
      }
    }
  }

  function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

  return (
    <div className="signUp" onClick={(e) => handleValid(e, null)}>
      <img
        className="signUp__logo"
        src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
        alt=""
      ></img>
      <p className="signUp__title">BECOME A NIKE MEMBER</p>
      <p className="signUp__text signUp__text--sub-title">
        Create your Nike Member profile and get first
        <br />
        access to the very best of Nike products,
        <br />
        inspiration and community.
      </p>
      <input
        className={
          emailValid ? "signUp__input" : "signUp__input signUp__input--red"
        }
        type="text"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
        onClick={(e) => handleValid(e, "email")}
      />
      {!emailValid && (
        <p className="signUp__text-valid">
          Please enter a valid email address.
        </p>
      )}

      <input
        className={
          passValid ? "signUp__input" : "signUp__input signUp__input--red"
        }
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        onClick={(e) => handleValid(e, "password")}
      />
      {!passValid && (
        <p className="signUp__text-valid">Please enter a password.</p>
      )}

      <input
        className={
          fNameValid ? "signUp__input" : "signUp__input signUp__input--red"
        }
        type="text"
        placeholder="First Name"
        onChange={(e) => setFName(e.target.value)}
        onClick={(e) => handleValid(e, "fName")}
      />
      {!fNameValid && (
        <p className="signUp__text-valid">Please enter a valid first name.</p>
      )}

      <input
        className={
          lNameValid ? "signUp__input" : "signUp__input signUp__input--red"
        }
        type="text"
        placeholder="Last Name"
        onChange={(e) => setLName(e.target.value)}
        onClick={(e) => handleValid(e, "lName")}
      />
      {!lNameValid && (
        <p className="signUp__text-valid">Please enter a valid last name.</p>
      )}
      <DatePicker
        className={
          dateValid ? "signUp__input" : "signUp__input signUp__input--red"
        }
        selected={date}
        placeholderText="Date of Birth"
        maxDate={moment().subtract(1, "day").toDate()}
        onChange={(date) => setDate(date)}
        onFocus={() => setFocus("date")}
        onClick={(e) => handleValid(e, "date")}
      />
      {!dateValid && (
        <p className="signUp__text-valid">
          Please enter a valid date of birth.
        </p>
      )}
      <p className="signUp__text">
        Get a Nike Member Reward every year on your Birthday.
      </p>
      <CountryDropdown
        className="signUp__countryPicker"
        value={country}
        onChange={(value) => setCountry(value)}
        showDefaultOption={false}
      />

      <div className="signUp__gender-container">
        <div
          className={
            gender !== null
              ? gender === "male"
                ? "signUp__gender signUp__gender--selected"
                : "signUp__gender"
              : "signUp__gender signUp__input--red"
          }
          onClick={() => {
            handleCheckGender("male");
          }}
        >
          {gender === "male" && (
            <span className="signUp__arrow signUp__arrow--gender"></span>
          )}
          Male
        </div>
        <div
          className={
            gender !== null
              ? gender === "female"
                ? "signUp__gender signUp__gender--selected"
                : "signUp__gender"
              : "signUp__gender signUp__input--red"
          }
          onClick={() => {
            handleCheckGender("female");
          }}
        >
          {gender === "female" && (
            <span className="signUp__arrow signUp__arrow--gender"></span>
          )}
          Female
        </div>
      </div>

      {gender === null && (
        <p className="signUp__text-valid">Please select a preference.</p>
      )}

      <div className="signUp__box" onClick={handleCheckMark}>
        <div className="signUp__box-arrow">
          {checkMark && <div className="signUp__arrow"></div>}
        </div>
        <p className="signUp__text">
          Sign up for emails to get updates from Nike on
          <br />
          products, offers, and your Member benefits
        </p>
      </div>

      <p className="signUp__text signUp__text--center">
        By creating an account, you agree to Nike's&nbsp;
        <a href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=US&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web">
          Privacy Policy
        </a>
        <br />
        and&nbsp;
        <a href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=US&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web">
          Terms of Use
        </a>
        .
      </p>

      <div className="signUp__button" onClick={handleSignUp}>
        JOIN US
      </div>

      <p className="signUp__text signUp__text--margin">
        Already a member?&nbsp;
        <span onClick={() => props.setPageOpened("SignIn")}>Sign In.</span>
      </p>
    </div>
  );
}

export default SignUp;
