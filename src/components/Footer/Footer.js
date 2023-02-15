import React from "react";
import Logofooter from "../../assets/Logo_footer.png";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <img src={Logofooter} alt="logo kasa du footer" />
        <p>
          <i className="fa-regular fa-copyright"></i>
          2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
