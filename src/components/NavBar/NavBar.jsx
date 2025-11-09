import { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { FaBars } from "react-icons/fa";


export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="navbar">
            <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/formulario">Cadastrar séries</Link></li>
                <li><Link to="/series">Lista de séries</Link></li>
            </ul> 
        </nav>
        
    )
}