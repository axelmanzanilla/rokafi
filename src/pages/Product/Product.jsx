import {  } from "./ProductStyles";
import HomeTarget from "../../components/HomeTarget/HomeTarget";

function Product(props) {
    return (
        <main>
            <HomeTarget title={ props.product }>
            </HomeTarget>
        </main>
    );
}

export default Product;
