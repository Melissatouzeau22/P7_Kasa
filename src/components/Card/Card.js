import React from "react";
// import logements from "../../data/logements.json";
// import Slideshow from "../../components/Slideshow/Slideshow";
import { Link } from "react-router-dom";
import "../Card/Card.css";

const DisplayCards = (props) => {
  return (
    <div className="logements_container">
      <Link to={`/logements/${props.logement.id}`}>
        <img
          className="card_img"
          src={props.logement.cover}
          alt="Illustration"
        ></img>
        <div className="logements_list"></div>
        <h3>{props.logement.title}</h3>
      </Link>
    </div>
  );
};

export default DisplayCards;
