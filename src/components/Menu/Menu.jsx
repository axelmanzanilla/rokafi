import { Link } from "react-router-dom";
import { CollapsedMenu, BackgroundMenu, VisibleMenu, Nav } from "./MenuStyles";
import { CloseMenu } from "../../functions";
import IconButton from "../IconButton/IconButton";
import { icons } from "../../globalStyles";

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
                <IconButton icon='close' click={CloseMenu} size={ icons.size } font={ icons.font } />
            </VisibleMenu>
        </CollapsedMenu>
    );
}

export default Menu;
