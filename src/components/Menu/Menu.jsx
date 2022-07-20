import { CollapsedMenu, BackgroundMenu, VisibleMenu, Nav, Li, A, Close } from "./MenuStyles";
import { ProfilePicture } from "./MenuStyles";

function Menu() {
    let user = {
        name: 'Axel Rodrigo',
        picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    }

    function CloseMenu(){
        document.querySelector('body').classList.remove('block-body');
        document.querySelector('.collapsed-menu').classList.remove('show-menu');
        document.querySelector('.visible-menu').classList.remove('move-menu');
        document.querySelector('.background-menu').classList.remove('opacity-menu');
    }
    
    return (
        <CollapsedMenu>
            <BackgroundMenu onClick={CloseMenu}/>
            <VisibleMenu>
                <p>Bienvenido { user.name }</p>
                <ProfilePicture src={ user.picture } alt="" />
                <Nav>
                    <Li><A to='/' onClick={CloseMenu}>Inicio</A></Li>
                    <Li><A to='/perfil' onClick={CloseMenu}>Mi perfil</A></Li>
                    <Li><A to='/ofertas' onClick={CloseMenu}>Ofertas</A></Li>
                    <Li><A to='/categorias' onClick={CloseMenu}>Categorías</A></Li>
                    <Li><A to='/informacion' onClick={CloseMenu}>Información</A></Li>
                    <Li><A to='/contacto' onClick={CloseMenu}>Contacto</A></Li>
                </Nav>
                <Close onClick={CloseMenu}>close</Close>
            </VisibleMenu>
        </CollapsedMenu>
    );
}

export default Menu;
