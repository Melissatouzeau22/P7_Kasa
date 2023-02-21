import React, { useState } from "react";
import fleche from "../../assets/fleche_bas.png";
import flecheHaute from "../../assets/fleche.png";
import "../Collapse/Collapse.css";

function Collapse(props) {
  const [open, openSet] = useState(true); // initialise l'état du collapse à fermé (=open)

  return (
    <div className="collapse">
      <div className="collapse_header" onClick={() => openSet(!open)}>
        {/* change l'état : false ou true */}
        <span>{props.title}</span>
        {open && <img className="collapse_chevron" src={fleche} alt="Fleche" />}
        {/* affichage conditionnel */}
        {!open && (
          <img className="collapse_chevron" src={flecheHaute} alt="Fleche" />
        )}
        {/* open est false = collapse est ouvert */}
      </div>
      {!open && <div className="collapse_content">{props.children}</div>}
      {/* gère l'affichage du contenu */}
    </div>
  );
}

export default Collapse;
