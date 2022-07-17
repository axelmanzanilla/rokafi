import { Link } from "react-router-dom";
import { CollapsedMenu, BackgroundMenu, VisibleMenu, CloseIcon, Nav } from "./MenuStyles";
import { CloseMenu } from "../../functions";

function Menu() {
    

    return (
        <CollapsedMenu>
            <BackgroundMenu onClick={CloseMenu}/>
            <VisibleMenu>
                <Nav>
                    Bienvenido
                    <ul>
                        <li><Link to='/' onClick={CloseMenu}>Inicio</Link></li>
                        <li><Link to='/contacto' onClick={CloseMenu}>Contacto</Link></li>
                    </ul>
                </Nav>
                <CloseIcon onClick={CloseMenu}/>
            </VisibleMenu>
        </CollapsedMenu>
    );
}

export default Menu;