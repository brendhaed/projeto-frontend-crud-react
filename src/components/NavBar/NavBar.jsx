import { Link } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
    return(
        <nav className="navbar">
            <ul className="navbar-links">
                <Link to="/"><li href="#">Página Inicial</li></Link>
                <Link to="/sobre"><li href="#">Sobre</li></Link>
                <Link to="/formulario"><li href="#">Cadastrar séries</li></Link>
                <Link to="/series"><li href="#">Lista de séries</li></Link>
            </ul> 
        </nav>
    )
}