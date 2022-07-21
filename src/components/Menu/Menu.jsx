import { CollapsedMenu, BackgroundMenu, VisibleMenu, Nav, Li, A, Logout, LogoutLink, Close } from "./MenuStyles";
import { Welcome, Name, ProfilePicture } from "./MenuStyles";
import Icon from "../Icon/Icon";

function Menu() {
    let user = {
        name: 'Axel',
        lastName: 'Manzanilla Martin',
        picture: 'https://scontent.fmid1-3.fna.fbcdn.net/v/t1.6435-9/40172380_1986814194697353_5005642469178605568_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2zLtd1Q5ahIAX__uTEz&tn=OYF9-n7yJW-qSIjV&_nc_ht=scontent.fmid1-3.fna&oh=00_AT8gvhDs2V-cGMpxO9PvqYbFKbEoT1wk0D1mQxzQge1uJA&oe=62FF0C18'
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
                <Welcome>
                    <Name>Bienvenido, { user.name }</Name>
                    <ProfilePicture src={ user.picture } alt="" />
                </Welcome>
                <Nav>
                    <Li><A to='/' onClick={CloseMenu}><Icon icon='home' right='10px' font='28px'/>Inicio</A></Li>
                    <Li><A to='/perfil' onClick={CloseMenu}><Icon icon='account_circle' right='10px' font='28px'/>Mi perfil</A></Li>
                    <Li><A to='/ofertas' onClick={CloseMenu}><Icon icon='sell' right='10px' font='28px'/>Ofertas</A></Li>
                    <Li><A to='/categorias' onClick={CloseMenu}><Icon icon='label' right='10px' font='28px'/>Categorías</A></Li>
                    <Li><A to='/informacion' onClick={CloseMenu}><Icon icon='help' right='10px' font='28px'/>Información</A></Li>
                    <Li><A to='/contacto' onClick={CloseMenu}><Icon icon='contact_support' right='10px' font='28px'/>Contacto</A></Li>
                </Nav>
                <Logout><LogoutLink to='/' onClick={CloseMenu}>Cerrar sesión<Icon icon='logout' right='10px' font='20px'/></LogoutLink></Logout>
                <Close onClick={CloseMenu}>close</Close>
            </VisibleMenu>
        </CollapsedMenu>
    );
}

export default Menu;
