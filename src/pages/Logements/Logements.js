import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rate/Rate";
import "../Logements/Logements.css";

const Logementspage = () => {
  const { id } = useParams();
  /* Trouver le bon logement grâce à son id*/
  const logementDetails = logements.find((logement) => logement.id === id);

  if (!logementDetails) {
    /* Redirection vers la page 404 */
    return <Navigate replace to="/404" />;
  }

  return (
    <main className="logement_container">
      <Slideshow img={logementDetails.pictures} alt={logementDetails.title} />
      <div className="logement_details">
        <div>
          <div className="logement_title">
            <h1>{logementDetails.title}</h1>
            <h2>{logementDetails.location}</h2>
          </div>
          <div className="tag_container">
            <Tag tags={logementDetails.tags} />
          </div>
        </div>
        <div className="logement_host_container">
          <div className="logement_host">
            <span>{logementDetails.host.name}</span>
            <img src={logementDetails.host.picture} alt=""></img>
          </div>
          <Rating rate={Number(logementDetails.rating)} base={5} />
        </div>
      </div>
      <div className="logement_collapse">
        <Collapse title="Description">{logementDetails.description}</Collapse>
        <div className="logement_equipment">
          <Collapse title="Equipements">
            <ul>
              {logementDetails.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </main>
  );
};
export default Logementspage;
