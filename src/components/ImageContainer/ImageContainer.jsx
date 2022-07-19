import { Container, Img } from "./ImageContainerStyles";

function ImageContainer(props) {
    return (
        <Container w={ props.w } h={ props.h }>
            <Img src={ props.src } />
        </Container>
    );
}

export default ImageContainer;