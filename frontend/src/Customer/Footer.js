import React from "react";
import "../style/Footer.css";
import logo from "../images/logo.jpg";
const Footer = () => {
  return (
    <>
      <div id="full">
        <span className="container">
          <div className="col1">
            <img src={logo} width="200px" alt="pic not found" />
          </div>

          <div className="col2">
            <h1>ABOUT US</h1>
            <p>
              Matbakh <br />
              Going to a restaurant is one of my keenest pleasures. ... “There
              is no love sincerer than the love of food.”
            </p>
          </div>

          <div className="col3">
            <h1>CONTACT</h1>
            <p>ISLAMABAD H13-markaz near Famous Fast Food</p>
          </div>

          <div className="col4">
            <h1>PHONE#</h1>
            <ul>
              <li>03106565378</li>
              <li>03136900427</li>
              <li>03696969696</li>
            </ul>
          </div>

          <div className="col5">
            <h1>DEVELOPERS</h1>
            <ul>
              <li>Huzaifa Anjum</li>
              <li>Khuzaima Haroon</li>
              <li>Hammad Aslam</li>
              <li>Fahad Bajwa</li>
              <li>Umair Farooq</li>
            </ul>
          </div>
        </span>

        <hr />

        <div className="copy">
          <p>Copyright 2022 - Software Construction and Development Project</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
