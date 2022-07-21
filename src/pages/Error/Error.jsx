import { Container, Category as Categoryf, Title } from "./ErrorStyles";
import { useParams } from 'react-router-dom';
import HomeTarget from "../../components/HomeTarget/HomeTarget";
import ImageCointainer from "../../components/ImageContainer/ImageContainer";

function Error(props) {
    return (
        <main>
            Esta pagina no existe
        </main>
    );
}

export default Error;
