import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa"
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container justify-content-center">
          <Link className="navbar-brand" to="/">
            <FaCocktail color="red"/> COCKTAIL WEBSITE
          </Link>
          <ul>
            <li className="nav-item">
              <Link className="nav-link disabled">Disabled</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
