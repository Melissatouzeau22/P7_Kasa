import React from "react";
import { Navigate } from "react-router-dom";
import "../Rate/Rate.css";

const Rating = (props) => {
  try {
    return (
      <div className="stars">
        {Array(props.rate) // créer un tableau pour la longueur de la propriété "note" //
          .fill() //Remplir ce tableau avec les valeurs inutilisées
          .map((_, index) => (
            <i key={index} className="fa-solid fa-star" />
            //retourne l'icône "étoile" pour chaque entrée dans le tableau
          ))}
        {Array(props.base - props.rate) //même logique pour les étoiles grises
          .fill()
          .map((_, index) => (
            <i key={index} className="fa-solid fa-star grey" />
          ))}
      </div>
    );
  } catch {
    return <Navigate to="/errorPath" />;
  }
};
export default Rating;
