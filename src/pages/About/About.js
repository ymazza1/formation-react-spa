import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">À propos de TodoReact</h2>
      
      <div className="about-content">
        <section className="about-section">
          <h3>Notre application</h3>
          <p>
            TodoReact est une application moderne de gestion de tâches développée avec React.
            Cette application a été créée dans le cadre d'une formation sur les technologies
            React et les bonnes pratiques de développement front-end.
          </p>
        </section>
        
        <section className="about-section">
          <h3>Fonctionnalités</h3>
          <ul className="feature-list">
            <li>Création et gestion de tâches</li>
            <li>Marquage des tâches comme terminées</li>
            <li>Filtrage des tâches selon leur statut</li>
            <li>Navigation entre différentes pages</li>
            <li>Interface utilisateur responsive et moderne</li>
          </ul>
        </section>
        
        <section className="about-section">
          <h3>Technologies utilisées</h3>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>React</h4>
              <p>Bibliothèque JavaScript pour construire des interfaces utilisateur</p>
            </div>
            <div className="tech-item">
              <h4>React Router</h4>
              <p>Navigation et gestion des routes dans l'application</p>
            </div>
            <div className="tech-item">
              <h4>CSS Modules</h4>
              <p>Styles encapsulés pour chaque composant</p>
            </div>
            <div className="tech-item">
              <h4>Lucide Icons</h4>
              <p>Bibliothèque d'icônes pour une interface moderne</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;