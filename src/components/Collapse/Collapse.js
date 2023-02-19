import React, { useState } from "react";
import fleche from "../../assets/fleche_bas.png";
import flecheHaute from "../../assets/fleche.png";
import "../Collapse/Collapse.css";

function Collapse(props) {
  const [open, openSet] = useState(true);

  return (
    <div className="collapse">
      <div className="collapse_header" onClick={() => openSet(!open)}>
        <span>{props.title}</span>
        {open && <img className="collapse_chevron" src={fleche} alt="Fleche" />}
        {!open && (
          <img className="collapse_chevron" src={flecheHaute} alt="Fleche" />
        )}
      </div>
      {!open && <div className="collapse_content">{props.children}</div>}
    </div>
  );
}

export default Collapse;
