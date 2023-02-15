import React, { useState } from "react";
import fleche_droite from "../../assets/fleche_droite.png";
import fleche_gauche from "../../assets/fleche_gauche.png";
import "../Slideshow/Slideshow.css";

function Slideshow(props) {
  const [initialPicture, setPicture] = useState(0);

  const nextSlide = () => {
    if (initialPicture === props.img.length - 1) {
      setPicture(0);
    } else {
      setPicture(initialPicture + 1);
    }
  };

  const previousSlide = () => {
    if (initialPicture === 0) {
      setPicture(props.img.length - 1);
    } else {
      setPicture(initialPicture - 1);
    }
  };

  return (
    <div className="slideshow_container">
      {props.img.map((picture, index) => {
        return (
          <div className="slideshow_photos" key={index}>
            {index === initialPicture && <img src={picture} alt={props.alt} />}
          </div>
        );
      })}
      {props.img.length > 1 ? (
        <>
          <div className="right_fleche" onClick={nextSlide}>
            <img src={fleche_droite} alt="Next slide"></img>
          </div>
          <div className="left_fleche" onClick={previousSlide}>
            <img src={fleche_gauche} alt="Previous slide"></img>
          </div>
          <div className="index_photos">
            {initialPicture + 1}/{props.img.length}
          </div>
        </>
      ) : null}
    </div>
  );
}
export default Slideshow;
