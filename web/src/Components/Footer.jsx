import React from "react";
import FooterImg from "./image//footer.jpeg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-photo">
        <img src={FooterImg} alt="" />
        <div className="footer-content">
          <ul className="links">
            <li>Home</li>
            <li>About us</li>
            <li>Tours</li>
            <li>Flight</li>
            <li>Reviews</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
