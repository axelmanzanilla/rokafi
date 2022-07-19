import { useEffect } from "react";
import { Link, useNavigate, useSearchParams  } from "react-router-dom";
import { Header } from "./HeaderStyles";
import { OpenMenu } from "../../functions";
import IconButton from "../IconButton/IconButton";
import { headerStyles } from "../../globalStyles";
import Logo from "../Logo/Logo";

function HeaderComponent() {
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();

    function submit(e){
        e.preventDefault();
        navigate('/buscar?producto=' + document.forms[0].producto.value);
    }

    useEffect(() => {
        document.forms[0].producto.value = searchParams.get("producto");
    }, [searchParams]);

    return (
        <Header>
            <IconButton icon='menu' size={headerStyles.menuIconSize} click={OpenMenu}/>
            <Logo />
            <form method="get" onSubmit={submit}>
                <input type="text" name="producto" id="producto" defaultValue={searchParams.get("producto")}/>
            </form>
            <Link to='/carrito'>
                <IconButton icon='shopping_cart' size={headerStyles.menuIconSize}/>
            </Link>
        </Header>
    );
}

export default HeaderComponent;
