import React from "react";
import filter from "../../assets/filter.png";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="banner_container">
      <img src={props.img} alt="mer" className="backgroundImage" />
      <img src={filter} alt="Filtre" className="filter" />
      <div className="banner_text">
        <p>{props.text1}</p>
        <p>{props.text2}</p>
      </div>
    </div>
  );
};

export default Banner;
