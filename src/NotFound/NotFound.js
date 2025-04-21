import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { Home, AlertTriangle } from "lucide-react";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-icon">
          <AlertTriangle size={60} />
        </div>
        <h2 className="not-found-title">Page non trouvée</h2>
        <p className="not-found-message">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="home-button">
          <Home size={18} />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default NotFound;