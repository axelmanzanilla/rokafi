import { Header, Placeholder, A } from "./HeaderStyles";
import { OpenMenu } from "../../functions";
import IconButton from "../IconButton/IconButton";
import { icons } from "../../globalStyles";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

function HeaderComponent(){
    return (
        <Header>
            <IconButton icon='menu' click={OpenMenu} size={ icons.size } font={ icons.font } />
            <Logo />
            <Placeholder />
            <SearchBar />
            <A to='/carrito'><IconButton icon='shopping_cart' size={ icons.size } font={ icons.font }/></A>
        </Header>
    );
}

export default HeaderComponent;
