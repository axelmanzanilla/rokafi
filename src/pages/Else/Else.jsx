import {  } from "./ElseStyles";
import { useParams } from 'react-router-dom';
import Category from "../Category/Category";
import Product from "../Product/Product";
import Error from "../Error/Error";

function Else(props) {
    const params = useParams();
    const categories = ['ofertas', 'playa', 'ropa', 'escuela', 'videojuegos']
    const products = ['xbox', 'playstation5', 'nintendo', 'xiaomi']

    if(categories.findIndex(c => params.input == c) >= 0){
        return (<Category category={ params.input } />);
    }
    else if(products.findIndex(p => params.input == p) >= 0){
        return (<Product product={ params.input } />);
    }
    else return (<Error />);
}

export default Else;
