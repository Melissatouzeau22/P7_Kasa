import { NavLink } from "react-router-dom";
import "../Error/Error.css";

const Error = () => {
  document.title = "Kasa - Page introuvable";
  return (
    <main className="error_container">
      <div className="error_content">
        <h1>404</h1>
        <h2 className="error_page">
          Oups! La page que vous demandez n'héxiste pas.{" "}
        </h2>
      </div>
      <div className="back_link">
        <NavLink to="/">Retourne sur la page d'accueil</NavLink>
      </div>
    </main>
  );
};

export default Error;
