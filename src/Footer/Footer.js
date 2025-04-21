import React from "react";
import "./Footer.css"
import { Github, Import, Linkedin, Mail } from "lucide-react";


function Footer({name}){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-info">
            <p>© {currentYear} {name} - Application TodoReact</p>
            <p className="footer-description">
              Développée dans le cadre d'une formation React
            </p>
          </div>
          <div className="social-links">
          <a href="#" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" aria-label="Email">
            <Mail size={20} />
          </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer