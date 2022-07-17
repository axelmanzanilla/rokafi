import { Header, MenuIcon } from "./HeaderStyles";
import { OpenMenu } from "../../functions";

function HeaderComponent() {
        return (
        <Header>
            <MenuIcon onClick={OpenMenu}/>
            <p>EL HEADER</p>
            Hambur
        </Header>
    );
}

export default HeaderComponent;