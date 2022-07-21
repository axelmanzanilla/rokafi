import { Container, Category as Categoryf, Title } from "./CategoryStyles";
import HomeTarget from "../../components/HomeTarget/HomeTarget";
import ImageCointainer from "../../components/ImageContainer/ImageContainer";

function Category(props) {
    return (
        <main>
            <HomeTarget title={ props.category }>
            </HomeTarget>
        </main>
    );
}

export default Category;
