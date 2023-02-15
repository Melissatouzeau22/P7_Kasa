import React, { useState } from "react";
import fleche from "../../assets/fleche_bas.png";
import flecheHaute from "../../assets/fleche.png";
import "../Collapse/Collapse.css";

function Collapse(props) {
  const [open, openSet] = useState(true);

  return (
    <div className="collapse">
      <div className="collapse_container" onClick={() => openSet(!open)}>
        <span>{props.title}</span>
        {open && <img className="collapse_chevron" src={fleche} alt="Fleche" />}
        {!open && (
          <img className="collapse_chevron" src={flecheHaute} alt="Fleche" />
        )}
      </div>
      {!open && ( // when collapse is open, display content
        <div className="collapse_content">
          {Array.isArray(props.content) ? (
            // content may be different depending on the source of the data
            <ul>
              {props.content.map(
                // array for "equipments" ...
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          ) : (
            <p>{props.content}</p> // ... and string for "description"
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
