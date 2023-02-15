import React from "react";
import Logo from "../../assets/LOGO.png";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <img src={Logo} alt="logo kasa" />
      <nav>
        <ul className="Nav_item">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/About">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
