import CartWidget from "./CartWidget";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CartPage from "./CartPage";

function NavBar() {
  return (
    <>
      <header className="header">
        <nav className="dropdown">
          <div>
            <a className="logo" href="/">
              <img className="logo" src="../logo.jpg" alt="logo" />
            </a>
          </div>
        <div>
          <Link className="dropbtn" to="/">Home</Link>
        </div>
          <div>
            <button className="dropbtn">Tipos de planta ▼</button>
            <div className="dropdown-content">
              <h4 className="dropdown-header">Categorías</h4>
              <Link className="dropdown-item" to="/tipos-de-plantas/suculentas">Suculentas</Link>
              <Link className="dropdown-item" to="/tipos-de-plantas/florales">Florales</Link>
              <Link className="dropdown-item" to="/tipos-de-plantas/interiores">Interiores</Link>
              
            </div>
          </div>
          <div>
          <Link className="dropbtn" to="/promociones">Promociones</Link>
          </div>
        <Link to="/cart"><CartWidget/></Link>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
