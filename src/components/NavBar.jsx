import CartWidget from "./CartWidget";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";








function NavBar() {
 
    return (
        <>
        <header className="header">
            <nav className="nav-bar">
              <div>
                <a className="logo" href='/Home.jsx'>
                    <img className="logo" src='../logo.jpg' alt='logo' />
                </a>
              </div>
            
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/tipos-de-plantas">Tipos de planta</Link>
              <Link className="nav-link" to="/promociones">Promociones</Link>

              <CartWidget/>
               
            </nav>
        </header>
        </>

    )
}        

export default NavBar 