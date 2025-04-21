
import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import { CheckSquare } from "lucide-react";

function Header() {
    return(
    <header className="app-header">
        <div className="logo">
        <Link to="/" className="logo-link">
          <CheckSquare size={32} />
          <h1>TodoReact</h1>
        </Link>
        </div>
        <div className="header-menu">
        <nav>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
            end
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
    )
}

export default Header