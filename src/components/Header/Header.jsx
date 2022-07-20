import { Header, Placeholder, A } from "./HeaderStyles";
import IconButton from "../IconButton/IconButton";
import { icons } from "../../globalStyles";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

function HeaderComponent(){
    function OpenMenu(){
        document.querySelector('body').classList.add('block-body');
        document.querySelector('.collapsed-menu').classList.add('show-menu');
        document.querySelector('.visible-menu').classList.add('move-menu');
        document.querySelector('.background-menu').classList.add('opacity-menu');
    }

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
