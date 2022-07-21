import { Footer, Social, A } from "./FooterStyles";

function FooterComponent() {
    return (
        <Footer>
            Síguenos en nuestras redes sociales:
            <Social>
                <A href="https://facebook.com/rokafimx"><img src="https://storage.googleapis.com/assets-impregnarte/icons/facebook.png" width='28px' /></A>
                <A href="https://instagram.com/rokafimx"><img src="https://storage.googleapis.com/assets-impregnarte/icons/instagram.png" width='28px' /></A>
            </Social>
            <p>Rokafi 2022. Developed by <A href="https://axelmanzanilla.com">Axel Manzanilla.</A></p>
        </Footer>
    );
}

export default FooterComponent;
