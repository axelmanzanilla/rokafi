import { useEffect } from "react";
import { useNavigate, useSearchParams  } from "react-router-dom";
import { Header } from "./HeaderStyles";
import { OpenMenu } from "../../functions";
import IconButton from "../IconButton/IconButton";
import { headerStyles } from "../../globalStyles";

function HeaderComponent() {
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();

    function submit(e){
        e.preventDefault();
        navigate('/buscar?producto=' + document.forms[0].buscar.value);
    }

    useEffect(() => {
        document.forms[0].buscar.value = searchParams.get("producto");
    }, [searchParams]);

    return (
        <Header>
            <IconButton icon='menu' size={headerStyles.menuIconSize} click={OpenMenu}/>
            <p>ROKAFI</p>
            <form method="get" onSubmit={submit}>
                <input type="text" name="producto" id="producto" defaultValue={searchParams.get("producto")}/>
            </form>
            <IconButton icon='shopping_cart' size={headerStyles.menuIconSize}/>
        </Header>
    );
}

export default HeaderComponent;
