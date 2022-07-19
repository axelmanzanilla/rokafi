import { Main } from "./HomeStyles";
import Recommended from "../../components/Recommended/Recommended";
import Categories from "../../components/Categories/Categories";

function Home() {
    return (
        <Main>
            <Recommended title="Lo más nuevo"/>
            <Recommended title="Recomendado para ti"/>
            <Categories />
            <Recommended title="Regreso a clases"/>
        </Main>
    );
}

export default Home;
