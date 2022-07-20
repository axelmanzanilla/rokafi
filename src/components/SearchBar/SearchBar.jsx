import { Container, Input, Back } from "./SearchBarStyles";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import { icons, searchBar } from "../../globalStyles";

function SearchBar(){
    const navigate = useNavigate();
    let [focus, setFocus] = useState(false);
    let [searchParams, setSearchParams] = useSearchParams();

    function OpenMenu(){
        document.querySelector('.collapsed-menu').classList.add('show-menu');
        document.querySelector('.background-menu').classList.add('opacity-menu');
    }

    function CloseMenu(){
        document.querySelector('.collapsed-menu').classList.remove('show-menu');
        document.querySelector('.background-menu').classList.remove('opacity-menu');
    }

    function Submit(e){
        e.preventDefault();
        document.activeElement.blur();
        navigate('/buscar?producto=' + document.forms['searchbar'].producto.value);
    }

    useEffect(() => {
        document.forms['searchbar'].producto.value = searchParams.get("producto");
    }, [searchParams]);

    return(
        <Container method="get" onSubmit={Submit} name='searchbar' focus={focus}>
            <Back size={searchBar.height} font={ icons.font } focus={focus}>arrow_back</Back>
            <Input
                type="text"
                name="producto"
                focus={focus}
                placeholder={ focus ? "" : "Buscar" }
                defaultValue={ searchParams.get('producto') }
                onFocus={ () => {setFocus(true); OpenMenu();} }
                onBlur={ () => {setFocus(false); CloseMenu();} } />
            <IconButton icon='search' size={searchBar.height} font={ icons.font } click={Submit} />
        </Container>
    );
}

export default SearchBar;
