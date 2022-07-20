import {  } from "./ProductStyles";
import HomeTarget from "../../components/HomeTarget/HomeTarget";

function Product(props) {
    return (
        <HomeTarget title={ props.product }>
        </HomeTarget>
    );
}

export default Product;
