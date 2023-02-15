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
  const logementDetails = logements.find((logement) => logement.id === id);

  if (!logementDetails) {
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
            <Rating rate={Number(logementDetails.rating)} base={5} />
          </div>
        </div>
      </div>
      <div className="logement_collapse">
        <div className="logement_description">
          <Collapse title="Description" content={logementDetails.description} />
        </div>
        <div className="logement_equipment">
          <Collapse title="Equipements" content={logementDetails.equipments} />
        </div>
      </div>
    </main>
  );
};
export default Logementspage;
