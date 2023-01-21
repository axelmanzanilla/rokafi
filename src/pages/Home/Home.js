import { Main } from "./HomeStyles";
import Recommended from "../../components/Recommended/Recommended";
import Categories from "../../components/Categories/Categories";
import React, { useEffect, useState } from "react";

function Home() {
    let [products, setProducts] = useState([]);

    function getData(){
        let data = fetch("https://firestore.googleapis.com/v1beta1/projects/rokafi/databases/(default)/documents/products/");
        products = data;
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, products);

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
