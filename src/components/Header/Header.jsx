import { Checkbox, CollapsedMenu } from "./HeaderStyles";
import HamburguerButton from "../Hamburguer/HamburguerButton";

function Header() {
    function clickMenu(){
        document.querySelector('body').classList.toggle('block-body');
        document.querySelector('.collapsed-menu').classList.toggle('show-menu');
    }

    return (
        <header>
            <Checkbox type="checkbox" name="check-menu" id="check-menu" onClick={clickMenu} />
            <p>EL HEADER</p>
            Hambur
            <CollapsedMenu>Hola col</CollapsedMenu>
        </header>
    );
}

export default Header;