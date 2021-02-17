import React from "react";
import "./BottomMenu.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function BottomMenu() {
  return (
    <div className="bottomMenu">
      <div className="bottomMenu__container-top">
        <div className="bottomMenu__navBar">
          <ul className="bottomMenu__column bottomMenu__title">
            <li>GIFT CARDS</li>
            <li>PROMOTIONS</li>
            <li>FIND A STORE</li>
            <li>SIGN UP FOR EMAIL</li>
            <li>BECOME A MEMBER</li>
            <li>NIKE JOURNAL</li>
            <li>SEND US FEEDBACK</li>
          </ul>

          <ul className="bottomMenu__column">
            <li className="bottomMenu__title">GET HELP</li>
            <li>Order Status</li>
            <li>Shipping and Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Gift Card Balance</li>
            <li>Contact Us</li>
          </ul>

          <ul className="bottomMenu__column">
            <li className="bottomMenu__title">About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Inverstors</li>
            <li>Purpose</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className="bottomMenu__social-apps">
          <TwitterIcon className="bottomMenu_app" />
          <FacebookIcon className="bottomMenu_app" />
          <YouTubeIcon className="bottomMenu_app" />
          <InstagramIcon className="bottomMenu_app" />
        </div>
      </div>
      <div className="bottomMenu__container-bottom">
        <div className="bottomMenu__location">
          <div className="bottomMenu__text-location">
            <LocationOnIcon />
            <p>United States</p>
          </div>

          <p className="bottomMenu__text">
            © 2020 Nike, Inc. All Rights Reserved
          </p>
        </div>
        <ul className="bottomMenu__navBar-bottom">
          <li>
            Guides
            <div className="bottomMenu__container-guides">
              <div className="bottomMenu__navBar bottomMenu__navBar--guides">
                <ul className="bottomMenu__column">
                  <li>Nike Adapt</li>
                  <li>Nike Air Max</li>
                  <li>Nike Flyleather</li>
                  <li>Nike React</li>
                  <li>Space Hippie</li>
                </ul>
                <ul className="bottomMenu__column">
                  <li>Nike Air</li>
                  <li>Nike FlyEase</li>
                  <li>Nike Free</li>
                  <li>Nike Vaporfly</li>
                </ul>
                <ul className="bottomMenu__column">
                  <li>Nike Air Force 1</li>
                  <li>Nike Flyknit</li>
                  <li>Nike Joyride</li>
                  <li>Nike ZoomX</li>
                </ul>
              </div>
            </div>
          </li>
          <li>Terms of Sale</li>
          <li>Terms of Use</li>
          <li>Nike Privacy Policy</li>
          <li>CA Supply Chains Act</li>
        </ul>
      </div>
    </div>
  );
}

export default BottomMenu;
