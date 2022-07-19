import { useSearchParams  } from "react-router-dom";
import { Main } from "./SearchStyles";

function Search() {
    let [searchParams, setSearchParams] = useSearchParams();
    
    return (
        <Main>
            Buscaste:
            <p>{searchParams.get("producto")}</p>
        </Main>
    );
}

export default Search;