import "./../../CSS/main.css"
import { Menu } from "./Menu";
import { Productos } from "./productos";

export function Cuerpo() {
    return (
        <div className="contenido">
            <Menu/>
            <Productos/>
        </div>
    );
}
