import { useSearchParams  } from "react-router-dom";
import { Main } from "./SearchStyles";

function Search() {
    let [searchParams, setSearchParams] = useSearchParams();
    
    return (
        <Main>
            Soy el Search y buscaste:
            <p>{searchParams.get("producto")}</p>
        </Main>
    );
}

export default Search;