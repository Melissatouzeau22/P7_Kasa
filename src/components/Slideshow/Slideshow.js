import React, { useState } from "react";
import fleche_droite from "../../assets/fleche_droite.png";
import fleche_gauche from "../../assets/fleche_gauche.png";
import "../Slideshow/Slideshow.css";

function Slideshow(props) {
  const [initialPicture, setPicture] = useState(0); // Initialise l'index de mon slide à 0

  const nextSlide = () => {
    if (initialPicture === props.img.length - 1) {
      // -1 pour coller à l'index calculé à partir de 0.
      // Vérifie si l'image affichée est la dernière de la slide
      setPicture(0); // retourne à la premiere image
    } else {
      setPicture(initialPicture + 1); // affiche la photo suivante
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
      {props.img.map(
        // affiche chaque image
        (picture, index) =>
          index === initialPicture && ( // affichage conditionnel (true + expression = expression)
            <div className="slideshow_photos" key={index}>
              <img src={picture} alt={props.alt} />
            </div>
          )
      )}
      {props.img.length > 1 ? ( // affiche les flèches et leur logique si le nombre d'image >1
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
