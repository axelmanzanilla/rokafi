import styled from "styled-components";
import { Link } from "react-router-dom";

export const Target = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 4px 16px 4px;
    padding: 4px;
    border-radius: 4px;
    background-color: white;
`;

export const Title = styled.h2`
    margin: 0 0 8px 0;
`;

export const ProductContainer = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-x: scroll;
    border-radius: 4px;

    &::-webkit-scrollbar{
        width: 0px;
        height: 0px;
    }
`;

export const Product = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 8px;
    min-width: 120px;
    height: 180px;
    border-radius: 4px;
    background-color: red;

    &:last-child{
        margin: 0;
    }
`;

export const ProductTitle = styled.h3`
    margin: 0;
`;

export const ProductImgContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0 4px 0 4px;
`;

export const ProductImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;
