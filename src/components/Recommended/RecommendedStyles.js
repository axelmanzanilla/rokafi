import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../globalStyles";

export const Container = styled.ul`
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

export const Product = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 4px 0 4px;
    min-width: 120px;
    height: 180px;
    border-radius: 4px;
    color: black;
    background-color: ${ theme.color1 };
    text-decoration: none;
`;

export const Title = styled.h3`
    margin: 0;
`;
