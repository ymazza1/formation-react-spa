
import React from "react";
import "./Header.css";
import { CheckSquare } from "lucide-react";

function Header() {
    return(
    <header className="app-header">
        <div className="logo">
        <CheckSquare size={32} />
        <h1>Todo React</h1>
        </div>
        

    </header>
    )
}

export default Header