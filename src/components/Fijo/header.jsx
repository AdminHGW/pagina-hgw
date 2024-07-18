import "./../../CSS/header + footer.css";
import { Login } from "./login";

export function Encabesado (){
    return(
            <nav className="nav_1">
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                    <li>
                        <a href="#">normal</a>
                    </li>
                    <li>
                        <a href="#">Deathmatch</a>
                    </li>
                </ul>
                <ul>
                    <Login />
                </ul>
            </nav>
    )
}