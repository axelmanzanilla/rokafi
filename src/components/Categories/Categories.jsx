import { Container, CategoryLink, Title} from "./CategoriesStyles";
import HomeTarget from "../HomeTarget/HomeTarget";
import ImageCointainer from "../ImageContainer/ImageContainer";

function Categories(props) {
    let categories = [
        {
            "title": "Ropa",
            "image": "https://images.vexels.com/media/users/3/142546/isolated/preview/2f6d0faa355125320122dc57e8b07084-tshirt-icon-by-vexels.png"
        },
        {
            "title": "Videojuegos",
            "image": "https://cdn-icons-png.flaticon.com/512/13/13973.png"
        },
        {
            "title": "Escuela",
            "image": "https://uxwing.com/wp-content/themes/uxwing/download/18-education-school/read-book.png"
        },
        {
            "title": "Playa",
            "image": "https://icon-library.com/images/beach-icon/beach-icon-19.jpg"
        },
        {
            "title": "Ofertas",
            "image": "https://icon-library.com/images/discount-icon-png/discount-icon-png-0.jpg"
        }
    ]
    return (
        <HomeTarget title="Categorías">
            <Container>
            {
                categories ? (
                    categories.map((category, i) =>
                        <li key={i}>
                            <CategoryLink to={`/${ category.title.toLowerCase() }`}>
                                <ImageCointainer src={ category.image } w="60px" h="60px" />
                                <Title>{ category.title }</Title>
                            </CategoryLink>
                        </li>
                    )
                ) : <>ERROR</>
            }
            </Container>
        </HomeTarget>
    );
}

export default Categories;