import { Link } from "react-router-dom";
import { CollapsedMenu, BackgroundMenu, VisibleMenu, Nav } from "./MenuStyles";
import { CloseMenu } from "../../functions";
import IconButton from "../IconButton/IconButton";
import { headerStyles } from "../../globalStyles";

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
                <IconButton icon='close' size={headerStyles.menuIconSize} click={CloseMenu}/>
            </VisibleMenu>
        </CollapsedMenu>
    );
}

export default Menu;
