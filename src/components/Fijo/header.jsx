import "./../../CSS/header + footer.css";
import { Login } from "./login";
import  icon_menu from "./../../img/menu.png"

export function Encabesado (){
    return(
    <>
        <div className="menu-desplegable">
            <button><img src= {icon_menu} alt="Boton De Menu" /></button>    
        </div>
        <nav className="nav_1">
            <div className="buscador">
                <input id="buscador" placeholder="Buscar"/>
                <button>Buscar</button>
            </div>
            <ul>
                <Login />
            </ul>
        </nav>
    </>
    )
}